import React, { useEffect } from "react";
import Card from "./Card";

export default function NotCaptured({ notCaptured, captList, captureHandler }) {
  return (
    <>
      {notCaptured.map((i) => {
        return (
          <Card
            key={i.name}
            name={i.name}
            img={i.sprites.other.dream_world.front_default}
            onCapture={() => captureHandler(i)}
            captureList={captList.some((p) => p.name === i.name)}
          />
        );
      })}
    </>
  );
}
