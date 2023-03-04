import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  id: Yup.string(),
  spellId: Yup.string(),
  name: Yup.string(),
  description: Yup.string(),
});
