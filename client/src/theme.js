import React from "react";
import { ThemeProvider } from "styled-components";

const themee = {
  colors: {
    notQuiteBlack: "#101522",
    epicGamerPurple: "#4B59F7",
    purpleyBlue: "#0467FB",
    clearlyWhite: "#fff"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={themee}>{children}</ThemeProvider>
);

export default Theme;
