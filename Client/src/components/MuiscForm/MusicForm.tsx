import { useEffect, useState } from "react";
import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
} from "react-hook-form";
import { fetchSongSuggestions } from "../../services/songServices";
import { DeezerSong, Song } from "../../types/songTypes";
import {
  Button,
  ErrorMessage,
  Form,
  FormContainer,
  FormTitle,
  Input,
} from "../AuthForm/AuthFormStyles";

import { InputWrapper, SuggestionItem, SuggestionsContainer } from "./MusicFormStyles";

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
  defaultValues?: Song | null;
  setValue?: (name: string, value: string) => void;
}

function MusicForm({
  handleSubmit,
  register,
  errors,
  formType,
  onSubmit,
  isLoading,
  defaultValues,
  setValue,
}: MusicFormProps) {
  const [suggestions, setSuggestions] = useState<DeezerSong[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      fetchSongSuggestions(query).then(setSuggestions).catch(console.error);
    }
  }, [query]);

  useEffect(() => {
    if (query.length === 0) {
      setSuggestions([]);
    }
  }, [query, setSuggestions]);

  const handleSuggestionClick = (song: DeezerSong) => {
    setQuery("");
    setSuggestions([]);
    if (setValue) {
      setValue("title", song.title);
      setValue("artist", song.artist.name);
      setValue("album", song.album.title);
      setValue("genre", "pop");
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <FormTitle>
          {formType === "add" ? "Add Your Music" : "Edit music"}
        </FormTitle>

        {/* Song Input and Suggestions Wrapper */}
        <InputWrapper>
          <Input
            defaultValue={defaultValues?.title}
            type="text"
            placeholder="Song Title"
            {...register("title", {
              required: "song title is required",
              minLength: {
                value: 2,
                message: "song title must be at least 2 characters",
              },
              maxLength: {
                value: 20,
                message: "song title must be at most 10 characters",
              },
            })}
            onChange={(e) => setQuery(e.target.value)}
          />

          {errors?.title && (
            <ErrorMessage>{String(errors.title.message)}</ErrorMessage>
          )}

          {/* Display Suggestions */}
          {suggestions.length > 0 && (
            <SuggestionsContainer>
              {suggestions.map((song) => (
                <SuggestionItem
                  key={song.id}
                  onClick={() => {
                    handleSuggestionClick(song);
                  }}
                >
                  {song.title} - {song.artist.name}
                </SuggestionItem>
              ))}
            </SuggestionsContainer>
          )}
        </InputWrapper>

        {/* Other Inputs */}
        <Input
          defaultValue={defaultValues?.artist}
          type="text"
          placeholder="Artist"
          {...register("artist", {
            required: "artist is required",
            minLength: {
              value: 2,
              message: "artist must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "artist must be at most 20 characters",
            },
          })}
        />
        {errors?.artist && (
          <ErrorMessage>{String(errors.artist.message)}</ErrorMessage>
        )}

        <Input
          defaultValue={defaultValues?.album}
          type="text"
          placeholder="Album"
          {...register("album", {
            required: "album is required",
            minLength: {
              value: 2,
              message: "album must be at least 2 characters",
            },
            maxLength: {
              value: 20,
              message: "album must be at most 20 characters",
            },
          })}
        />
        {errors?.album && (
          <ErrorMessage>{String(errors.album.message)}</ErrorMessage>
        )}

        <Input
          defaultValue={defaultValues?.genre}
          type="text"
          placeholder="Genre"
          {...register("genre", {
            required: "genre is required",
            minLength: {
              value: 2,
              message: "genre must be at least 2 characters",
            },
            maxLength: {
              value: 20,
              message: "genre must be at most 20 characters",
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
