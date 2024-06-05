import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Hero from './sections/Hero/Hero';
import Projects from './sections/projects/projects';
import Nav from './sections/Nav/Nav';


function App() {
  return ( 
  <>
    <Nav />
    <Hero />
    <Projects />
    <BrowserRouter>
    <Routes>
          <Route path="/Home" element={<Hero />} />
          <Route path="/Projects" element={<Projects />} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App
