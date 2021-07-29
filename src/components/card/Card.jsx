import React from "react";
import { Link } from "react-router-dom";

//!

function Card({ min, max, name, img, onClose, id }) {
  return (
    <div>
      {/* //! Close Button */}
      <div>
        <button onClick={onClose}>X</button>
      </div>
      {/*  //! Card Body */}
      <div>
        <div>
          <Link to={`/ciudad/${id}`}>
            <h5>{name}</h5>
          </Link>
        </div>
        <div>
          <p>Min</p>
          <p>{min}°</p>
        </div>
        <div>
          <div>
            <p>Max</p>
            <p>{max}°</p>
          </div>
        </div>
        <div>
          <img
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
