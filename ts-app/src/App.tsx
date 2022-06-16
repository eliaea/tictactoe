import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
