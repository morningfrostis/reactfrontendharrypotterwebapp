import { Favorites, normalizeFavorites, normalizeProfile, Profile } from "../../models/profile";
import { getToken } from "../../services/storage";

const BASE_API_URL = "http://localhost:8000/users/profile";
const BASE_API_URL_FAVS = "http://localhost:8000/users/favorites";


export const getUserInfo = async (): Promise<Profile | null> => {
  const token = getToken();
  const response = await fetch(BASE_API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return normalizeProfile(data);
};

export const getUserFavorites = async (): Promise<Favorites | null> => {
  const token = getToken();
  const response = await fetch(BASE_API_URL_FAVS, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  console.log(data, 'esto es la data')
  return normalizeFavorites(data);
};
