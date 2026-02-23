import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from './components/AboutUs'
import Domains from './components/Domains'
import Board from "./components/Board";
import Events from "./components/Events"


function Home() {
  return (
    <>
      <Hero />
      <About />
      <Domains />
      
    </>
  );
}

export default function App() {
  return (
    <div className="bg-cyan-400 text-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Board />} />
        <Route path="/events" element={<Events />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

