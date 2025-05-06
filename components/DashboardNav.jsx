"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

const adminUserIds = [
    "03841b00-7050-4835-b263-041d394bae4a",
    "31bf6f6a-afb3-430b-b914-b0c8d87fca7c",
    "73e65e07-d19e-4e71-a7bb-0b177244d5f4",
];

const baseTabs = [
    {
        title: "Tutorial - Using the Distributor Portal",
        slug: "training-videos",
        icon: <VideoCameraIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
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
        ],
    },
    {
        title: "Pre-Proposal Inspection",
        slug: "pre-proposal-inspection",
        icon: <MagnifyingGlassIcon className="mr-2 h-5 w-5" />,
        children: [
            {
                title: "BECSys Requirements",
                slug: "becsys-requirements",
                icon: <CheckCircleIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Pre-Proposal Check List",
                slug: "pre-proposal-check-list",
                icon: <DocumentCheckIcon className="mr-2 h-5 w-5" />,
            },
        ],
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
    {
        title: "Testing Methods",
        slug: "testing-methods",
        icon: <BeakerIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
];

const adminTab = {
    title: "Admin",
    slug: "admin",
    icon: <ShieldCheckIcon className="mr-2 h-5 w-5" />,
    children: [],
};

const selectedClass = "group flex items-center rounded p-2 bg-primary/20 text-primary";
const defaultClass =
    "group flex items-center rounded p-2 text-nav-foreground hover:bg-primary/20 hover:text-primary";

export default function DashboardNav() {
    const pathname = usePathname();
    const slug = pathname.split("dashboard").pop();
    const [isAdmin, setIsAdmin] = useState(false);
    const [tabs, setTabs] = useState(baseTabs);
    const [expand, setExpand] = useState([]);
    const supabase = createClient();

    useEffect(() => {
        async function checkIfAdmin() {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user && adminUserIds.includes(user.id)) {
                setIsAdmin(true);
                setTabs([...baseTabs, adminTab]);
            }
        }

        checkIfAdmin();
    }, []);

    const tabSlugs = tabs.map((tab) => tab.slug);
    let newActiveTab = tabSlugs.find((tabSlug) => slug.includes(tabSlug));

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

    return (
        <nav className="w-full" aria-label="Sidebar">
            <div className="h-full overflow-y-auto p-0 py-2 sm:px-3">
                <ul className="space-y-1 text-sm font-medium ">
                    {tabs.map((tab, index) =>
                        !tab.children.length ? (
                            <Link
                                key={tab.slug}
                                href={`/dashboard/${tab.slug}`}
                                className={cn(
                                    activeTab === tab.slug ? selectedClass : defaultClass
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
                                        activeTab === tab.slug ? selectedClass : defaultClass
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
                                <ul className={expand.includes(tab.title) ? "" : "hidden"}>
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
                                                    onClick={() => setActiveTab(tab.slug)}
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
    );
}
