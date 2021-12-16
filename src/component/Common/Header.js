import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "./../../assets/img/logo.png";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <img src={logo} alt="logo" width="50" height="50" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
