import Image from "next/image";
import { CheckBadgeIcon, DocumentCheckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import PageHero from "@/components/PageHero";

import Banner from "@/components/Banner";

const integratedSystems = [
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Kills >99.9% Cryptosporidium in <30 minutes",
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

export default function Remediation() {
    return (
        <div className="mt-[78px]">
            <PageHero title="Remediation" />

            <section className="py-20 sm:py-28 container">
                <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Cryptolyte® Chemical Treatment
                </h2>

                <div>
                    <p className="mt-4 text-slate-800 [text-wrap:balance] text-center">
                        Cryptolyte® is a <strong>patented</strong> technology designed to target and
                        mitigate the fundamental factors contributing to recreational water
                        illnesses (RWI). This technology includes a{" "}
                        <strong>NEW EPA Registered Disinfectant</strong>, which works alongside your
                        existing chlorine treatment. Cryptolyte® effectively penetrates the
                        protective membranes of chlorine resistant Cryptosporidium oocyst, damaging
                        the protective layer and effectively destroying the sporozoites inside.
                    </p>
                </div>

                <div className="flex justify-center py-12">
                    <div className="grid grid-cols-2 gap-8 w-1/2">
                        <div className="space-y-2">
                            <picture className="drop-shadow-xl">
                                <Image
                                    className="rounded-xl"
                                    src="/images/before-cryptolyte.png"
                                    alt="before-cryptolyte"
                                    width={900}
                                    height={900}
                                />
                            </picture>
                            <p>Before Cryptolyte® Cryptosporidium oocyst 1000x Epifluorescence</p>
                        </div>
                        <div className="space-y-2">
                            <picture className="drop-shadow-xl">
                                <Image
                                    className="rounded-xl"
                                    src="/images/after-cryptolyte.png"
                                    alt="after-cryptolyte"
                                    width={900}
                                    height={900}
                                />
                            </picture>
                            <p>After Cryptolyte® Remnants of Crypto oocyst 1000x Epifluorescence</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-slate-800 [text-wrap:balance] text-center">
                        Both Laboratory and Field studies conducted to support stringent EPA
                        Registration requirements demonstrated {">"}3-log reduction of
                        Cryptosporidium in {"<"}30min. The same powerful effects are exerted on
                        Biofilms, Bacteria and DBPs effectively <strong>Mitigating RWI</strong>.
                    </p>
                </div>
            </section>

            <Banner
                title="Lets Have A Conversation"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />

            <section className="container py-20 sm:py-28">
                <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Cryptolyte® Integrated System
                </h2>

                <div>
                    <p className="mt-3 text-slate-600 [text-wrap:balance] text-center">
                        Cryptolyte® Chemical Treatment is coupled with an upgraded swimming pool
                        controller (Microprocessor upgrade), Cryptolyte® sensor & feed system
                        resulting in an Integrated Chemical Feed & Process Control System. The
                        <strong> Patented</strong> Integrated System provides unprecedented
                        capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-3 justify-center mt-20 gap-4 gap-y-10">
                    {integratedSystems.map((el) => (
                        <div key={el.title} className="grid gap-3 rounded-lg shadow-lg p-3">
                            <div className="flex items-center gap-2">
                                <div>{el.icon}</div>
                                <h3 className="text-xl">{el.title}</h3>
                            </div>
                            <p className="text-slate-600">{el.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
