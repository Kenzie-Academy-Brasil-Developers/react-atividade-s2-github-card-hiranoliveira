import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "./style.css";

const Search = ({ setResult }) => {
  const formSchema = yup.object().shape({
    repoSearch: yup.string().required("CAMPO OBRIGATÓRIO"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    fetch(`https://api.github.com/repos/${data.repoSearch}`)
      .then((response) => response.json())
      .then((response) => setResult(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          {...register("repoSearch")}
          placeholder="Digite aqui sua pesquisa"
        />
        <p>{errors.repoSearch?.message}</p>
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default Search;
