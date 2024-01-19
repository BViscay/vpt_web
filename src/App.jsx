import "./App.css";
import Landing from "./Views/Landing";
import {Route, Routes} from "react-router-dom";
import About from "./Components/About/About";
import Navbar from "./Components/NavBar/Navbar";
import Contenidos from "../src/Views/Contenidos";
import Staff from "./Components/Staff/Staff";
import Contact from "./Views/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contenido-multimedia' element={<Contenidos />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
