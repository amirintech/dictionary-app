import Word from "../models/word";

const API_BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const getDefinition = (word: string): Promise<Word[]> => {
  const endpoint = API_BASE_URL + "/" + word.trim();

  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) throw new Error("HTTP error " + response.status);
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export default getDefinition;
