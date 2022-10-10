import React, { useEffect, useState } from "react";
import Card from "./Card";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(() => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    background:
      "linear-gradient(180deg, rgba(230,230,230,1) 0%, rgba(255,255,255,0) 100%)",
  },
  capturedDiv: {
    padding: 28,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 12,
    maxWidth: 800,
  },
  nothingWrapper: {
    display: "flex",
    alignItems: "center",
    height: "95vh",
    fontSize: 34,
  },
}));

export default function NotCaptured({
  notCaptured,
  captList,
  captureHandler,
  poke,
  difference,
}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        {captList != 0 ? (
          <div className={classes.capturedDiv}>
            {difference.map((i) => {
              return (
                <Card
                  key={i.name}
                  id={i.id}
                  name={i.name}
                  type1={i.types[0].type.name}
                  type2={i?.types[1]?.type.name}
                  img={i.sprites.other.dream_world.front_default}
                  onCapture={() => captureHandler(i)}
                  captureList={captList.some((p) => p.name === i.name)}
                />
              );
            })}
          </div>
        ) : (
          <div className={classes.capturedDiv}>
            {poke.map((i) => {
              return (
                <Card
                  key={i.name}
                  id={i.id}
                  name={i.name}
                  type1={i.types[0].type.name}
                  type2={i?.types[1]?.type.name}
                  img={i.sprites.other.dream_world.front_default}
                  onCapture={() => captureHandler(i)}
                  captureList={captList.some((p) => p.name === i.name)}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
