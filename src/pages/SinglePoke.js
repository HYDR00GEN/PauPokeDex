import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { createUseStyles } from "react-jss";
import { CaptureIcon, ReleaseIcon } from "../assets/Icons";

const useStyles = createUseStyles(() => ({
  wrapperDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
  },
  containerDetails: {
    minWidth: 685,
    maxHeight: 650,
    fontSize: 16,
    alignItems: "stretch",
    display: "flex",
    flexDirection: "row-reverse",
  },
  rightPanel: {
    boxShadow: "2px 2px 10px #D9DADE",
    minWidth: 180,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    borderRadius: 24,
    padding: 21,
    backgroundColor: "#4987d8d6",
  },
  divInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  infoMeter: {
    display: "flex",
    justifyContent: "space-between",
  },
  infoKg: {
    display: "flex",
    justifyContent: "space-between",
  },
  pokemonName: {
    textTransform: "uppercase",
  },
  pokeImg: {
    width: "130px",
  },
  abilities: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  leftPanel: {
    backgroundColor: "#fac705cf",
    boxShadow: "2px 2px 10px #D9DADE",
    alignItems: "center",
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-evenly",
    borderRadius: 24,
    padding: 18,
  },

  divStats: {
    justifyContent: "center",
    alignContent: "space-around",
    display: "flex",
    gap: 22,
    flexFlow: "row wrap",
  },
  wrapperStats: {
    display: "flex",
    flexWrap: "wrap",
  },
  statType: {
    color: "brown",
    display: "flex",
    flexWrap: "wrap",
    textTransform: "uppercase",
  },
  wrapperTypes: {
    alignItems: "stretch",
  },

  divType: {
    display: "flex",
    justifyContent: "center",
    padding: 12,
    gap: 12,
  },
  pType: {
    padding: 6,
    backgroundColor: "#ffffff6b",
    borderRadius: 245,
  },
  wrapperBtns: {
    flexDirection: "column-reverse",
    alignItems: "center",
    display: "flex",
  },
  catch: {
    padding: 6,
    width: 90,
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    background:
      "linear-gradient(180deg, #30303054 0%, rgba(255,255,255,0) 100%)",
    borderRadius: 12,
  },
  btn: {
    width: "fit-content",
    borderRadius: "36px",
    backgroundColor: "#2F80ED",
    border: "none",
    padding: "8px 22px",
    fontSize: "18px",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
}));
export const SinglePoke = ({ captureHandler, captured }) => {
  const { pokeName } = useParams();
  const [detailPoke, setDetailPoke] = useState();
  const [species, setSpecies] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/";
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(url + `pokemon/${pokeName}`)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setDetailPoke(res.data);
        setIsLoading(false);
      });

    axios
      .get(url + `pokemon-species/${pokeName}`)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setSpecies(res.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={classes.wrapperDetails}>
      <div className={classes.containerDetails}>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <div className={classes.rightPanel}>
              <div>
                #{detailPoke.id}
                <h3 className={classes.pokemonName}>{detailPoke.name}</h3>
              </div>
              <div className={classes.divImg}>
                <img
                  className={classes.pokeImg}
                  src={detailPoke.sprites.other.dream_world.front_default}
                />
              </div>
              <div className={classes.wrapperTypes}>
                <div className={classes.divType}>
                  {detailPoke.types[0] && detailPoke?.types[1] ? (
                    <>
                      <p className={classes.pType}>
                        {detailPoke.types[0].type.name}
                      </p>
                      <p className={classes.pType}>
                        {detailPoke?.types[1]?.type?.name}
                      </p>
                    </>
                  ) : (
                    <p className={classes.pType}>
                      {detailPoke.types[0].type.name}
                    </p>
                  )}
                </div>
              </div>
              <div className={classes.divInfo}>
                <div className={classes.infoMeter}>
                  <div>Height</div>
                  <div>{detailPoke.height / 10} m</div>
                </div>
                <div className={classes.infoKg}>
                  <div>Weight</div>
                  <div>{detailPoke.weight / 10} kg</div>
                </div>
              </div>
            </div>
            <div className={classes.leftPanel}>
              <div>
                <h4>ABOUT</h4>
                <p>"{species?.flavor_text_entries[0]?.flavor_text}"</p>
                <h4>ABILITIES</h4>
                <div className={classes.abilities}>
                  {detailPoke.abilities.map((i) => {
                    return <p>{i.ability.name}</p>;
                  })}
                </div>
              </div>
              <h4>STATS</h4>
              <div className={classes.wrapperStats}>
                <div className={classes.divStats}>
                  {detailPoke.stats.map((i) => {
                    return (
                      <>
                        <div className={classes.statsContainer}>
                          <div className={classes.statType}>{i.stat.name}</div>
                          <h4>{i.base_stat}</h4>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className={classes.wrapperBtns}>
                <Link to={"/"}>
                  <button className={classes.btn}>back</button>
                </Link>
                <div
                  className={classes.catch}
                  onClick={() => captureHandler(detailPoke)}
                >
                  <div className={classes.divCatch}>
                    <a>
                      {!captured.some((i) => i.name === pokeName) ? (
                        <CaptureIcon />
                      ) : (
                        <ReleaseIcon />
                      )}
                    </a>
                    <p>
                      {!captured.some((i) => i.name === pokeName)
                        ? "catch"
                        : "release"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
