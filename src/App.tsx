import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Input from "./components/shared/Input";
import WordView from "./components/main/WordView";
import Word from "./models/word";
import getDefinition from "./utils/dictionary-api";
import Footer from "./components/footer/Footer";
import initialData from "./initial-data";

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
      setEmptyInputError(Error("Whoops, can’t be empty…"));
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
      {/* TODO: Add spinner when fetching data */}
      <div className="container">
        {/* Header */}
        <Header />

        {/* Search Input */}
        <div className="mt-6 md:mt-[52px]">
          <Input
            value={searchQuery}
            error={emptyInputError}
            onSearch={handleSearch}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* No definition error view */}
        {noDefinitionError && (
          <div className="mt-32 text-center">
            <span className="mb-11 inline-block text-6xl">😕</span>
            <h2 className="mb-6 text-xl font-bold">No Definitions Found</h2>
            <p className="text-lg text-grey-600">
              Sorry pal, we couldn't find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </p>
          </div>
        )}

        {/* Word view */}
        {!noDefinitionError && (
          <>
            <WordView word={word} />
            <Footer source={word.sourceUrls[0]} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
