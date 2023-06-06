import React from "react";
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import "./assets/images/background/bg1.jpg";
import { bg8 } from "./assets/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
       <div
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundImage: `url(${bg8})`}}>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />   
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
