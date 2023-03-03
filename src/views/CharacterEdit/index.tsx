import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  App,
  Container,
  Image,
  Error,
  EditButton,
  InputContainer,
  Label,
  Input,
} from "./styles";
import { Field, Form, Formik } from "formik";
import { validationSchema } from "./constants";
import { Character } from "../../models/character";
import { useParams } from "react-router-dom";
import { getCharacterById, updateCharacter } from "../../services/api/characters";

const CharacterEdit: FC = () => {
  const { id: characterId } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleActiveEdition = useCallback(async () => {
    setIsEditing(true);
  }, []);

  const onEditCharacter = useCallback(
    async (values: Character) => {
      if (isEditing && characterId) {
        setIsLoading(true);
        const editedCharacter = await updateCharacter(characterId, values);
        if (editedCharacter) {
          setCharacter(editedCharacter);
        }
        setIsLoading(false);
      }
    },
    [characterId, isEditing]
  );

  console.log({ character });
  const initialValues = useMemo(
    () => ({
      id: character?.id || "",
      characterId: character?.characterId || "",
      image: character?.image || "",
      name: character?.name || "",
      species: character?.species || "",
      house: character?.house || "",
      wizard: character?.wizard || "",
      ancestry: character?.ancestry || "",
      wand: {
        wood: character?.wand.wood || "",
        core: character?.wand.core || "",
        size: character?.wand.size || "",
      },
      patronus: character?.patronus || "",
      actor: character?.actor || "",
      createdAt: character?.createdAt || new Date(),
      updatedAt: character?.updatedAt || new Date(),
    }),
    [character]
  );

  const handleGetCharacter = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const character = await getCharacterById(id);
      setCharacter(character);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetCharacter(characterId);
  }, [handleGetCharacter, characterId]);

  if (isLoading) {
    return <p>LOADING</p>
  }

  return (
    <App>
      <Image src={character?.image} />
      <Container>
        <Formik
          validationSchema={validationSchema}
          onSubmit={onEditCharacter}
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
            <Field name="species">
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
            <Field name="house">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>House</Label>
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
            <Field name="wizard">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Wizard</Label>
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
            <Field name="ancestry">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Ancestry</Label>
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
            <Field name="wand.wood">
            {({ field, meta }: { field: any; meta: any }) => (
              <InputContainer>
                <Label>Wand</Label>
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
            <Field name="patronus">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Patronus</Label>
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
            <Field name="actor">
              {({ field, meta }: { field: any; meta: any }) => (
                <InputContainer>
                  <Label>Actor</Label>
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
        {!isEditing && (
          <EditButton onClick={handleActiveEdition}>Active Edition</EditButton>
        )}
      </Container>
    </App>
  );
};

export default memo(CharacterEdit);
