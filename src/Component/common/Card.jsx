import React from "react";
import { motion } from "framer-motion";


export default function Card({ children, className = "" }) {
return (
<motion.div
initial={{ opacity: 0, y: 8 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.35 }}
className={`rounded-2xl shadow-sm border border-gray-200 bg-white/70 backdrop-blur p-5 ${className}`}
>
{children}
</motion.div>
);
}