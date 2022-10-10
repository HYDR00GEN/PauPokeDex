import React, { useEffect, useState } from "react";
import Card from "./Card";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  dashboard: {
    display: "flex",
    justifyContent: "center",
    background:
      "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,255,255,0) 100%)",
  },
  cardWrapper: {
    padding: 28,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 12,
    maxWidth: 676,
  },
  btnWrapper: {
    backgroundColor: "white",
    padding: 48,
    display: "flex",
    justifyContent: "center",
  },
  button: {
    borderRadius: "36px",
    backgroundColor: "#2F80ED",
    border: "none",
    padding: "8px 22px",
    fontSize: "14px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
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
                key={i.id}
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
      <div className={classes.btnWrapper}>
        <button className={classes.button} onClick={catchPoke}>
          Load More Pokemons
        </button>
      </div>
    </>
  );
};

export default CardContainer;
