import { useEffect, useState } from "react";
import DropDownMenu from "./components/DropDownMenu";
import "./css/app.css";
import Home from "./pages/Home";

function App() {
  const [captured, setCaptured] = useState([]);

  const capturedArray = JSON.parse(localStorage.getItem("captured") || "0");

  useEffect(() => {
    if (capturedArray !== 0) {
      setCaptured(capturedArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("captured", JSON.stringify(captured));
  }, [captured]);

  const captureHandler = (pokemon) => {
    let poke = captured.some((i) => i.name === pokemon.name);
    if (!poke) {
      setCaptured((prevState) => [...prevState, pokemon]);
    } else {
      const newCaptured = [...captured];
      newCaptured.splice(
        newCaptured.findIndex((i) => i.name === pokemon.name),
        1
      );
      setCaptured(newCaptured);
    }
  };

  const releasePoke = () => {
    localStorage.removeItem("captured");
    setCaptured([]);
  };

  return (
    <>
      <div className="head-text">Pokedex Init</div>
      <input type="text" placeholder="find pokemon"></input>
      <DropDownMenu />
      <Home captureHandler={captureHandler} captList={captured} />
    </>
  );
}

export default App;
