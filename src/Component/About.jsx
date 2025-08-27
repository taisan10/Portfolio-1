import React from "react";
import Section from "./common/Section";
import Card from "./common/Card";


export default function About({ data }) {
return (
<Section id="about" title="About Me">
<Card>
<p className="leading-7 text-slate-700">{data.about}</p>
</Card>
</Section>
);
}