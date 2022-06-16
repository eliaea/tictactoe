import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import "./App.css";

function App() {
  return (
    <>
      <div id="nav">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App;
