const WordNotFoundView = () => {
  return (
    <div className="mt-32 text-center">
      <span className="mb-11 inline-block text-6xl">😕</span>
      <h2 className="mb-6 text-xl font-bold">No Definitions Found</h2>
      <p className="text-lg text-grey-600">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default WordNotFoundView;
