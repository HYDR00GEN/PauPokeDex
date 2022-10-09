import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  wrapperDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  containerDetails: {
    display: "flex",
    height: 500,
    justifyContent: "center",
    flexDirection: "row-reverse",
  },
  rightPanel: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-evenly",
    borderRadius: 24,
    padding: 21,
    backgroundColor: "yellow",
  },
  pokemonName: {
    textTransform: "uppercase",
  },
  pokeImg: {
    width: 160,
  },
  abilities: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  leftPanel: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-evenly",
    borderRadius: 24,
    padding: 21,
    backgroundColor: "orange",
  },
  wrapperStats: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: 10,
  },
  statsContainer: {
    display: "flex",
    flexFlow: "column wrap",
  },
  statType: {
    color: "brown",
    textTransform: "uppercase",
  },
}));

export const SinglePoke = () => {
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
  console.log("test");
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

              <img
                className={classes.pokeImg}
                src={detailPoke.sprites.other.dream_world.front_default}
              />
              <div>
                <div>TYPE</div>
                <p>
                  {detailPoke.types[0].type.name}{" "}
                  {detailPoke?.types[1]?.type?.name}
                </p>
                <div>Height: {detailPoke.height / 10} m</div>
                <div>Weight: {detailPoke.weight / 10} kg</div>
              </div>
            </div>
            <div className={classes.leftPanel}>
              <div>
                <span>ABOUT</span>
                <h4>"{species?.flavor_text_entries[0]?.flavor_text}"</h4>
                <span>ABILITIES</span>
                <div className={classes.abilities}>
                  {detailPoke.abilities.map((i) => {
                    return <p>{i.ability.name}</p>;
                  })}
                </div>
              </div>
              <span>STATS</span>
              <div className={classes.wrapperStats}>
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
          </>
        )}
      </div>
    </div>
  );
};
