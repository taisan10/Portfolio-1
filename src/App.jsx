import React from "react";
import Header from "./Components/Header";
import  HeroComponent from "../Components/HeroComponent";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import Footer from "./components/Footer";
import DATA from "./Components/Data/Data";


export default function App() {
return (
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
<Header data={DATA} />
<main id="top" className="max-w-6xl mx-auto px-4">
<HeroComponent data={DATA} />
<About data={DATA} />
<Skills data={DATA} />
<Projects data={DATA} />
<Certifications data={DATA} />
<Contact data={DATA} />
<Footer />
</main>
</div>
);
}