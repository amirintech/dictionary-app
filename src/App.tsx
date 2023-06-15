import PlayButton from "./components/shared/PlayButton";

const App = () => {
  return (
    <div className="app">
      <PlayButton onClick={console.log} />
    </div>
  );
};

export default App;
