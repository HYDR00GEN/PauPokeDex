import React from "react";

const Card = ({ id, name, img, type1 }) => {
  return (
    <div className="card-container">
      <div className="head">
        ID #{id} {name}
      </div>
      <img src={img} alt="pokemon" />
      <div className="types">{type1}</div>
    </div>
  );
};

export default Card;
