import axios from "axios";
const url = "https://pokeapi.co/api/v2/pokemon";

export const httpGetPokemon = async () => {
  try {
    const res = await axios.get(url);
    return res.data.results;
  } catch (err) {
    return err;
  }
};
