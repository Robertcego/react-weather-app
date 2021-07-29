import React, { useState } from "react";

//? Material-ui components
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
        }}
      >
        <TextField
          size="small"
          type="text"
          value={city}
          placerholder="Ingrese la Ciudad"
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          size="small"
          variant="contained"
          color="secondary"
          type="submit"
          value="Agregar"
        >
          Agregar
        </Button>{" "}
      </form>
    </div>
  );
}

export default SearchBar;
