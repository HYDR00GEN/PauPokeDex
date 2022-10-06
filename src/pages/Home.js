import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../css/app.css";

const Home = () => {
  const [poke, setPoke] = useState([]);
  const [next, setNext] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    catchPoke();
  }, []);

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

  //console.log(poke[3]?.types[1]?.type.name);

  return (
    <>
      <div className="dashboard">
        {poke.map((i) => {
          return (
            <Card
              id={i.id}
              name={i.name}
              img={i.sprites.front_default}
              type1={i.types[0].type.name}
              type2={i?.types[1]?.type.name}
            />
          );
        })}
      </div>
      <button onClick={catchPoke}>Load More Pokemons</button>
    </>
  );
};

export default Home;
