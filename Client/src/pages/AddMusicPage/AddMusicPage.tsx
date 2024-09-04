import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import MusicForm from "../../components/MuiscForm/MusicForm";
function AddMusicPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <MusicForm
      register={register}
      handleSubmit={handleSubmit}
      title="Add Your music"
      onSubmit={onSubmit}
      errors={errors}
    />
  );
}

export default AddMusicPage;
