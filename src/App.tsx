import Input from "./components/Input";

const App = () => {
  return (
    <div className="m-3">
      <Input
        value="hey"
        placeholder="Hey"
        onChange={() => console.log("onChange")}
        onSearch={() => console.log("onSearch")}
        // error={Error("Cannot be left empty!")}
      />
    </div>
  );
};

export default App;
