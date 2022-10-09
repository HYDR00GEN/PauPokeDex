import React from "react";
import { Link } from "react-router-dom";
import { CaptureIcon, ReleaseIcon } from "../assets/Icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  cardContainer: {
    width: 160,
    padding: 6,
    backgroundColor: "bisque",
    borderRadius: 12,
  },
  pokName: {
    textTransform: "uppercase",
  },
  divCatch: {},
}));

const Card = ({ id, name, img, type1, type2, onCapture, captureList }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardContainer}>
      <div className="head">
        <p className={classes.pokName}>
          #{id} {name}
        </p>
      </div>
      <Link to={`/${name}`}>
        <img src={img} alt="pokemon" style={{ width: "100px", height: 100 }} />
      </Link>
      <div className="types">
        {type1} {type2}
      </div>
      <div>
        <a
          className={classes.divCatch}
          onClick={onCapture}
          style={{ background: "none", border: "none" }}
        >
          {!captureList ? <CaptureIcon /> : <ReleaseIcon />}
        </a>
      </div>
    </div>
  );
};

export default Card;
