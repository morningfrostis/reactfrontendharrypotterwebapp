import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  App,
  Container,
  Error,
  EditButton,
  InputContainer,
  Label,
  Input,
  AppEdit,
} from "./styles";
import { Field, Form, Formik } from "formik";
import { validationSchema } from "./constants";
import { useParams } from "react-router-dom";
import { getSpellById, updateSpells } from "../../services/api/spells";
import { Spells } from "../../models/spells";

const SpellEdit: FC = () => {
  const { id: spellId } = useParams();
  const [spell, setSpell] = useState<Spells | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleActiveEdition = useCallback(async () => {
    setIsEditing(true);
  }, []);
  console.log({ spellId });

  const onEditSpell = useCallback(
    async (values: Partial<Spells>) => {
      if (isEditing && spellId) {
        setIsLoading(true);
        const editedSpell = await updateSpells(spellId, values);
        if (editedSpell) {
          setSpell(editedSpell);
        }
        setIsLoading(false);
      }
    },
    [spellId, isEditing]
  );

  const initialValues = useMemo(
    () => ({
      spellId: spell?.spellId || "",
      name: spell?.name || "",
      description: spell?.description || "",
    }),
    [spell]
  );

  const handleGetSpell = useCallback(async (id?: string) => {
    if (id) {
      console.log("entramos");
      setIsLoading(true);
      const spell = await getSpellById(id);
      console.log({ spell });
      setSpell(spell);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetSpell(spellId);
  }, [handleGetSpell, spellId]);

  if (isLoading) {
    return <p>LOADING</p>;
  }
  console.log({ initialValues });
  return (
    <App>
      <AppEdit>
        <Container>
          {!isEditing && (
            <EditButton onClick={handleActiveEdition}>
              Active Edition
            </EditButton>
          )}
          <Formik
            type="edit"
            validationSchema={validationSchema}
            onSubmit={onEditSpell}
            initialValues={initialValues}
          >
            <Form>
              <Field name="name">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Name</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              <Field name="description">
                {({ field, meta }: { field: any; meta: any }) => (
                  <InputContainer>
                    <Label>Species</Label>
                    <Input
                      disabled={!isEditing}
                      $hasError={!!meta?.error}
                      type="text"
                      {...field}
                    />
                    {meta?.error && <Error>{meta.error}</Error>}
                  </InputContainer>
                )}
              </Field>
              {isEditing && <EditButton type="submit">Edit</EditButton>}
            </Form>
          </Formik>
        </Container>
      </AppEdit>
    </App>
  );
};

export default memo(SpellEdit);
