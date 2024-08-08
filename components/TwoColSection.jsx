import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TwoColSection({
    title,
    description,
    isReversed = false,
    imageSrc,
    imageAlt,
    learnMoreHref,
}) {
    return (
        <div className="container grid gap-8 sm:gap-16 md:grid-cols-12">
            <div
                className={cn(
                    "col-span-6 hidden place-items-center justify-self-center md:justify-self-start",
                    isReversed ? "" : "md:grid"
                )}
            >
                <div className="max-w-lg">
                    <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                        {title}
                    </h2>
                    <p className="mt-3 text-slate-600 [text-wrap:balance]">{description}</p>

                    <div className="mt-6 flex items-center gap-4">
                        <Button asChild>
                            <Link href={learnMoreHref}>Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="col-span-6 grid place-items-center">
                <picture className="drop-shadow-xl">
                    <Image
                        className="rounded-xl"
                        src={imageSrc}
                        alt={imageAlt}
                        width={900}
                        height={900}
                    />
                </picture>
            </div>

            <div
                className={cn(
                    "col-span-6 grid place-items-center justify-self-center md:justify-self-start",
                    isReversed ? "" : "md:hidden"
                )}
            >
                <div className="max-w-lg">
                    <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] lg:text-[53px]">
                        {title}
                    </h2>
                    <p className="mt-3 text-slate-600 [text-wrap:balance]">{description}</p>

                    <div className="mt-6 flex items-center gap-4">
                        <Button asChild>
                            <Link href={learnMoreHref}>Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
