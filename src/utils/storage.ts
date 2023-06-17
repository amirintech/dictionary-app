import { Font, Mode, fonts } from "./constants";

export interface Preferences {
  font: Font;
  mode: Mode;
}

export const getPreferences = (): Preferences => {
  const preferences = localStorage.getItem("preferences");
  return preferences
    ? JSON.parse(preferences)
    : { font: fonts[1], mode: "light" };
};

export const setPreferences = (preferences: Preferences) => {
  localStorage.setItem("preferences", JSON.stringify(preferences));
};
