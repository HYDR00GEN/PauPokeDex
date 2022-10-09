import React, { useEffect, useState } from "react";
import Card from "./Card";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  dashboard: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#a8a8a8",
  },
  cardWrapper: {
    padding: 28,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 12,
    maxWidth: 676,
  },
}));

const CardContainer = ({ captList, captureHandler, poke, catchPoke }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.dashboard}>
        <div className={classes.cardWrapper}>
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
      </div>
      <button id="add-pokemon" onClick={catchPoke}>
        Load More Pokemons
      </button>
    </>
  );
};

export default CardContainer;
