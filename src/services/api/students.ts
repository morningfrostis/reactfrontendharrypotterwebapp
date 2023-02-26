import { getToken } from "../storage";

export type Student = {
  id: string;
  studentsId: string;
  name: string;
  species: string;
  house: string;
  wizard: string;
  ancestry: string;
  wand: JSON;
  patronus: string;
  actor: string;
  image: string;
};

const BASE_API_URL = "http://localhost:8000/students";

export const getStudents = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Student[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncStudents = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncStudents", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const removeStudent = async (id: string) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createStudent = async (data: Omit<Student, "id">) => {
  try {
    const token = getToken();
    await fetch(BASE_API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const updateStudent = async (id: string, data: Partial<Student>) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
