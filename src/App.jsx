import { useState } from "react";
import "./assets/css/index.css";
import Navbar from "./layout/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
