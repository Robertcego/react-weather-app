import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/SearchBar";

//? Material-ui components imports
import AppBar from "@material-ui/core/AppBar";
import { Button, Grid, Toolbar } from "@material-ui/core";

function Nav({ onSearch }) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={3}
      >
        <AppBar position="fixed">
          <Toolbar>
            <Grid item xs={4}>
              <Link to="/">
                <Button size="small" variant="contained" color="secondary">
                  Home
                </Button>
              </Link>
            </Grid>
            <Grid item xs={8}>
              <SearchBar onSearch={onSearch} />
            </Grid>
            <Grid item xs>
              <Link to="/about">
                <Button size="small" variant="contained" color="secondary">
                  About
                </Button>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
      <div>Divider</div>
    </div>
  );
}

export default Nav;
