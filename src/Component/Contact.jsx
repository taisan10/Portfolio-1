import React from "react";
import Section from "./common/Section";
import Card from "./common/Card";
import { Linkedin, Github, ExternalLink, Mail } from "lucide-react";


export default function Contact({ data }) {
return (
<Section id="contact" title="Contact">
<div className="grid md:grid-cols-2 gap-4 md:gap-6">
<Card>
<div className="flex flex-col gap-3">
<h3 className="font-semibold">Reach out</h3>
<div className="flex flex-col gap-2">
<a href={data.contact.linkedin} className="inline-flex items-center gap-2 hover:underline" target="_blank" rel="noreferrer">
<Linkedin className="w-5 h-5" /> LinkedIn
</a>
<a href={data.contact.github} className="inline-flex items-center gap-2 hover:underline" target="_blank" rel="noreferrer">
<Github className="w-5 h-5" /> GitHub
</a>
<a href={data.contact.resume} className="inline-flex items-center gap-2 hover:underline" target="_blank" rel="noreferrer">
<ExternalLink className="w-5 h-5" /> Resume
</a>
<a href={data.contact.email} className="inline-flex items-center gap-2 hover:underline">
<Mail className="w-5 h-5" /> {data.email}
</a>
</div>
</div>
</Card>

</div>
</Section>
);
}