import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem";
import Homepage from "./Components/Homepage";
import Gallery from "./Components/Gallery";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
        <Route path="/character/:id" element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
