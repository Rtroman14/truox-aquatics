"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TrainingGuides() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/dashboard/training-videos/how-to-use-the-distributor-portal");
    }, [router]);

    return null;
}
