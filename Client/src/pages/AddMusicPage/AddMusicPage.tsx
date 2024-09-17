import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import MusicForm from "../../components/MuiscForm/MusicForm";
import { useAppDispatch, useAppSelector } from "../../store";
import { addSongRequest, clearError } from "../../features/songs/songsSlice";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
function AddMusicPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { error, songs, status } = useAppSelector((state) => state.songs);
  const dispatch = useAppDispatch();
  const previousSongsLength = useRef(songs.length);
  const previousStatus = useRef(status);
  const navigate = useNavigate();
  useTitle({ title: "Add Music" });

  // Handle form submission
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { title, artist, album, genre, songUrl } = data;
    dispatch(addSongRequest({ title, artist, album, genre, songUrl }));
  };

  // Show toast messages
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError()); // Clear the error after displaying it
    } else if (
      status === "idle" &&
      songs.length > previousSongsLength.current
    ) {
      toast.success("Music added successfully");
      previousSongsLength.current = songs.length;
      navigate("/");
    } else if (status === "loading" && previousStatus.current !== "loading") {
      toast.loading("Adding music...");
    }
    previousStatus.current = status;
  }, [error, songs, status, dispatch, navigate]);

  return (
    <MusicForm
      register={register}
      handleSubmit={handleSubmit}
      title="Add Your music"
      onSubmit={onSubmit}
      errors={errors}
      formType="add"
      isLoading={status === "loading"}
      setValue={setValue}
    />
  );
}

export default AddMusicPage;
