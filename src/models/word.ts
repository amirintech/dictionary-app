export default interface Word {
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

interface Phonetics {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

interface License {
  name: string;
  url: string;
}
