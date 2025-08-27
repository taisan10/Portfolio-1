import React from "react";
import Section from "./common/Section";
import Card from "./common/Card";


export default function Skills({ data }) {
return (
<Section id="skills" title="Skills">
<div className="grid md:grid-cols-3 gap-4 md:gap-6">
{data.skills.map((s) => (
<Card key={s.title}>
<h3 className="font-semibold mb-2">{s.title}</h3>
<ul className="list-disc list-inside space-y-1 text-slate-700">
{s.items.map((it) => (
<li key={it}>{it}</li>
))}
</ul>
</Card>
))}
</div>
</Section>
);
}