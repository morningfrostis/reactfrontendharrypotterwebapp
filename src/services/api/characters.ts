import { getToken } from "../storage";

export type Character = {
  id: string;
  characterId: string;
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

const BASE_API_URL = "http://localhost:8000/syncCharacters";

export const getCharacters = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Character[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncMars = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncApi/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const removeCharacter = async (id: string) => {
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

export const createCharacter = async (data: Omit<Character, "id">) => {
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

export const updateCharacter = async (id: string, data: Partial<Character>) => {
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
