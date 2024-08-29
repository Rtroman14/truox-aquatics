"use client";

import Link from "next/link";

import { guides } from "./variables";

export default function layout({ children }) {
    return (
        <div className="p-4 lg:p-6 min-h-screen">
            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
                {guides.map((guide) => (
                    <Link
                        key={guide.title}
                        href={guide.href}
                        className="rounded-lg bg-background p-6 transition-all hover:scale-105 shadow-md hover:shadow-xl cursor-pointer h-min"
                    >
                        <div className="mb-2 text-lg font-semibold">{guide.title}</div>
                        <p className="text-muted-foreground text-sm">{guide.description}</p>
                    </Link>
                ))}
            </section>

            <section className="w-full">{children}</section>
        </div>
    );
}
