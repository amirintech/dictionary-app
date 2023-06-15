import { useContext } from "react";
import { ThemeContext } from "./themeContext";

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext.mode || !themeContext.toggleMode)
    throw new Error("ThemeContext must be used inside of ThemeProvider.");

  return themeContext;
};

export default useTheme;
