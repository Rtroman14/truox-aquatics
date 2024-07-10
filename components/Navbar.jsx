"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import Logo from "./Logo";

const links = [
    {
        title: "RWI",
        href: "/recreational-water-illness",
    },
    {
        title: "Remediation",
        href: "/remediation",
    },
    {
        title: "Water & Air Quality",
        href: "/water-and-air-quality",
    },
    {
        title: "Resources",
        href: "/resources",
    },
    {
        title: "CDC Links",
        href: "/cdc-links",
    },
];

export default function Navbar({ customer }) {
    const pathname = usePathname();

    const [isScrolledTop, setIsScrolledTop] = useState(true);

    const handleScroll = () => {
        const isTop = window.scrollY < 10; // Adjust the scroll threshold as needed
        setIsScrolledTop(isTop);
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up and remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let headerStyles = "fixed top-0 z-50 w-full border-b border-transparent transition-all";
    let linkStyles =
        "focus-visible:shadow-outline-indigo flex rounded-full py-1 text-sm antialiased transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 lg:px-3";

    if (pathname !== "/" && pathname !== "/home-1") {
        // headerStyles = `${headerStyles} border-b-slate-700 bg-[#111827]/90 py-3 backdrop-blur-sm`;
        headerStyles = `${headerStyles} bg-white/90 py-3 backdrop-blur-sm shadow`;

        linkStyles = `${linkStyles} text-slate-900`;
    } else {
        if (isScrolledTop) {
            headerStyles = `${headerStyles} bg-transparent py-5`;
            linkStyles = `${linkStyles} text-slate-100`;
        } else {
            headerStyles = `${headerStyles} bg-white/90 py-3 backdrop-blur-sm shadow`;
            linkStyles = `${linkStyles} text-slate-900`;
            // headerStyles = `${headerStyles} border-b-slate-700 bg-[#111827]/90 py-3 backdrop-blur-sm`;
        }
    }

    return (
        <header className={headerStyles}>
            <div className="container mx-auto">
                <div className="relative flex flex-col items-center justify-between lg:flex-row">
                    <div className="flex w-full items-center justify-between lg:w-auto">
                        <Logo />
                        <div className="block text-white lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Bars3Icon className="h-7 w-7 cursor-pointer text-slate-400 duration-200 hover:scale-110" />
                                </SheetTrigger>
                                <SheetContent side="right" className="min-w-[230px] px-3">
                                    <SheetHeader className="mb-4">
                                        <SheetTitle className="flex justify-center">
                                            <Logo />
                                        </SheetTitle>
                                    </SheetHeader>
                                    {links.map((link) => (
                                        <SheetClose asChild key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center p-1"
                                            >
                                                <span>{link.title}</span>
                                            </Link>
                                        </SheetClose>
                                    ))}
                                    <Separator />

                                    <div className="my-3 flex justify-between">
                                        <SheetClose asChild>
                                            <Button asChild size="sm" className="rounded-full px-4">
                                                <Link href="/signup" className="group">
                                                    Book Meeting
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </Link>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                    <nav className="astronav-items astronav-toggle mt-2 hidden w-full lg:mt-0 lg:flex lg:w-auto">
                        <ul className="flex flex-col lg:flex-row lg:gap-3">
                            {links.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        // className="focus-visible:shadow-outline-indigo flex rounded-full py-2 text-sm text-black antialiased transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 lg:px-3">
                                        className={linkStyles}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-3 flex items-center gap-4 lg:hidden">
                            <Button asChild size="sm" className="rounded-full px-4">
                                <Link href="/signup" className="group ">
                                    Book Meeting
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </Button>
                        </div>
                    </nav>
                    <div>
                        <div className="hidden items-center gap-4 lg:flex">
                            <Button asChild size="sm" className="px-4 ">
                                <Link href="#" className="group ">
                                    Book Meeting
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="mt-px h-4 w-4 transition-transform group-hover:translate-x-1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
