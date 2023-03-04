import { normalizeStudent, Student, StudentInput } from "../../models/students";
import { getToken } from "../storage";

export type StudentResponse = {
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
    length: string;
  };
  patronus: string;
  actor: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
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
    const data: StudentResponse[] = await response.json();
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

export const getStudentById = async (
  id: string
): Promise<Student | null> => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: StudentResponse = await response.json();
    return normalizeStudent(data);
  } catch (error) {
    console.log((error as Error).message);
  }
  return null;
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

export const createStudent = async (data: Omit<StudentResponse, "id">) => {
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

export const updateStudent = async (id: string, data: Partial<StudentInput>) => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const student: StudentResponse = await response.json();
    console.log({ student });
    return normalizeStudent(student);
  } catch (error) {
    console.log((error as Error).message);
  }
};
