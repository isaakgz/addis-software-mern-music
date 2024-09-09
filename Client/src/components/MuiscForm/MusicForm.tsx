import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  FormTitle,
  Input,
} from "../AuthForm/AuthFormStyles";

interface MusicFormProps {
  title: string;
  register: UseFormRegister<FieldValues>;
  handleSubmit: (
    onSubmit: SubmitHandler<FieldValues>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors?: FieldErrors<FieldValues>;
  formType: "add" | "edit";
  onSubmit: SubmitHandler<FieldValues>;
  isLoading?: boolean;
}

function MusicForm({
  handleSubmit,
  register,
  errors,
  formType,
  onSubmit,
  isLoading,
}: MusicFormProps) {
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <FormTitle>
          {formType === "add" ? "Add Your Music" : "Edit music"}
        </FormTitle>

        <Input
          type="text"
          placeholder="Song Name"
          {...register("title", {
            required: "song name is required",
            minLength: {
              value: 3,
              message: "song name must be at least 3 characters",
            },
            maxLength: {
              value: 10,
              message: "song name must be at most 3 characters",
            },
          })}
        />

        {errors?.title && (
          <ErrorMessage>{String(errors.title.message)}</ErrorMessage>
        )}
        <Input
          type="text"
          placeholder="Artist"
          {...register("artist", {
            required: "artist is required",
            minLength: {
              value: 3,
              message: "artist must be at least 3 characters",
            },
            maxLength: {
              value: 10,
              message: "artist must be at most 10 characters",
            },
          })}
        />
        {errors?.artist && (
          <ErrorMessage>{String(errors.artist.message)}</ErrorMessage>
        )}
        <Input
          type="text"
          placeholder="Album"
          {...register("album", {
            required: "album is required",
            minLength: {
              value: 3,
              message: "album must be at least 3 characters",
            },
            maxLength: {
              value: 10,
              message: "album must be at most 10 characters",
            },
          })}
        />
        {errors?.album && (
          <ErrorMessage>{String(errors.album.message)}</ErrorMessage>
        )}
        <Input
          type="text"
          placeholder="Genre"
          {...register("genre", {
            required: "genre is required",
            minLength: {
              value: 3,
              message: "genre must be at least 3 characters",
            },
            maxLength: {
              value: 10,
              message: "genre must be at most 10 characters",
            },
          })}
        />
        {errors?.genre && (
          <ErrorMessage>{String(errors.genre.message)}</ErrorMessage>
        )}

        <Button type="submit" disabled={isLoading}>
          {formType === "add" ? "Add Music" : "Update Music"}
        </Button>
      </Form>
    </FormContainer>
  );
}

export default MusicForm;
