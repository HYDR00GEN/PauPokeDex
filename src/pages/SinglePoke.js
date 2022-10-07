import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
export const SinglePoke = () => {
  const { pokeName } = useParams();
  const [detailPoke, setDetailPoke] = useState();
  const [species, setSpecies] = useState();
  // const [evolution, setEvolution] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    axios
      .get(url + `/${pokeName}`)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setDetailPoke(res.data);
        setIsLoading(false);
      });

    axios
      .get(url + `-species/${pokeName}`)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setSpecies(res.data);
        setIsLoading(false);
      });
    axios
      .get(url + `-species/${pokeName}`)
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setSpecies(res.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <div>ID #{detailPoke.id}</div>
            <div>{detailPoke.name}</div>
            <img src={detailPoke.sprites.other.dream_world.front_default} />
            <div>
              Type:
              <p>
                {detailPoke.types[0].type.name}{" "}
                {detailPoke?.types[1]?.type?.name}
              </p>
            </div>
            <div>{species?.flavor_text_entries[0]?.flavor_text}</div>
            <div>Height: {detailPoke.height / 10} m</div>
            <div>Weight: {detailPoke.weight / 10} kg</div>
            <div>
              <p>Abilities</p>
              {detailPoke.abilities.map((i) => {
                return <li>{i.ability.name}</li>;
              })}
            </div>
            <div>
              Stats
              {detailPoke.stats.map((i) => {
                return (
                  <>
                    <div className="stats-container">
                      <h4>
                        {i.stat.name}: <div>{i.base_stat}</div>
                      </h4>
                    </div>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
