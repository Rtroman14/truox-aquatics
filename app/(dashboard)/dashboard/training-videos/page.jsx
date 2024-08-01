"use client";

import { useState } from "react";

const videos = [
    {
        title: "Existing & New Systems",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/existing-new-systems-how-to.pdf",
    },
];

export default function TrainingVideos() {
    const [video, setVideo] = useState("");

    return (
        <section className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6 min-h-screen">
            {videos.map((video) => (
                <div
                    key={video.title}
                    onClick={() => setVideo(video.src)}
                    className="rounded-lg bg-background p-6 transition-all hover:scale-105 shadow-md hover:shadow-xl cursor-pointer h-min"
                >
                    <div className="mb-4 text-lg font-semibold">{video.title}</div>
                    <p className="text-muted-foreground">{video.description}</p>
                </div>
            ))}

            {video ? (
                <div className="flex flex-col items-center p-8 h-full w-full col-span-full">
                    <iframe src={video} frameborder="0" width="100%" height="100%"></iframe>
                </div>
            ) : null}
        </section>
    );
}
