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
  AppEdit,
} from "./styles";
import { Field, Form, Formik } from "formik";
import { validationSchema } from "./constants";
import { useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../../services/api/students";
import { Student } from "../../models/students";

const StudentEdit: FC = () => {
  const { id: studentId } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleActiveEdition = useCallback(async () => {
    setIsEditing(true);
  }, []);

  const onEditCharacter = useCallback(
    async (values: Partial<Student>) => {
      if (isEditing && studentId) {
        setIsLoading(true);
        const editedStudent = await updateStudent(studentId, values);
        if (editedStudent) {
          setStudent(editedStudent);
        }
        setIsLoading(false);
      }
    },
    [studentId, isEditing]
  );

  const initialValues = useMemo(
    () => ({
      characterId: student?.studentId || "",
      image: student?.image || "",
      name: student?.name || "",
      species: student?.species || "",
      house: student?.house || "",
      wizard: student?.wizard || "",
      ancestry: student?.ancestry || "",
      patronus: student?.patronus || "",
      actor: student?.actor || "",
      createdAt: student?.createdAt || new Date(),
      updatedAt: student?.updatedAt || new Date(),
    }),
    [student]
  );

  const handleGetStudent = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const student = await getStudentById(id);
      setStudent(student);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetStudent(studentId);
  }, [handleGetStudent, studentId]);

  if (isLoading) {
    return <p>LOADING</p>;
  }

  return (
    <App>
      <AppEdit>
        <Image src={student?.image} />
        <Container>
          {!isEditing && (
            <EditButton onClick={handleActiveEdition}>
              Active Edition
            </EditButton>
          )}
          <Formik
            type="edit"
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
        </Container>
      </AppEdit>
    </App>
  );
};

export default memo(StudentEdit);
