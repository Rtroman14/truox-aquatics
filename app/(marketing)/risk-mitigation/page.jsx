import Image from "next/image";
import PageHero from "@/components/PageHero";
import Banner from "@/components/Banner";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata = {
    title: "CryptoLyte | Risk Mitigation",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};
const biofilmImages = [
    {
        src: "/images/biofilm-evolution.png",
        alt: "Evolution of biofilm",
    },
    {
        src: "/images/biofilm-pipe.png",
        alt: "Biofilm in pipe",
    },
];

const cryptosporidiumImages = [
    {
        src: "/images/etiology-treated-water.png",
        alt: "Etiology treated water",
    },
    {
        src: "/images/crypto-hatching.png",
        alt: "Crypto Hatching",
    },
];

export default function RiskMitigation() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Risk Mitigation" />

            <div className="space-y-20 my-20">
                <section className="w-full flex justify-center">
                    <div className="max-w-lg">
                        <h2 className="text-4xl text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                            Mitigating Risks
                        </h2>
                        <p className="mt-5 text-slate-600 [text-wrap:balance] text-center italic">
                            “Controlling, Confirming & Documenting pool water remediation of
                            Chlorine Resistant Pathogens gives our customers the proof they need to
                            defuse accusations in a climate where even a negative review can go
                            viral online and damage a business’s reputation.”
                        </p>
                        <p className="mt-3 text-slate-600 [text-wrap:balance] text-center font-bold">
                            Alvaro Mendoza, CEO, Aquafinity Jupiter, FL
                        </p>
                    </div>
                </section>

                <section className="w-full flex justify-center">
                    <div className="max-w-lg">
                        <h2 className="text-4xl text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                            EPA Approved
                        </h2>
                        <ul className="mt-5 list-disc list-inside">
                            <li>
                                <strong>Kills 99.9% of Cryptosporidium {"<"} 30min</strong>
                            </li>
                            <li>
                                <strong>Controls, Confirms & Documents Remediation</strong>
                            </li>
                            <li>
                                Provides Safe-Water Assurance to:
                                <ul className="list-disc list-inside ml-6">
                                    <li>hello</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
