import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  const [result, setResult] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        Informe abaixo: usuário/repositório
        <Search setResult={setResult}></Search>
        {result && <Card result={result} />}
      </header>
    </div>
  );
}

export default App;
