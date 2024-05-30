"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    DocumentTextIcon,
    Cog8ToothIcon,
    PencilSquareIcon,
    ChatBubbleLeftRightIcon,
    ChatBubbleBottomCenterTextIcon,
    CodeBracketIcon,
    GlobeAltIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ChartBarIcon,
    PaintBrushIcon,
    UserIcon,
    UsersIcon,
    VideoCameraIcon,
    CheckIcon,
    WrenchScrewdriverIcon,
    Cog6ToothIcon,
    CogIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";

const tabs = [
    {
        title: "System Sizing & Controller Configuration",
        slug: "system-sizing-controller-configuration",
        icon: <CogIcon className="mr-2 h-5 w-5" />,
        children: [
            {
                title: "Existing System Upgrade (Vert)",
                slug: "existing-system-upgrade-1",
                icon: <GlobeAltIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Existing System Upgrade (Horiz)",
                slug: "existing-system-upgrade-2",
                icon: <GlobeAltIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "New System",
                slug: "new-system",
                icon: <DocumentTextIcon className="mr-2 h-5 w-5" />,
            },
        ],
    },
    {
        title: "Pre-Proposal Checklist",
        slug: "pre-proposal-checklist",
        icon: <CheckIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Pre-Installation Checklist",
        slug: "pre-installation-checklist",
        icon: <CheckIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Installation Diagrams",
        slug: "installation-diagrams",
        icon: <ChatBubbleBottomCenterTextIcon className="mr-2 h-5 w-5" />,
        children: [],
    },

    {
        title: "Troubleshooting Flowchart",
        slug: "troubleshooting-flowchart",
        icon: <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Calibration Methods",
        slug: "calibration-methods",
        icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Maintenance Schedule",
        slug: "maintenance-schedule",
        icon: <WrenchScrewdriverIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Training Videos",
        slug: "training-videos",
        icon: <VideoCameraIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
];

const selectedClass = "group flex items-center rounded p-2 bg-primary/20 text-primary";
const defaultClass =
    "group flex items-center rounded p-2 text-nav-foreground hover:bg-primary/20 hover:text-primary";

export default function DashboardNav() {
    const pathname = usePathname();
    const slug = pathname.split("resources").pop();

    const setToExpand = ["/existing-system-upgrade", "/new-system", "/training-videos"].includes(
        slug
    );

    console.log(`setToExpand -->`, setToExpand);
    console.log(`slug -->`, slug);

    const [expand, setExpand] = useState(setToExpand);

    const tabSlugs = tabs.map((tab) => tab.slug);
    let newActiveTab = tabSlugs.find((tablSlug) => slug.includes(tablSlug));

    if (!newActiveTab) {
        newActiveTab = "Installation Diagrams";
    }

    const [activeTab, setActiveTab] = useState(newActiveTab); // default active tab

    return (
        <nav className="w-full" aria-label="Sidebar">
            <div className="h-full overflow-y-auto p-0 py-2 sm:px-3">
                <ul className="space-y-1 text-sm font-medium ">
                    {tabs.map((tab) => {
                        if (!tab.children.length) {
                            return (
                                <Link
                                    key={tab.slug}
                                    href={`/resources/${tab.slug}`}
                                    className={
                                        activeTab === tab.slug ? selectedClass : defaultClass
                                    }
                                    onClick={() => setActiveTab(tab.slug)}
                                >
                                    <span>{tab.icon}</span>
                                    <span>{tab.title}</span>
                                </Link>
                            );
                        }

                        return (
                            <li key={tab.slug}>
                                <div
                                    onClick={() => setExpand(!expand)}
                                    className={`${
                                        activeTab === tab.slug ? selectedClass : defaultClass
                                    } flex cursor-pointer justify-between`}
                                >
                                    <div className="flex items-center">
                                        <span>{tab.icon}</span>
                                        <span>{tab.title}</span>
                                    </div>
                                    <div>
                                        {expand ? (
                                            <ChevronUpIcon className="h-5 w-5" />
                                        ) : (
                                            <ChevronDownIcon className="h-5 w-5" />
                                        )}
                                    </div>
                                </div>
                                <ul className={expand ? "" : "hidden"}>
                                    {tab.children.map((child) => (
                                        <li key={child.slug}>
                                            {child.title ===
                                            "System Sizing & Controller Configuration" ? (
                                                <div
                                                    className={`${
                                                        slug.includes(child.slug)
                                                            ? selectedClass
                                                            : defaultClass
                                                    } ml-6 mt-1 cursor-pointer`}
                                                >
                                                    <span>{child.icon}</span>
                                                    <span>{child.title}</span>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={`/resources/${child.slug}`}
                                                    className={`${
                                                        slug.includes(child.slug)
                                                            ? selectedClass
                                                            : defaultClass
                                                    } ml-6 mt-1`}
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
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
