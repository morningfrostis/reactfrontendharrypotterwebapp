import type { ProfileResponse } from "../services/api/profile";

export type ProfileInput = {
  id: string;
  email: string;
};

export const normalizeProfile = (input: ProfileResponse) => {
  return {
    id: input?.id || "",
    email: input?.email || "",
  };
};

export type Profile = ReturnType<typeof normalizeProfile>;
