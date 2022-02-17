import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Accueil from "./Components/Accueil";
import Contact from "./Components/Contact";
import { MonContext } from "./MonContext";
import { useState } from "react";

function App() {
  let Provider = MonContext.Provider;
  const [nom, setnom] = useState("ozata");
  const [prenom, setprenom] = useState("mehmet");

  return (
    <Router>
      <Provider value={{ nom, setnom, prenom, setprenom }}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
