import "@/assets/css/index.css";
import Hero from "@/layout/Hero";
import Post from "@/layout/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
