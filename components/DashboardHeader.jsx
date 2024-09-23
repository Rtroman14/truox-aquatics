"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { CircleUser, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    ChevronDownIcon,
    ChevronUpIcon,
    WrenchScrewdriverIcon,
    CogIcon,
    VideoCameraIcon,
    BoltIcon,
    ArrowPathIcon,
    ClipboardDocumentListIcon,
    MagnifyingGlassIcon,
    DocumentCheckIcon,
    CpuChipIcon,
    CheckCircleIcon,
    AdjustmentsVerticalIcon,
    ExclamationCircleIcon,
    BeakerIcon,
    ExclamationTriangleIcon,
    ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const tabs = [
    {
        title: "Cryptolyte System Sizing & Controller Configuration",
        slug: "",
        icon: <CogIcon className="mr-2 h-5 w-5" />,
        children: [
            {
                title: "Existing System Upgrade",
                slug: "existing-system-upgrade",
                icon: <ArrowPathIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "New System Spec",
                slug: "new-system-spec",
                icon: <ClipboardDocumentListIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Tutorial - Sizing & Configuring",
                slug: "training-videos",
                icon: <VideoCameraIcon className="mr-2 h-5 w-5" />,
            },
        ],
    },
    {
        title: "Pre-Proposal Inspection",
        slug: "pre-proposal-inspection",
        icon: <MagnifyingGlassIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Pre-Installation Check List",
        slug: "pre-installation-check-list",
        icon: <DocumentCheckIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Installation Diagrams",
        slug: "installation-diagrams",
        icon: <ClipboardDocumentCheckIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Cl02 Sensor",
        slug: "installation",
        icon: <CpuChipIcon className="mr-2 h-5 w-5" />,
        children: [
            {
                title: "Commissioning",
                slug: "commissioning",
                icon: <CheckCircleIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Calibration",
                slug: "calibration",
                icon: <AdjustmentsVerticalIcon className="mr-2 h-5 w-5" />,
            },
            // {
            //     title: "Calibration Procedure & Kemio Instructions",
            //     slug: "calibration-procedure",
            //     icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
            // },
            {
                title: "Troubleshooting",
                slug: "troubleshooting",
                icon: <ExclamationCircleIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Maintenance",
                slug: "maintenance",
                icon: <WrenchScrewdriverIcon className="mr-2 h-5 w-5" />,
            },
        ],
    },
    // {
    //     title: "Sensor Commissioning",
    //     slug: "sensor-commissioning",
    //     icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
    //     children: [],
    // },
    // {
    //     title: "Startup Configuration Settings",
    //     slug: "startup-configuration-settings",
    //     icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
    //     children: [],
    // },
    {
        title: "Startup Optimization & Troubleshooting",
        slug: "startup-troubleshooting",
        icon: <BoltIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Startup Neutralization (Dechlor)",
        slug: "startup-neutralization",
        icon: <BeakerIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Shock (Fecal) Neutralization (Dechlor)",
        slug: "shock-neutralization",
        icon: <ExclamationTriangleIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    // {
    //     title: "Neutralization – Post Shock Treatment",
    //     slug: "neutralization–post-shock-treatment",
    //     icon: <BoltIcon className="mr-2 h-5 w-5" />,
    //     children: [],
    // },
    // {
    //     title: "Maintenance Schedule",
    //     slug: "maintenance-schedule",
    //     icon: <WrenchScrewdriverIcon className="mr-2 h-5 w-5" />,
    //     children: [],
    // },
];

const selectedClass = "group flex items-center rounded p-2 bg-primary/20 text-primary";
const defaultClass =
    "group flex items-center rounded p-2 text-nav-foreground hover:bg-primary/20 hover:text-primary";

export default function DashboardHeader() {
    const supabase = createClient();
    const router = useRouter();

    const pathname = usePathname();
    const slug = pathname.split("dashboard").pop();

    const [expand, setExpand] = useState([]);

    const tabSlugs = tabs.map((tab) => tab.slug);
    let newActiveTab = tabSlugs.find((tablSlug) => slug.includes(tablSlug));

    if (!newActiveTab) {
        newActiveTab = "Installation Diagrams";
    }

    const [activeTab, setActiveTab] = useState(newActiveTab); // default active tab

    const handleExpand = (title) => {
        if (expand.includes(title)) {
            // * remove title
            const newExpand = expand.filter((item) => item !== title);
            setExpand(newExpand);
        } else {
            setExpand([...expand, title]);
        }
    };

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) throw new Error(error);

            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // * Remove chatbot
        const chatBubble = document.getElementById("webagent-chat-bubble-container");
        const webagentIframe = document.getElementById("webagent-iframe");

        if (chatBubble) chatBubble.remove();
        if (webagentIframe) webagentIframe.remove();
    }, []);

    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="w-full" aria-label="Sidebar">
                        <div className="h-full overflow-y-auto p-0 py-2 sm:px-3">
                            <ul className="space-y-1 text-sm font-medium ">
                                {tabs.map((tab, index) =>
                                    !tab.children.length ? (
                                        <Link
                                            key={tab.slug}
                                            href={`/dashboard/${tab.slug}`}
                                            className={cn(
                                                activeTab === tab.slug
                                                    ? selectedClass
                                                    : defaultClass
                                            )}
                                            onClick={() => setActiveTab(tab.slug)}
                                        >
                                            <span>{tab.icon}</span>
                                            <span>{tab.title}</span>
                                        </Link>
                                    ) : (
                                        <li key={tab.slug}>
                                            <div
                                                onClick={() => handleExpand(tab.title)}
                                                className={cn(
                                                    "flex cursor-pointer justify-between",
                                                    activeTab === tab.slug
                                                        ? selectedClass
                                                        : defaultClass
                                                )}
                                            >
                                                <div className="flex items-center">
                                                    <span>{tab.icon}</span>
                                                    <span>{tab.title}</span>
                                                </div>
                                                <div>
                                                    {expand.includes(tab.title) ? (
                                                        <ChevronUpIcon className="h-5 w-5" />
                                                    ) : (
                                                        <ChevronDownIcon className="h-5 w-5" />
                                                    )}
                                                </div>
                                            </div>
                                            <ul
                                                className={
                                                    expand.includes(tab.title) ? "" : "hidden"
                                                }
                                            >
                                                {tab.children.map((child, index) => (
                                                    <li key={`${child.slug}-${index}`}>
                                                        {child.title ===
                                                        "System Sizing & Controller Configuration" ? (
                                                            <div
                                                                className={cn(
                                                                    "ml-6 mt-1 cursor-pointer",
                                                                    slug.includes(child.slug)
                                                                        ? selectedClass
                                                                        : defaultClass
                                                                )}
                                                            >
                                                                <span>{child.icon}</span>
                                                                <span>{child.title}</span>
                                                            </div>
                                                        ) : (
                                                            <Link
                                                                href={`/dashboard/${child.slug}`}
                                                                className={cn(
                                                                    "ml-6 mt-1",
                                                                    slug.includes(child.slug)
                                                                        ? selectedClass
                                                                        : defaultClass
                                                                )}
                                                                onClick={() =>
                                                                    setActiveTab(tab.slug)
                                                                }
                                                            >
                                                                <span>{child.icon}</span>
                                                                <span>{child.title}</span>
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1"></div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuItem>Settings</DropdownMenuItem> */}
                    <DropdownMenuItem>
                        <Link href="mailto:ryan@truox.com">Support</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}
