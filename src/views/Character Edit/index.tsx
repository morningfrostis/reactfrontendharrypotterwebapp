/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, memo, useCallback, useMemo, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { getCharacterById, getCharacters } from "../../services/api/characters";
import { updateCharacter } from "../../services/api/characters";

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

  const getCharacter = useCallback(async () => {
    if (characterId) {
      const character = await getCharacterById(characterId);
      setCharacter(character);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getStudentsList = useCallback(async () => {
  //   const students = await getStudents();
  //   setStudentList(students);
  // }, []);

  //   useEffect(() => {
  //     getCharactersList();
  //   }, [getCharactersList]);

  // useEffect(() => {
  //   getStudentsList();
  // }, [getStudentsList]);

  // const goBack = useCallback(() => {
  //   navigate("/home", { replace: true });
  // }, [navigate]);

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
      // wand: JSON.stringify(character?.wand),
      patronus: character?.patronus || "",
      actor: character?.actor || "",
      createdAt: character?.createdAt || new Date(),
      updatedAt: character?.updatedAt || new Date(),
    }),
    [character]
  );

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
            <Field name="Name">
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
            <Field name="Species">
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
            <Field name="House">
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
            <Field name="Wizard">
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
            <Field name="Ancestry">
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
            {/* <Field name="Wand">
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
          </Field> */}
            <Field name="Patronus">
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
            <Field name="Actor">
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