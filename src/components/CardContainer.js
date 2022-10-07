import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../css/app.css";

const CardContainer = ({ captList, captureHandler, poke, catchPoke }) => {
  return (
    <>
      <div className="dashboard">
        {poke.map((i) => {
          return (
            <Card
              id={i.id}
              name={i.name}
              img={i.sprites.other.dream_world.front_default}
              type1={i.types[0].type.name}
              type2={i?.types[1]?.type.name}
              onCapture={() => captureHandler(i)}
              captureList={captList.some((p) => p.name === i.name)}
            />
          );
        })}
      </div>
      <button id="add-pokemon" onClick={catchPoke}>
        Load More Pokemons
      </button>
    </>
  );
};

export default CardContainer;
