import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroLight() {
    return (
        <section className="relative grid">
            <div className="container z-20 flex flex-col items-center justify-center mt-52 gap-20">
                <div>
                    {/* <h1 className="text-center text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-8xl">
                        <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                            Kills 99.9% Cryptosporidium {"<"}30min
                        </span>
                    </h1> */}

                    <h1 className="text-balance translate-y-[-1rem] bg-gradient-to-br py-2 from-primary from-30% to-primary bg-clip-text text-center text-5xl font-medium leading-none tracking-tighter text-transparent antialiased sm:text-6xl md:text-7xl lg:text-8xl">
                        Kills 99.9% Cryptosporidium {"<"}30min
                    </h1>
                    <div className="flex justify-center pt-1 pb-5">
                        <p className="w-10/12 text-center text-lg font-normal text-slate-500 sm:px-16 md:w-9/12 lg:text-xl xl:px-48">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button asChild size="lg" className="text-sm sm:text-base">
                            <Link href="/signup">Book Meeting</Link>
                        </Button>
                    </div>
                </div>

                <div className="mx-auto">
                    <picture className="drop-shadow-xl">
                        <Image
                            className="rounded-xl"
                            src="/images/placeholder.jpeg"
                            alt="Placeholder"
                            width={900}
                            height={900}
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
