import { useForm } from "react-hook-form";

interface IHomeSearchFormInputs {
  search: string;
}

interface HomeSearchFormProps {
  onSubmit: (search: string) => void;
}
export default function HomeSearchForm({ onSubmit }: HomeSearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IHomeSearchFormInputs>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data.search);
      })}
    >
      <input placeholder="search" {...register("search")} />
      <button type="submit">search</button>
    </form>
  );
}
