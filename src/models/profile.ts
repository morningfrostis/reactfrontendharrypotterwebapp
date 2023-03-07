export type ProfileInput = {
  password: string;
  email: string;
};

export const normalizeProfile = (input: any) => {
  return {
    id: (input?.id || "") as string,
    email: (input?.email || "") as string,
  };
};

export type FavoriteInput = {
  favorites: [];
  favoritesSpells: [];
  favoritesStaff: [];
  favoritesStudents: [];
};

export const normalizeFavorites = (input: any) => {
  return {
    favorites: (input?.favorites || []) as {
      id: string;
      characterId: string;
      name: string;
      species: string;
      house: string;
      wizard: string;
      ancestry: string;
      patronus: string;
      actor: string;
      image: string;
      createdAt: Date;
      updatedAt: Date;
    }[],
  };
};

export type Profile = ReturnType<typeof normalizeProfile>;
export type Favorites = ReturnType<typeof normalizeFavorites>;
