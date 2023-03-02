import { normalizeProfile } from "../../models/profile";
import { getToken } from "../../services/storage";

export type ProfileResponse = {
  id: string;
  email: string;
};

const BASE_API_URL = "http://localhost:8000/profile";

export const getUserInfo = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: ProfileResponse[] = await response.json();
    return data.map(normalizeProfile);
  } catch (error) {
    console.log((error as Error).message);
  }
};
