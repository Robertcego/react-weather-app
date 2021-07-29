import React from "react";

function Ciudad({ city }) {
  return (
    <div>
      <div>
        <h2>{city.name}</h2>
        <div>
          <div>Temperature: {city.temp} °C</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind}</div>
          <div>Cantidad de Nubed: {city.clouds}</div>
          <div>Latitud: {city.latitud}</div>
          <div>Longitud: {city.longitud}</div>
        </div>
      </div>
    </div>
  );
}

export default Ciudad;
