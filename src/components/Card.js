import React from "react";
import { CaptureIcon } from "../assets/Icons";

const Card = ({ id, name, img, type1, type2, onCapture, captureList }) => {
  return (
    <div className="card-container">
      <div className="head">
        ID #{id} {name}
      </div>
      <img src={img} alt="pokemon" style={{ width: "100px", height: 100 }} />
      <div className="types">
        {type1} {type2}
      </div>
      <div>
        <button onClick={onCapture}>
          <CaptureIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;
