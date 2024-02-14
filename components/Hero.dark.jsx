import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative grid h-screen">
            <Image
                className="absolute"
                src="/images/water-background-black.png"
                alt="Picture of the water"
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
            <div className="absolute h-screen w-screen backdrop-blur-sm"></div>

            <div className="container z-20 flex flex-col items-center justify-center">
                <div className="grid gap-5">
                    <h1 className="text-center text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-7xl">
                        <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                            Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte
                        </span>
                    </h1>
                    {/* <h1 className="text-center text-4xl font-semibold leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
                        Kill 99.9% of Cryptosporidium{" "}
                        <span className="bg-gradient-to-r from-sky-300 to-blue-800 bg-clip-text text-transparent">
                            under 30 minutes{" "}
                        </span>
                        with CryptoLyte
                    </h1> */}

                    <div className="flex justify-center">
                        <p className="w-10/12 text-center text-lg font-normal text-white sm:px-16 md:w-9/12 lg:text-xl xl:px-48">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-sm text-black hover:!bg-white/90 sm:text-base">
                            <Link href="/signup">Book Meeting</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
