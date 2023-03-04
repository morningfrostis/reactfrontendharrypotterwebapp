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
import {
  getStaffById,
  updateStaff,
} from "../../services/api/staff";
import { Staff } from "../../models/staff";

const StaffEdit: FC = () => {
  const { id: staffId } = useParams();
  const [staff, setStaff] = useState<Staff | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleActiveEdition = useCallback(async () => {
    setIsEditing(true);
  }, []);

  const onEditStaff = useCallback(
    async (values: Partial<Staff>) => {
      if (isEditing && staffId) {
        setIsLoading(true);
        const editedStaff = await updateStaff(staffId, values);
        if (editedStaff) {
          setStaff(editedStaff);
        }
        setIsLoading(false);
      }
    },
    [staffId, isEditing]
  );

  const initialValues = useMemo(
    () => ({
      staffId: staff?.staffId || "",
      image: staff?.image || "",
      name: staff?.name || "",
      species: staff?.species || "",
      house: staff?.house || "",
      wizard: staff?.wizard || "",
      ancestry: staff?.ancestry || "",
      patronus: staff?.patronus || "",
      actor: staff?.actor || "",
      createdAt: staff?.createdAt || new Date(),
      updatedAt: staff?.updatedAt || new Date(),
    }),
    [staff]
  );

  const handleGetStaff = useCallback(async (id?: string) => {
    if (id) {
      setIsLoading(true);
      const staff = await getStaffById(id);
      setStaff(staff);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetStaff(staffId);
  }, [handleGetStaff, staffId]);

  if (isLoading) {
    return <p>LOADING</p>;
  }

  return (
    <App>
      <AppEdit>
        <Image src={staff?.image} />
        <Container>
        {!isEditing && (
            <EditButton onClick={handleActiveEdition}>
              Active Edition
            </EditButton>
          )}
          <Formik
            type="edit"
            validationSchema={validationSchema}
            onSubmit={onEditStaff}
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

export default memo(StaffEdit);
