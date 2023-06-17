// API
export const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

// User preferences
export type Mode = "dark" | "light";

export interface Font {
  id: number;
  name: string;
  family: string;
}

export const fonts: Font[] = [
  { id: 1, name: "Sans Serif", family: "Inter, sans-serif" },
  { id: 2, name: "Serif", family: "Lora, serif" },
  { id: 3, name: "Mono", family: "Inconsolata, monospace" },
];
