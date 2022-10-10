import React from "react";
import { Link } from "react-router-dom";
import { CaptureIcon, ReleaseIcon } from "../assets/Icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  cardContainer: {
    width: 160,
    padding: 6,
    borderRadius: 12,
    background: "linear-gradient(145deg, #CACCCF, #FFFFFF)",
    boxShadow: "2px 2px 5px #D9DADE",
  },
  pokName: {
    textTransform: "uppercase",
  },
  divCatch: {
    backgroundColor: "rgba(222, 222, 222, 0.55)",
    borderRadius: "0px 0px 12px 12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
  },
  types: {
    padding: 5,
    display: "flex",
    fontSize: 12,
    justifyContent: "center",
  },
  styleType: {
    backgroundColor: "rgba(181, 232, 184, 0.71)",
    borderRadius: 24,
    padding: 5,
  },
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
      <div className={classes.types}>
        {/* <div className={classes.styleType}>{type2}</div> */}
        {type1 && type2 ? (
          <>
            <div className={classes.styleType}>{type1}</div>
            <div className={classes.styleType}>{type2}</div>
          </>
        ) : (
          <div className={classes.styleType}>{type1}</div>
        )}
      </div>
      <div className={classes.divCatch} onClick={onCapture}>
        <a>{!captureList ? <CaptureIcon /> : <ReleaseIcon />}</a>
        <p>{!captureList ? "catch" : "release"}</p>
      </div>
    </div>
  );
};

export default Card;
