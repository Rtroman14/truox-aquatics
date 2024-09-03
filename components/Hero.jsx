import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import epaLogo from "../public/images/EPA_logo.svg";
import epaLogo from "../public/images/epa-icon.svg";
import BookMeetingBtn from "./BookMeetingBtn";

export default function Hero() {
    return (
        <section className="relative grid min-h-screen md:py-48 py-20">
            <Image
                className="absolute opacity-60"
                src="/images/pool-background-min.png"
                alt="Picture of the water"
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
            <div className="absolute h-screen w-screen bg-white/0"></div>
            {/* <Image
                className="absolute opacity-50"
                src="/images/pool-background-min.png"
                alt="Picture of the water"
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
            <div className="absolute h-screen w-screen backdrop-blur-sm bg-black/0"></div> */}

            <div className="container z-20 flex flex-col items-center justify-center">
                <div className="grid md:gap-12 gap-8">
                    <div className="flex justify-center">
                        <Image
                            src="/images/logo.png"
                            alt="Picture of the logo"
                            width={700}
                            height={700}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <Image
                            priority
                            src={epaLogo}
                            alt="EPA Approved"
                            className="h-6 md:h-11 w-auto"
                        />
                        <p className="text-3xl md:text-6xl font-bold lg:ml-1 tracking-tighter">
                            EPA Approved
                        </p>
                    </div>

                    <h1 className="text-center text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-8xl">
                        <span className="bg-gradient-to-b from-primary to-black bg-clip-text text-transparent">
                            Kills 99.9% <span className="italic">Cryptosporidium</span> {"<"}30min
                        </span>
                    </h1>

                    <div className="max-w-5xl mx-auto">
                        <video
                            className="rounded-xl shadow-lg"
                            // src="/videos/cryptolyte.mp4"
                            src="https://jvehmpwzlnunrewwnlev.supabase.co/storage/v1/object/public/videos/cryptolyte.mp4?t=2024-08-16T15%3A17%3A55.687Z"
                            width="1440"
                            height="680"
                            controls
                            autoPlay
                            muted
                            playsInline
                            loop
                        />
                    </div>

                    {/* <div className="flex justify-center">
                        <p className="w-10/12 text-center text-lg font-normal sm:px-16 md:w-9/12 lg:text-xl xl:px-48">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </p>
                    </div> */}
                    <div className="flex justify-center">
                        <BookMeetingBtn variant="primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}
