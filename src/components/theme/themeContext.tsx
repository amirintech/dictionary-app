import { FC, ReactNode, createContext, useEffect, useState } from "react";

type Mode = "dark" | "light";
interface Theme {
  mode: Mode;
  toggleMode: () => void;
}

export const ThemeContext = createContext<Theme>({} as Theme);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>("dark");
  const toggleMode = () => setMode(mode === "dark" ? "light" : "dark");

  useEffect(() => {
    if (mode === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");

    return () => document.body.classList.remove("dark");
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
