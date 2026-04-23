import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      <Text display="gagaga" />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <h1>{display}</h1>
    </div>
  );
}

export default App;
