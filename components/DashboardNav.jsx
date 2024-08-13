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
    CheckIcon,
    WrenchScrewdriverIcon,
    Cog6ToothIcon,
    CogIcon,
    VideoCameraIcon,
    WrenchIcon,
    BoltIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
    {
        title: "Cryptolyte System Sizing & Controller Configuration",
        slug: "",
        icon: <CogIcon className="mr-2 h-5 w-5" />,
        children: [
            {
                title: "Existing System Upgrade",
                slug: "existing-system-upgrade",
                icon: <GlobeAltIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "New System (Spec)",
                slug: "new-system",
                icon: <DocumentTextIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Training Videos (How to)",
                slug: "training-videos",
                icon: <VideoCameraIcon className="mr-2 h-5 w-5" />,
            },
        ],
    },
    {
        title: "Pre-Proposal Inspection",
        slug: "pre-proposal-inspection",
        icon: <CheckIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Pre-Installation Check List",
        slug: "pre-installation-check-list",
        icon: <CheckIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Installation Diagrams",
        slug: "installation-diagrams",
        icon: <WrenchIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Cl02 Sensor",
        slug: "installation",
        icon: <WrenchIcon className="mr-2 h-5 w-5" />,
        children: [
            {
                title: "Commissioning",
                slug: "commissioning",
                icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Calibration Requirements",
                slug: "calibration-requirements",
                icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Calibration Procedure & Kemio Instructions",
                slug: "calibration-procedure",
                icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Troubleshooting",
                slug: "troubleshooting",
                icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
            },
            {
                title: "Maintenance",
                slug: "maintenance",
                icon: <DocumentTextIcon className="mr-2 h-5 w-5" />,
            },
        ],
    },
    {
        title: "Sensor Commissioning",
        slug: "sensor-commissioning",
        icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Startup Configuration Settings",
        slug: "startup-configuration-settings",
        icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Startup Optimization & Troubleshooting",
        slug: "startup-troubleshooting",
        icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Neutralization – Post Shock Treatment",
        slug: "neutralization–post-shock-treatment",
        icon: <BoltIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
    {
        title: "Maintenance Schedule",
        slug: "maintenance-schedule",
        icon: <WrenchScrewdriverIcon className="mr-2 h-5 w-5" />,
        children: [],
    },
];

const selectedClass = "group flex items-center rounded p-2 bg-primary/20 text-primary";
const defaultClass =
    "group flex items-center rounded p-2 text-nav-foreground hover:bg-primary/20 hover:text-primary";

export default function DashboardNav() {
    const pathname = usePathname();
    const slug = pathname.split("dashboard").pop();

    const setToExpand = ["/existing-system-upgrade", "/new-system", "/training-videos"].includes(
        slug
    );

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
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import {
//     DocumentTextIcon,
//     Cog8ToothIcon,
//     PencilSquareIcon,
//     ChatBubbleLeftRightIcon,
//     ChatBubbleBottomCenterTextIcon,
//     CodeBracketIcon,
//     GlobeAltIcon,
//     QuestionMarkCircleIcon,
//     SparklesIcon,
//     ChevronDownIcon,
//     ChevronUpIcon,
//     ChartBarIcon,
//     PaintBrushIcon,
//     UserIcon,
//     UsersIcon,
//     CheckIcon,
//     WrenchScrewdriverIcon,
//     Cog6ToothIcon,
//     CogIcon,
//     VideoCameraIcon,
//     WrenchIcon,
//     BoltIcon,
// } from "@heroicons/react/24/outline";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// const tabs = [
//     {
//         title: "Cryptolyte System Sizing & Controller Configuration",
//         slug: "system-sizing-controller-configuration",
//         icon: <CogIcon className="mr-2 h-5 w-5" />,
//         children: [
//             {
//                 title: "Existing System Upgrade",
//                 slug: "existing-system-upgrade",
//                 icon: <GlobeAltIcon className="mr-2 h-5 w-5" />,
//             },
//             {
//                 title: "New System (Spec)",
//                 slug: "new-system",
//                 icon: <DocumentTextIcon className="mr-2 h-5 w-5" />,
//             },
//             {
//                 title: "Training Videos (How to)",
//                 slug: "training-videos",
//                 icon: <VideoCameraIcon className="mr-2 h-5 w-5" />,
//             },
//         ],
//     },
//     {
//         title: "Pre-Proposal Inspection",
//         slug: "pre-proposal-inspection",
//         icon: <CheckIcon className="mr-2 h-5 w-5" />,
//         children: [],
//     },
//     {
//         title: "Pre-Installation Check List",
//         slug: "pre-installation-check-list",
//         icon: <CheckIcon className="mr-2 h-5 w-5" />,
//         children: [],
//     },
//     {
//         title: "Installation Diagrams",
//         slug: "installation-diagrams",
//         icon: <WrenchIcon className="mr-2 h-5 w-5" />,
//         children: [],
//     },
//     {
//         title: "Cl02 Sensor",
//         slug: "installation",
//         icon: <WrenchIcon className="mr-2 h-5 w-5" />,
//         children: [
//             {
//                 title: "Commissioning",
//                 slug: "startup-calibration",
//                 icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
//             },
//             {
//                 title: "Calibration Requirements",
//                 slug: "startup-calibration",
//                 icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
//             },
//             {
//                 title: "Calibration Procedure & Kemio Instructions",
//                 slug: "startup-calibration",
//                 icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
//             },
//             {
//                 title: "Troubleshooting",
//                 slug: "startup-troubleshooting",
//                 icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
//             },
//             {
//                 title: "Maintenance",
//                 slug: "new-system",
//                 icon: <DocumentTextIcon className="mr-2 h-5 w-5" />,
//             },
//         ],
//     },
//     {
//         title: "Sensor Commissioning",
//         slug: "sensor-commissioning",
//         icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
//         children: [],
//     },
//     {
//         title: "Startup Configuration Settings",
//         slug: "startup-configuration-settings",
//         icon: <Cog6ToothIcon className="mr-2 h-5 w-5" />,
//         children: [],
//     },
//     {
//         title: "Neutralization – Post Shock Treatment",
//         slug: "neutralization–post-shock-treatment",
//         icon: <BoltIcon className="mr-2 h-5 w-5" />,
//         children: [],
//     },
//     {
//         title: "Maintenance Schedule",
//         slug: "maintenance-schedule",
//         icon: <WrenchScrewdriverIcon className="mr-2 h-5 w-5" />,
//         children: [],
//     },
// ];

// const selectedClass = "group flex items-center rounded p-2 bg-primary/20 text-primary";
// const defaultClass =
//     "group flex items-center rounded p-2 text-nav-foreground hover:bg-primary/20 hover:text-primary";

// export default function DashboardNav() {
//     const pathname = usePathname();
//     const slug = pathname.split("dashboard").pop();

//     const setToExpand = ["/existing-system-upgrade", "/new-system", "/training-videos"].includes(
//         slug
//     );

//     const [expand, setExpand] = useState(setToExpand);

//     const tabSlugs = tabs.map((tab) => tab.slug);
//     let newActiveTab = tabSlugs.find((tablSlug) => slug.includes(tablSlug));

//     if (!newActiveTab) {
//         newActiveTab = "Installation Diagrams";
//     }

//     const [activeTab, setActiveTab] = useState(newActiveTab); // default active tab

//     return (
//         <nav className="w-full" aria-label="Sidebar">
//             <div className="h-full overflow-y-auto p-0 py-2 sm:px-3">
//                 <ul className="space-y-1 text-sm font-medium ">
//                     {tabs.map((tab, index) => {
//                         if (!tab.children.length) {
//                             return (
//                                 <Link
//                                     key={`${tab.slug}-${index}`}
//                                     href={`/dashboard/${tab.slug}`}
//                                     className={cn(
//                                         activeTab === tab.slug ? selectedClass : defaultClass
//                                     )}
//                                     onClick={() => setActiveTab(tab.slug)}
//                                 >
//                                     <span>{tab.icon}</span>
//                                     <span>{tab.title}</span>
//                                 </Link>
//                             );
//                         }

//                         return (
//                             <li key={`${tab.slug}-${index}`}>
//                                 <div
//                                     onClick={() => setExpand(!expand)}
//                                     className={cn(
//                                         "flex cursor-pointer justify-between",
//                                         activeTab === tab.slug ? selectedClass : defaultClass
//                                     )}
//                                 >
//                                     <div className="flex items-center">
//                                         <span>{tab.icon}</span>
//                                         <span>{tab.title}</span>
//                                     </div>
//                                     <div>
//                                         {expand ? (
//                                             <ChevronUpIcon className="h-5 w-5" />
//                                         ) : (
//                                             <ChevronDownIcon className="h-5 w-5" />
//                                         )}
//                                     </div>
//                                 </div>
//                                 <ul className={expand ? "" : "hidden"}>
//                                     {tab.children.map((child, index) => (
//                                         <li key={`${child.slug}-${index}`}>
//                                             {child.title ===
//                                             "System Sizing & Controller Configuration" ? (
//                                                 <div
//                                                     className={cn(
//                                                         "ml-6 mt-1 cursor-pointer",
//                                                         slug.includes(child.slug)
//                                                             ? selectedClass
//                                                             : defaultClass
//                                                     )}
//                                                 >
//                                                     <span>{child.icon}</span>
//                                                     <span>{child.title}</span>
//                                                 </div>
//                                             ) : (
//                                                 <Link
//                                                     href={`/dashboard/${child.slug}`}
//                                                     className={cn(
//                                                         "ml-6 mt-1",
//                                                         slug.includes(child.slug)
//                                                             ? selectedClass
//                                                             : defaultClass
//                                                     )}
//                                                     onClick={() => setActiveTab(tab.slug)}
//                                                 >
//                                                     <span>{child.icon}</span>
//                                                     <span>{child.title}</span>
//                                                 </Link>
//                                             )}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         </nav>
//     );
// }
