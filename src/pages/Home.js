import React, { useEffect } from "react";
import DropDownMenu from "../components/DropDownMenu";
import CardContainer from "../components/CardContainer";
import { Captured } from "../components/Captured";
import NotCaptured from "../components/NotCaptured";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  footer: {
    fontSize: 12,
    bottom: 0,
  },
}));

export const Home = ({
  select,
  setSelect,
  captureHandler,
  captured,
  poke,
  catchPoke,
  notCaptured,
  difference,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className="head-text">Pokedex Init</div>
      <input type="text" placeholder="find pokemon"></input>
      <DropDownMenu select={select} setSelect={setSelect} />
      {(() => {
        switch (select) {
          case "All":
            return (
              <>
                <CardContainer
                  captureHandler={captureHandler}
                  captList={captured}
                  style={{ display: "hidden" }}
                  captured={captured}
                  poke={poke}
                  catchPoke={catchPoke}
                />
                <footer className={classes.footer}>
                  {" "}
                  made with &hearts; by{" "}
                  <a href="https://www.linkedin.com/in/paunas-ovidiu/">
                    ovidiu paunas
                  </a>
                </footer>
              </>
            );
          case "Captured":
            return (
              <Captured captureHandler={captureHandler} captList={captured} />
            );
          case "Not Captured":
            return (
              <NotCaptured
                poke={poke}
                captList={captured}
                captureHandler={captureHandler}
                notCaptured={notCaptured}
                difference={difference}
              />
            );
        }
      })()}
    </>
  );
};
