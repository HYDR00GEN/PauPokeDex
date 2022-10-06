import { useEffect, useState } from "react";
import { httpGetPokemon } from "./api/httpGetPokemon";
import { Card } from "./components/Card";
import DropDownMenu from "./components/DropDownMenu";
import "./css/app.css";
import Home from "./pages/Home";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="head-text">Pokedex Init</div>
      <input type="text" placeholder="find pokemon"></input>
      <DropDownMenu />
      <Home />
      <div>
        <div>captured n1</div>
        <div>captured n2</div>
        <div>captured n3</div>
      </div>
    </>
  );
}

export default App;
