import Word from "../models/word";

const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const getDefinition = async (word: string): Promise<Word[]> => {
  const endpoint = API_BASE_URL + "/" + word.trim();

  const response = await fetch(endpoint);
  if (!response.ok) throw new Error("HTTP error " + response.status);

  return await response.json();
};

export default getDefinition;
