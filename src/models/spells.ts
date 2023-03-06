import type { SpellResponse } from "../services/api/spells";

export type SpellInput = {
  id: string;
  spellId: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export const normalizeSpells = (input: SpellResponse) => {
  return {
    id: input?.id || "",
    spellId: input?.spellId || "",
    name: input?.name || "",
    description: input?.description || "",
  };
};

export type Spells = ReturnType<typeof normalizeSpells>;
