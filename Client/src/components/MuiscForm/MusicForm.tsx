import styled from "@emotion/styled";
import {
  UseFormRegister,
  FieldValues,
  SubmitHandler,
  FieldErrors,
} from "react-hook-form";

interface MusicFormProps {
  title: string;
  register: UseFormRegister<FieldValues>;
  handleSubmit: (
    onSubmit: SubmitHandler<FieldValues>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: SubmitHandler<FieldValues>;
  errors?: FieldErrors<FieldValues>;
}
const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  
  align-items: center;
  padding: 20px;
  max-height: 65vh;
  @media (max-width: 668px) {
    padding: 0 15px 0 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  max-height: 65vh;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 10px;
  background-color:  #f5f5f5;
  padding: 20px;
  box-shadow: 0 0 10px #ced1d4;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 668px) {
    width: 100%;
  }

  input {
    padding: 10px;
    margin: 10px 0 3px 0;
    border-radius: 5px;
    border: none;
    border-bottom: 1px solid #ced1d4;
    width: 30vw;
    height: 30px;
    background-color:  #f5f5f5;
    &:focus {
      outline: none;
      border-bottom: 0.5px solid #0078d4;
    }
  }
  h2 {
    margin: 0 0 10px 0;
    color: #0f1011;
    text-align: center;
  }
  button {
    padding: 15px 10px;
    border-radius: 5px;
    border: none;
    background-color: #0078d4;
    color: white;
    margin-top: 10px;

    width: 100px;
    cursor: pointer;
    &:hover {
      background-color: #005a9e;
    }
    @media (max-width: 768px) {
      width: 80px;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0;
  margin-left: 10px;
  padding: 0;
  text-align: left;
  align-self: flex-start;
`;

function MusicForm({
  title,
  handleSubmit,
  register,
  onSubmit,
  errors,
}: MusicFormProps) {
  return (
    <FormContainer>
      <InputContainer>
        <h2>{title}</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              id="songName"
              type="text"
              placeholder="Song Name"
              {...register("songName", {
                required: "song name is required",
                minLength: {
                  value: 3,
                  message: "song name must be at least 3 characters",
                },
              })}
            />
            {errors?.songName && (
              <ErrorMessage>{String(errors.songName.message)}</ErrorMessage>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Artist Name"
              id="artistName"
              {...register("artistName", {
                required: "artist name is required",
                minLength: {
                  value: 3,
                  message: "artist name must be at least 3 characters",
                },
              })}
            />
            {errors?.artistName && (
              <ErrorMessage>{String(errors.artistName.message)}</ErrorMessage>
            )}
          </div>
          <div>
            <input
              type="text"
              id="albumName"
              placeholder="Album Name"
              {...register("albumName", {
                required: "album name is required",
                minLength: {
                  value: 3,
                  message: "album name must be at least 3 characters",
                },
              })}
            />
            {errors?.albumName && (
              <ErrorMessage>{String(errors.albumName.message)}</ErrorMessage>
            )}
          </div>
          <div>
            <input
              type="text"
              id="genre"
              placeholder="Genre"
              {...register("genre", {
                required: "genre is required",
                minLength: {
                  value: 3,
                  message: "genre must be at least 3 characters",
                },
              })}
            />
            {errors?.genre && (
              <ErrorMessage>{String(errors.genre.message)}</ErrorMessage>
            )}
          </div>
          <button>Add</button>
        </form>
      </InputContainer>
    </FormContainer>
  );
}

export default MusicForm;
