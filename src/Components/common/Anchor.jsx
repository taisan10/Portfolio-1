import React from "react";
import { ExternalLink } from "lucide-react";


export default function Anchor({ href, children }) {
return (
<a
href={href}
target="_blank"
rel="noreferrer noopener"
className="inline-flex items-center gap-2 font-medium hover:underline"
>
{children}
<ExternalLink className="w-4 h-4" />
</a>
);
}