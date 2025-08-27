import React from "react";
import { motion } from "framer-motion";


export default function Section({ id, title, children }) {
return (
<section id={id} className="scroll-mt-24 py-12 md:py-16">
<motion.h2
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4 }}
className="text-2xl md:text-3xl font-semibold tracking-tight mb-6"
>
{title}
</motion.h2>
<div>{children}</div>
</section>
);
}