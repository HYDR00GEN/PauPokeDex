import { useEffect, useState } from "react";
import { httpGetPokemon } from "./api/httpGetPokemon";
import DropDownMenu from "./components/DropDownMenu";
import "./css/app.css";

function App() {
  const [poke, setPoke] = useState([]);
  const [page, setPage] = useState([]);

  useEffect(() => {
    httpGetPokemon();
  }, []);

  return (
    <>
      <div className="head-text">Pokedex Init</div>
      <input type="text" placeholder="find pokemon"></input>
      <DropDownMenu />

      <div className="container">
        <div className="pokelist"></div>
        <div className="captured-bucket">
          <div>captured n1</div>
          <div>captured n2</div>
          <div>captured n3</div>
        </div>
      </div>
    </>
  );
}

export default App;
