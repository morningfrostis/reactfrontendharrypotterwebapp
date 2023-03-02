import { getToken } from "../storage";

export type Spell = {
  id: string;
  spellId: string;
  name: string;
  description: string;
};

const BASE_API_URL = "http://localhost:8000/spells";

export const getSpells = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: Spell[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncSpells = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncSpells", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const removeSpells = async (id: string) => {
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

export const createSpells = async (data: Omit<Spell, "id">) => {
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

export const updateSpells = async (id: string, data: Partial<Spell>) => {
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
