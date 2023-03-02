import { getToken } from "../storage";
import { Character, CharacterInput, normalizeCharacter } from "../../models/character";

export type CharacterResponse = {
  id: string;
  characterId: string;
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

const BASE_API_URL = "http://localhost:8000/characters";

export const getCharacters = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: CharacterResponse[] = await response.json();
    console.log(data);
    return data.map(normalizeCharacter);
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncCharacters = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncCharacters", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const getCharacterById = async (id: string): Promise<Character | null> => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: CharacterResponse = await response.json();
    return normalizeCharacter(data)
  } catch (error) {
    console.log((error as Error).message);
  }
  return null
};

export const removeCharacter = async (id: string) => {
  try {
    const token = getToken();
    await fetch(`${BASE_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(fetch);
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const createCharacter = async (data: Omit<Character, "id">) => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    const character: CharacterResponse = await response.json();
    return normalizeCharacter(character)
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const updateCharacter = async (id: string, data: CharacterInput) => {
  try {
    const token = getToken();
   const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    const character: CharacterResponse = await response.json();
    return normalizeCharacter(character)
  } catch (error) {
    console.log((error as Error).message);
  }
};
