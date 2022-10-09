import React from "react";
import DropDownMenu from "../components/DropDownMenu";
import CardContainer from "../components/CardContainer";
import { Captured } from "../components/Captured";
import NotCaptured from "../components/NotCaptured";

export const Home = ({
  select,
  setSelect,
  captureHandler,
  captured,
  poke,
  catchPoke,
  notCaptured,
}) => {
  return (
    <>
      <div className="head-text">Pokedex Init</div>
      <input type="text" placeholder="find pokemon"></input>
      <DropDownMenu select={select} setSelect={setSelect} />
      {(() => {
        switch (select) {
          case "All":
            return (
              <CardContainer
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
      <footer>
        {" "}
        made with &hearts; by{" "}
        <a href="https://www.linkedin.com/in/paunas-ovidiu/">ovidiu paunas</a>
      </footer>
    </>
  );
};
