import type { StudentResponse } from "../services/api/students";

export type StudentInput = {
  id: string;
  studentId: string;
  name: string;
  species: string;
  house: string;
  wizard: string;
  ancestry: string;
  wand: {
    wood: string;
    core: string;
    size: string;
  };
  patronus: string;
  actor: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
};

const getDefaultImage = (house: string) => {
  switch (house) {
    case "Gryffindor":
      return "https://64.media.tumblr.com/9e0ee5d829bcc71745f02d366adc1479/tumblr_o8s13618fJ1s42pu5o2_1280.jpg";
    case "Slytherin":
      return "https://64.media.tumblr.com/7dbc0f5abd753c81f66c079e573e765f/tumblr_o8s13618fJ1s42pu5o4_1280.jpg";
    case "Ravenclaw":
      return "https://64.media.tumblr.com/43e8caab3d582a1dfd0c15fa2b9388c8/tumblr_o8s13618fJ1s42pu5o1_1280.jpg";
    case "Hufflepuff":
      return "https://64.media.tumblr.com/b56e9126b9da847babbf877cb260a08c/tumblr_o8s13618fJ1s42pu5o3_1280.jpg";
    default:
      return "https://i.pinimg.com/564x/07/a4/99/07a4993c3feeb70605ee13c7a2fc1041.jpg";
  }
};

export const normalizeStudent = (input: StudentResponse) => {
  const house = input?.house || "";
  const image = input?.image ? input.image : getDefaultImage(house);

  return {
    id: input?.id || "",
    studentId: input?.studentId || "",
    name: input?.name || "",
    species: input?.species || "",
    house,
    wizard: input?.wizard || "",
    ancestry: input?.ancestry || "",
    wand: {
      wood: input?.wand?.wood || "",
      core: input?.wand?.core || "",
      size: input?.wand?.length || "",
    },
    patronus: input?.patronus || "",
    actor: input?.actor || "",
    image,
    createdAt: input?.createdAt || Date(),
    updatedAt: input?.updatedAt || Date(),
  };
};

export type Student = ReturnType<typeof normalizeStudent>;
