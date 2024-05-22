import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroLight() {
    return (
        <section className="grid h-screen grid-cols-2">
            <div className="grid place-items-center">
                <div className="container z-20 flex flex-col items-center justify-center">
                    <div className="grid gap-5">
                        <h1 className="text-center text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-7xl">
                            <span className="bg-gradient-to-b from-primary/80 to-primary bg-clip-text text-transparent">
                                Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte
                            </span>
                        </h1>

                        <div className="flex justify-center">
                            <p className="text-center text-lg font-normal text-slate-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Button asChild size="lg" className="bg-primary text-sm sm:text-base">
                                <Link href="/signup">Book Meeting</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <picture className="drop-shadow-xl">
                    <Image
                        className="rounded-xl"
                        src="/images/splash.2.png"
                        alt="Picture of the water"
                        width={500}
                        height={500}
                    />
                </picture>
            </div>
        </section>
    );
}
