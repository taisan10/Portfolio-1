import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";


export default function  HeroComponent({ data }) {
return (
<section className="py-12 md:py-20">
<motion.div
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.45 }}
className="flex flex-col gap-4 md:gap-6 items-start"
>
<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
{data.name}
</h1>
<p className="text-base md:text-lg text-slate-600">{data.tagline}</p>
<a
href={`mailto:${data.email}`}
className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-black text-white text-sm font-medium hover:opacity-90"
>
<Mail className="w-4 h-4" /> {data.email}
</a>
</motion.div>
</section>
);
}