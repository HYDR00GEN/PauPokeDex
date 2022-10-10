import React, { useEffect, useState } from "react";
import DropDownMenu from "../components/DropDownMenu";
import CardContainer from "../components/CardContainer";
import { Captured } from "../components/Captured";
import NotCaptured from "../components/NotCaptured";
import { createUseStyles } from "react-jss";
import { SinglePoke } from "./SinglePoke";
import axios from "axios";

const useStyles = createUseStyles(() => ({
  footer: {
    fontSize: 12,
    bottom: 0,
  },
  header: {
    backgroundColor: "#e6e6e6",
  },
  logo: {
    padding: 8,
  },
  img: {
    width: 180,
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
      <div className={classes.header}>
        <div className={classes.logo}>
          <img
            className={classes.img}
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          />
        </div>

        <span> filter by </span>
        <DropDownMenu select={select} setSelect={setSelect} />
      </div>
      {(() => {
        switch (select) {
          case "All":
            return (
              <>
                <CardContainer
                  captureHandler={captureHandler}
                  captList={captured}
                  captured={captured}
                  poke={poke}
                  catchPoke={catchPoke}
                />
                <footer className={classes.footer}>
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
