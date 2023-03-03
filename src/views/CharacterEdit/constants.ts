import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  image: Yup.string(),
  name: Yup.string(),
  species: Yup.string(),
  house: Yup.string(),
  wizard: Yup.string(),
  ancestry: Yup.string(),
  wand: Yup.string(),
  patronus: Yup.string(),
  actor: Yup.string(),
});
