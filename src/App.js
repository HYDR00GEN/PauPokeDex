import { useEffect, useState } from "react";
import axios from "axios";
import { Captured } from "./components/Captured";
import DropDownMenu from "./components/DropDownMenu";
import "./css/app.css";
import Home from "./pages/Home";
import NotCaptured from "./components/NotCaptured";

function App() {
  const [captured, setCaptured] = useState([]);
  const [select, setSelect] = useState("All");
  const [poke, setPoke] = useState([]);
  const [next, setNext] = useState("https://pokeapi.co/api/v2/pokemon");

  const capturedArray = JSON.parse(localStorage.getItem("captured") || "0");
  const notCaptured = poke.filter((i) => !captured.includes(i));

  useEffect(() => {
    catchPoke();
    if (capturedArray !== 0) {
      setCaptured(capturedArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("captured", JSON.stringify(captured));
  }, [captured]);

  const catchPoke = () => {
    axios
      .get(next)
      .catch((err) => {
        console.log(err);
      })
      .then((resp) => {
        const res = resp.data.results.map((e) =>
          axios.get(e.url).then((resp) => resp.data)
        );
        setNext(resp.data.next);
        Promise.all(res).then((data) => {
          setPoke((prevState) => [...prevState, ...data]);
        });
      });
  };
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

  // should i implement clear all captured?
  // const releasePoke = () => {
  //   localStorage.removeItem("captured");
  //   setCaptured([]);
  // };
  return (
    <>
      <div className="head-text">Pokedex Init</div>
      <input type="text" placeholder="find pokemon"></input>
      <DropDownMenu select={select} setSelect={setSelect} />
      {(() => {
        switch (select) {
          case "All":
            return (
              <Home
                captureHandler={captureHandler}
                captList={captured}
                style={{ display: "hidden" }}
                captured={captured}
                poke={poke}
                catchPoke={catchPoke}
              />
            );
          case "Captured":
            return (
              <Captured captureHandler={captureHandler} captList={captured} />
            );
          case "Not Captured":
            return (
              <NotCaptured
                captList={captured}
                captureHandler={captureHandler}
                notCaptured={notCaptured}
              />
            );
        }
      })()}
    </>
  );
}

export default App;
