import React from "react";
import Header from "./Components/Header";
import Hero from "../components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DATA from "./Components/Data/Data";


export default function App() {
return (
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
<Header data={DATA} />
<main id="top" className="max-w-6xl mx-auto px-4">
<Hero data={DATA} />
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