import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Input from "./components/shared/Input";
import WordView from "./components/main/WordView";
import Word from "./models/word";
import getDefinition from "./utils/dictionary-api";
import initialData from "./utils/initial-data";
import WordNotFoundView from "./components/main/WordNotFoundView";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [emptyInputError, setEmptyInputError] = useState<Error | null>(null);
  const [word, setWord] = useState<Word>(initialData[0]);
  const [noDefinitionError, setNoDefinitionError] = useState<Error | null>(
    null
  );

  const getWordDefinition = () =>
    getDefinition(searchQuery)
      .then((res) => setWord(res[0]))
      .catch((error) => setNoDefinitionError(error));

  const handleSearch = () => {
    if (searchQuery.trim().length === 0) {
      setEmptyInputError(Error("Whoops, can't be empty…"));
      return;
    }

    getWordDefinition();
  };

  useEffect(() => {
    setEmptyInputError(null);
    setNoDefinitionError(null);
  }, [searchQuery]);

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <Header />

        {/* Main */}
        <main>
          {/* No definition error view */}
          {noDefinitionError && <WordNotFoundView />}

          {/* Word view */}
          {!noDefinitionError && <WordView word={word} />}
        </main>
      </div>
    </div>
  );
};

export default App;
