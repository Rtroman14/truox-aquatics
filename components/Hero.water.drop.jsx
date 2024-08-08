import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import epaLogo from "../public/images/EPA_logo.svg";

export default function HeroLight() {
    return (
        <section className="relative grid h-screen">
            <Image
                className="absolute opacity-70"
                src="/images/water-drop.png"
                alt="Picture of the water"
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
            <div className="absolute h-screen w-screen backdrop-blur-sm bg-black/0"></div>

            <div className="container z-20 flex flex-col items-center justify-center">
                <div className="grid gap-5">
                    <div className="flex justify-center items-center">
                        <Image
                            priority
                            src={epaLogo}
                            alt="EPA Approved"
                            className="fill-black"
                            height={200}
                            width={200}
                        />
                    </div>
                    <h1 className="text-center text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-8xl">
                        <span className="bg-gradient-to-b from-primary to-black bg-clip-text text-transparent">
                            Kills 99.9% <span className="italic">Cryptosporidium</span> {"<"}30min
                        </span>
                    </h1>

                    <div className="flex justify-center">
                        <p className="w-10/12 text-center text-lg font-normal sm:px-16 md:w-9/12 lg:text-xl xl:px-48">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button asChild size="lg">
                            <Link href="/signup">Book Meeting</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
