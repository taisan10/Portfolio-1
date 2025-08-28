import React from "react";


export default function Header({ data }) {
return (
<header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
<div className="max-w-6xl mx-auto px-4">
<div className="flex items-center justify-between h-16">
<a href="#top" className="font-bold tracking-tight text-lg md:text-xl">
{data.name}
</a>
<nav className="hidden md:flex items-center gap-6">
{data.nav.map((n) => (
<a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-slate-700 hover:text-black">
{n.label}
</a>
))}
</nav>
<a href={`mailto:${data.email}`} className="md:inline-flex z-50  text-sm font-medium px-3 py-1.5 rounded-xl border border-gray-300 hover:bg-gray-50">
Email Me
</a>
</div>
</div>
</header>
);
}