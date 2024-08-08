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
import { CheckBadgeIcon, DocumentCheckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import AlvaroQuote from "@/components/AlvaroQuote";

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

const integratedSystems = [
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Kills 99.9% Cryptosporidium < 30 minutes",
        description:
            "Cryptolyte® swiftly eradicates over 99.9% of cryptosporidium, ensuring a rapid return to safe and enjoyable pool use within 30 minutes.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Penetrates, Removes & Prevents Biofilms",
        description:
            "Our advanced Cryptolyte® treatment digs deep to eliminate biofilms, cleanses surfaces thoroughly, and offers a protective barrier to prevent future growth and proliferation.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Controls, Confirms & Documents Remediation",
        description:
            "Cryptolyte® offers daily evening, continuous 24/7, and fecal incident remediation with pinpoint accuracy, backed by comprehensive documentation.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Certified ANSI/NSF 50 for use in Swimming Pools",
        description:
            "With Cryptolyte® receiving ANSI/NSF 50 certification, it’s officially recognized for maintaining clean, safe water in swimming pools, upholding the industry's top safety standards.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Certified ANSI/NSF 60 for use in Drinking Water",
        description:
            "Cryptolyte® also boasts ANSI/NSF 60 certification, providing assurance that your drinking water is treated with a proven, secure solution.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Superior Indoor Water & Air Quality",
        description:
            "By targeting and reducing waterborne contaminants, Cryptolyte® significantly improves water transparency and enhances the quality of indoor air for a healthier swimming experience.",
    },
];

export default function RiskMitigation() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Risk Mitigation" />

            <div className="space-y-20 my-16">
                <section className="container py-20 sm:py-28">
                    <h2 className="text-4xl mb-12 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                        Mitigating Risks
                    </h2>

                    <div className="grid grid-cols-2 gap-4 place-items-center">
                        <AlvaroQuote />

                        {/* <div className="grid grid-cols-1 justify-center gap-4"> */}
                        <div className="grid grid-cols-2 justify-center mt-20 gap-4 gap-y-10">
                            {integratedSystems.map((el) => (
                                <div key={el.title} className="grid gap-3 rounded-lg shadow-lg p-3">
                                    <div className="flex items-center gap-2">
                                        <div>{el.icon}</div>
                                        <h3 className="text-xl">{el.title}</h3>
                                    </div>
                                    {/* <p className="text-slate-600">{el.description}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="container ">
                    <h2 className="text-4xl mb-12 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                        Mitigating Risks
                    </h2>

                    <div className="grid grid-cols-1 gap-4 place-items-center">
                        <AlvaroQuote />

                        <div className="grid grid-cols-3 justify-center mt-20 gap-4 gap-y-10 max-w-screen-lg">
                            {integratedSystems.map((el) => (
                                <div key={el.title} className="grid gap-3 rounded-lg shadow-lg p-3">
                                    <div className="flex items-center gap-2">
                                        <div>{el.icon}</div>
                                        <h3 className="text-xl">{el.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
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
