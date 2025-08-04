import React, { useContext } from "react";
import ThemeContext from "../contexts/themeContent";

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("must be used whithin a ThemeProvider");
  }
  return context;
}
