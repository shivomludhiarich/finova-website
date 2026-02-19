import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from './components/AboutUs'
import Domains from './components/Domains'

export default function App() {
  return (
    <div className="bg-cyan-400 text-black">
      <Navbar/>
      <Hero/>
      <About />
      <Domains />
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}
