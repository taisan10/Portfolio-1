import React from "react";
import Section from "./common/Section";
import Card from "./common/Card";


export default function Certifications({ data }) {
return (
<Section id="certs" title="Certification">
<Card>
<ul className="space-y-2 list-disc list-inside text-slate-700">
{data.certs.map((c) => (
<li key={c}>{c}</li>
))}
</ul>
</Card>
</Section>
);
}