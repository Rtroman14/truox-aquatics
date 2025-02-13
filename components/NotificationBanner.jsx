"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { XMarkIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function NotificationBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check sessionStorage on component mount
        const showBanner = sessionStorage.getItem("showBanner");
        setIsVisible(showBanner !== "false");
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("showBanner", "false");
    };

    if (!isVisible) return null;

    return (
        <div className="bg-primary text-white">
            <div className="container flex items-center justify-center w-full gap-x-6 py-2.5 text-sm">
                <div className="flex items-center gap-x-4">
                    <p>
                        <span className="font-semibold">New Case Study:</span> How a YMCA solved
                        chronic chloramine issues using Cryptolyte®
                    </p>

                    <Button variant="outline" className="text-primary" size="xs" asChild>
                        <Link
                            href="/pdfs/INDOOR Aquafinity Case Study Cryptolyte YMCA Pool_r.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View
                            <ArrowTopRightOnSquareIcon className="size-4 ml-2" />
                        </Link>
                    </Button>
                </div>
                <button
                    type="button"
                    className="absolute right-4 flex items-center gap-x-2 hover:opacity-70 transition-opacity"
                    onClick={handleClose}
                    aria-label="Close banner"
                >
                    <XMarkIcon className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
