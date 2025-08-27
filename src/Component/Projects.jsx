import React from "react";
import Section from "./common/Section";
import Card from "./common/Card";
import Anchor from "./common/Anchor";


export default function Projects({ data }) {
return (
<Section id="projects" title="Projects">
<div className="grid md:grid-cols-2 gap-4 md:gap-6">
{data.projects.map((p) => (
<Card key={p.title}>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between gap-3">
<h3 className="text-lg font-semibold">{p.title}</h3>
{p.link && <Anchor href={p.link}>View on project </Anchor>}
</div>
<p className="text-slate-700 leading-7">{p.description}</p>
{p.tech && (
<div className="flex flex-wrap gap-2 mt-1">
{p.tech.map((t) => (
<span key={t} className="px-2 py-1 text-xs rounded-full border border-gray-300">
{t}
</span>
))}
</div>
)}
</div>
</Card>
))}
</div>
</Section>
);
}