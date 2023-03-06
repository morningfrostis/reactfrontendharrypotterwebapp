import { normalizeStaff, Staff, StaffInput } from "../../models/staff";
import { Student } from "../../models/students";
import { getToken } from "../storage";

export type StaffResponse = {
  id: string;
  staffId: string;
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

const BASE_API_URL = "http://localhost:8000/staff";

export const getStaff = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: StaffResponse[] = await response.json();
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

export const getStaffById = async (id: string): Promise<Staff | null> => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_API_URL}/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: StaffResponse = await response.json();
    return normalizeStaff(data);
  } catch (error) {
    console.log((error as Error).message);
  }
  return null;
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

export const createStaff = async (data: Omit<StaffResponse, "id">) => {
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

export const updateStaff = async (id: string, data: Partial<StaffInput>) => {
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
    const staff: StaffResponse = await response.json();
    return normalizeStaff(staff);
  } catch (error) {
    console.log((error as Error).message);
  }
};
