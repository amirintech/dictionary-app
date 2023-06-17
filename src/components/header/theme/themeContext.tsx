import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { Font, Mode, fonts } from "../../../utils/constants";
import { getPreferences, setPreferences } from "../../../utils/storage";
import initialData from "../../../utils/initial-data";

interface Theme {
  mode: Mode;
  font: Font;
  toggleMode: () => void;
  setFont: (font: Font) => void;
}

export const ThemeContext = createContext<Theme>({} as Theme);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const preferences = getPreferences();
  const [mode, setMode] = useState<Mode>(preferences.mode);
  const [font, setFont] = useState<Font>(preferences.font);
  const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  // Handleing theme change
  useEffect(() => {
    if (mode === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");

    return () => document.body.classList.remove("dark");
  }, [mode]);

  // Handleing font family change
  useEffect(() => {
    document.body.style.fontFamily = font.family;
  }, [font]);

  // Save preferences
  useEffect(() => {
    setPreferences({ mode, font });
  }, [mode, font]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, font, setFont }}>
      {children}
    </ThemeContext.Provider>
  );
};
