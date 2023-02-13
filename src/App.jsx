import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./assets/css/App.css";
import "./assets/css/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
