import { useEffect, useState } from "react";
import axios from "axios";
import { SinglePoke } from "./pages/SinglePoke";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  const [captured, setCaptured] = useState([]);
  const [select, setSelect] = useState("All");
  const [poke, setPoke] = useState([]);
  const [next, setNext] = useState("https://pokeapi.co/api/v2/pokemon");

  const capturedArray = JSON.parse(localStorage.getItem("captured") || "0");
  const notCaptured = poke.filter((i) => !captured.includes(i));
  function getDifference(array1, array2) {
    return array1.filter((object1) => {
      return !array2.some((object2) => {
        return object1.id === object2.id;
      });
    });
  }
  const difference = [
    ...getDifference(poke, captured),
    ...getDifference(captured, poke),
  ];
  console.log(difference);
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

  useEffect(() => {
    catchPoke();
    if (capturedArray !== 0) {
      setCaptured(capturedArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("captured", JSON.stringify(captured));
  }, [captured]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                select={select}
                setSelect={setSelect}
                captureHandler={captureHandler}
                captured={captured}
                poke={poke}
                catchPoke={catchPoke}
                notCaptured={notCaptured}
                difference={difference}
              />
            }
          ></Route>
          <Route path="/:pokeName" element={<SinglePoke />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
