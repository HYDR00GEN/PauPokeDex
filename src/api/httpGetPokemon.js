import axios from "axios";
const url = "https://pokeapi.co/api/v2/pokemon";

export const httpGetPokemon = () => {
  return axios
    .get(url)
    .then((res) => {
      console.log(res.data.results);
    })
    .catch((err) => {});
};
