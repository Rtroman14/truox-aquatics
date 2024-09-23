"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <section className="h-screen bg-background">
            <div className="mx-auto flex h-full max-w-screen-xl items-center px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto flex max-w-screen-sm flex-col gap-3 text-center">
                    <div>
                        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary dark:text-primary lg:text-9xl">
                            404
                        </h1>
                    </div>
                    <div>
                        <div>
                            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                                Something Went Wrong
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                                {error.message}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2">
                        <Button
                            onClick={
                                // Attempt to recover by trying to re-render the segment
                                () => reset()
                            }
                            size="sm"
                        >
                            Try Again
                        </Button>

                        <Link href="/dashboard">
                            <Button size="sm">Distributor Portal</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
