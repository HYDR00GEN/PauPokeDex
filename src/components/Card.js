import React from "react";

const Card = ({ id, name, img, type1, type2 }) => {
  return (
    <div className="card-container">
      <div className="head">
        ID #{id} {name} (info)
      </div>
      <img src={img} alt="pokemon" />
      <div className="types">
        {type1} {type2}
      </div>
      <div>
        <button>Capture</button>
      </div>
    </div>
  );
};

export default Card;
