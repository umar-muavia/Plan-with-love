import React, { useState } from "react";

function Card({ id, image, info, price, name, removeTourHandler }) {
  const [readmore, setReadmore] = useState(false); /// link with # 23
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore); /// switch between # 23
  }

  return (
    <div className="card">
      <img src={image} className="image"></img>

      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-name">{name}</h4>
          <h4 className="tour-price">RS: {price}</h4>
        </div>
        <div className="tour-description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>

      <button className="btn-remove" onClick={() => removeTourHandler(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
