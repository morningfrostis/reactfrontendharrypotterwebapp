import { getToken } from "../storage";

export type Staff = {
  id: string;
  staffId: string;
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

const BASE_API_URL = "http://localhost:8000/staff";

export const getStaff = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Staff[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncStaff = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncStaff", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const removeStaff = async (id: string) => {
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

export const createStaff = async (data: Omit<Staff, "id">) => {
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

export const updateStaff = async (id: string, data: Partial<Staff>) => {
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
