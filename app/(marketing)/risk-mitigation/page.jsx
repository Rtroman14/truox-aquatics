import Image from "next/image";
import PageHero from "@/components/PageHero";
import Banner from "@/components/Banner";
import epaLogo from "../../../public/images/EPA_logo.svg";

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

            <div className="space-y-20 my-20 container">
                <div className="grid grid-cols-1 gap-4 place-items-center">
                    <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                        Mitigating Risks
                    </h2>

                    <AlvaroQuote />
                </div>

                <div>
                    <div className="flex justify-center items-center">
                        <Image
                            priority
                            src={epaLogo}
                            alt="EPA Approved"
                            className="h-7 md:h-11 w-auto"
                        />
                        <p className="text-4xl md:text-6xl font-bold lg:ml-1 tracking-tighter">
                            EPA Approved
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 justify-center mt-20 gap-4 mx-auto gap-y-10 md:max-w-screen-lg">
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
            </div>
        </div>
    );
}
