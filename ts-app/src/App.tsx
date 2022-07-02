import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import ResgiterPage from "./Pages/ResgiterPage";
import Resources from "./Pages/Resources";

function App() {
  return (
    <>
      <div id="nav">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/register" element={<ResgiterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
