import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contacto from "./Pages/QuienSoy/QuienSoy";
import Galeria from "../src/Pages/Galeria/Galeria";
import Inicio from "../src/Pages/Inicio/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
