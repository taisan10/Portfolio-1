import React from "react";


export default function Footer() {
const year = new Date().getFullYear();
return (
<footer className="py-10 text-center text-sm text-slate-500">
© {year} Tarun Bansal. All rights reserved.
</footer>
);
}