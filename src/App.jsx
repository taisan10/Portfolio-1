import React from "react";
import Header from "./Component/Header";
import  HeroComponent from "../Component/HeroComponent";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Certifications from "./Component/Certifications";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import DATA from "./Component/Data/Data";


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