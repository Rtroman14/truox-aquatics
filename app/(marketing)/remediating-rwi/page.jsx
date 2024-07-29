import Image from "next/image";
import { CheckBadgeIcon, DocumentCheckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import PageHero from "@/components/PageHero";

import Banner from "@/components/Banner";

export const metadata = {
    title: "CryptoLyte | Remediating RWI",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

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

export default function Remediation() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Remediating RWI" />

            {/* <section className="py-20 sm:py-28 container">
                <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Mitigating RWI
                </h2>

                <div className="lg:w-3/5 mx-auto">
                    <p className="mt-4 text-slate-800 [text-wrap:balance] text-center">
                        Urea is contributed thru perspiration and urine from bathers and is
                        accountable for the vast majority (~80%) of organic-N (Nitrogen) responsible
                        in the formation of Trichloramine.
                        <br />
                        <br />
                        <strong>Fig. 1</strong> Cryptolyte® rapidly oxidizes Urea as it is being
                        introduced into the pool water.
                        <br />
                        <br />
                        <strong>Fig. 2</strong> shows Trichloramine concentration Days & Hours
                        leading up to starting treatment. Within hours of implementing the
                        treatment, the Trichloramine concentration plummeted. A 10-fold reduction in
                        trichloramine was achieved and sustained during comparable bather loading
                        (time of day) throughout the remainder of the study.
                        <br />
                        <br />
                        <strong>Cryptolyte®</strong> accelerates oxidation of the organic
                        contaminants contributed by swimmers and existing DBPs thereby inhibiting
                        accumulation. Oxidation Potential (ORP) remains elevated.
                    </p>
                </div>

                <div className="flex justify-center py-12">
                    <div className="grid grid-cols-2 gap-8 lg:w-7/12">
                        <div className="space-y-2">
                            <picture className="drop-shadow-lg">
                                <Image
                                    className="rounded-xl"
                                    src="/images/urea-2.png"
                                    alt="before-cryptolyte"
                                    width={900}
                                    height={900}
                                />
                            </picture>
                            <p className="text-sm text-center font-bold">Fig. 1</p>
                        </div>
                        <div className="space-y-2">
                            <picture className="drop-shadow-lg">
                                <Image
                                    className="rounded-xl"
                                    src="/images/trichlor-chart.png"
                                    alt="after-cryptolyte"
                                    width={900}
                                    height={900}
                                />
                            </picture>
                            <p className="text-sm text-center font-bold">Fig. 2</p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-3/4 mx-auto">
                    <p className="text-slate-800 [text-wrap:balance] text-center">
                        Both Laboratory and Field studies conducted to support stringent EPA
                        Registration requirements demonstrated {">"}3-log reduction of
                        Cryptosporidium in {"<"}30min. The same powerful effects are exerted on
                        Biofilms, Bacteria and DBPs effectively <strong>Mitigating RWI</strong>.
                    </p>
                </div>
            </section> */}

            <section className="container grid gap-8 sm:gap-16 md:grid-cols-12 items-center py-20 sm:py-28">
                <div className="col-span-6 place-items-center justify-self-center">
                    <div className="max-w-lg">
                        <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                            Mitigating RWI
                        </h2>
                        <p className="mt-5 text-slate-600 [text-wrap:balance]">
                            Urea is contributed thru perspiration and urine from bathers and is
                            accountable for the vast majority (~80%) of organic-N (Nitrogen)
                            responsible in the formation of Trichloramine.
                            <br />
                            <br />
                            <strong>Fig. 1</strong>{" "}
                            <span className="text-blue-500 font-semibold">Cryptolyte®</span> rapidly
                            oxidizes Urea as it is being introduced into the pool water.
                            <br />
                            <br />
                            <strong>Fig. 2</strong> shows Trichloramine concentration Days & Hours
                            leading up to starting treatment. Within hours of implementing the
                            treatment, the Trichloramine concentration plummeted. A 10-fold
                            reduction in trichloramine was achieved and sustained during comparable
                            bather loading (time of day) throughout the remainder of the study.
                            <br />
                            <br />
                            <span className="text-blue-500 font-semibold">Cryptolyte®</span>{" "}
                            accelerates oxidation of the organic contaminants contributed by
                            swimmers and existing DBPs thereby inhibiting accumulation. Oxidation
                            Potential (ORP) remains elevated.
                        </p>
                    </div>
                </div>

                <div className="col-span-6 grid place-items-center gap-6">
                    <div className="grid gap-3">
                        <picture className="drop-shadow-lg">
                            <Image
                                className="rounded-xl"
                                src="/images/urea-2.png"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </picture>
                        <p className="text-slate-600 text-sm text-center [text-wrap:balance]">
                            <strong>Fig. 1</strong>
                        </p>
                    </div>
                    <div className="grid gap-3">
                        <picture className="drop-shadow-lg">
                            <Image
                                className="rounded-xl"
                                src="/images/trichlor-chart.png"
                                alt=""
                                width={400}
                                height={400}
                            />
                        </picture>
                        <p className="text-slate-600 text-sm text-center [text-wrap:balance]">
                            <strong>Fig. 1</strong>
                        </p>
                    </div>
                </div>
                {/* 
                <div className="col-span-6 grid place-items-center">
                    <div className="grid gap-3">
                        <picture className="drop-shadow-lg">
                            <Image
                                className="rounded-xl"
                                src="/images/urea-2.png"
                                alt=""
                                width={900}
                                height={900}
                            />
                        </picture>
                        <p className="text-slate-600 text-sm text-center [text-wrap:balance]">
                            <strong>Fig. 1</strong>
                        </p>
                    </div>
                </div> */}
            </section>

            <section className="py-20 sm:py-28 container">
                <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Cryptolyte® Chemical Treatment
                </h2>

                <div className="lg:w-3/4 mx-auto">
                    <p className="mt-4 text-slate-800 [text-wrap:balance] text-center">
                        <span className="text-blue-500 font-semibold">Cryptolyte®</span> rapidly
                        penetrates the protective membranes of chlorine resistant Cryptosporidium
                        oocyst compromising the protective membrane and killing the sporozoites
                        within.
                    </p>
                    {/* <p className="mt-4 text-slate-800 [text-wrap:balance] text-center">
                        Cryptolyte® is a <strong>patented</strong> technology designed to target and
                        mitigate the fundamental factors contributing to recreational water
                        illnesses (RWI). This technology includes a{" "}
                        <strong>NEW EPA Registered Disinfectant</strong>, which works alongside your
                        existing chlorine treatment. Cryptolyte® effectively penetrates the
                        protective membranes of chlorine resistant Cryptosporidium oocyst, damaging
                        the protective layer and effectively destroying the sporozoites inside.
                    </p> */}
                </div>

                <div className="flex justify-center py-12">
                    <div className="grid grid-cols-2 gap-8 lg:w-7/12">
                        <div className="space-y-2">
                            <picture className="drop-shadow-lg">
                                <Image
                                    className="rounded-xl"
                                    src="/images/crypto-before.jpg"
                                    alt="before-cryptolyte"
                                    width={900}
                                    height={900}
                                />
                            </picture>
                            <p className="text-sm">
                                Before Cryptolyte® Cryptosporidium oocyst 1000x Epifluorescence
                            </p>
                        </div>
                        <div className="space-y-2">
                            <picture className="drop-shadow-lg">
                                <Image
                                    className="rounded-xl"
                                    src="/images/crypto-after.jpg"
                                    alt="after-cryptolyte"
                                    width={900}
                                    height={900}
                                />
                            </picture>
                            <p className="text-sm">
                                After Cryptolyte® Remnants of Crypto oocyst 1000x Epifluorescence
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:w-3/4 mx-auto">
                    <p className="text-slate-800 [text-wrap:balance] text-center">
                        The same powerful effects are exerted on{" "}
                        <strong>Biofilms & Bacteria</strong> throughout the
                        <strong>ENTIRE</strong> water & circulating system. The Rate of Remediation
                        is <strong>NOT</strong> determined by Circulation Rate like side-stream
                        treatments (e.g. UV, Ozone).{" "}
                        <span className="text-blue-500 font-semibold">Cryptolyte®</span> provides{" "}
                        <strong>Controlled, Confirmed & Documented Remediation</strong> of
                        <strong>Chlorine Resistant Pathogens</strong>.
                    </p>
                    {/* <p className="text-slate-800 [text-wrap:balance] text-center">
                        Both Laboratory and Field studies conducted to support stringent EPA
                        Registration requirements demonstrated {">"}3-log reduction of
                        Cryptosporidium in {"<"}30min. The same powerful effects are exerted on
                        Biofilms, Bacteria and DBPs effectively <strong>Mitigating RWI</strong>.
                    </p> */}
                </div>

                <div className="flex justify-center flex-col items-center w-full mt-12">
                    <picture className="drop-shadow-lg">
                        <Image
                            className="rounded-xl"
                            src="/images/placeholder.jpeg"
                            alt="after-cryptolyte"
                            width={800}
                            height={800}
                        />
                    </picture>
                </div>
            </section>

            <Banner
                title="Lets Have A Conversation"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />

            <section className="container py-20 sm:py-28">
                <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Risk Mitigation
                </h2>

                <div>
                    <p className="mt-3 text-slate-600 [text-wrap:balance] text-center italic">
                        “Controlling, Confirming & Documenting pool water remediation of Chlorine
                        Resistant Pathogens gives our customers the proof they need to defuse
                        accusations in a climate where even a negative review can go viral online
                        and damage a business’s reputation.”
                    </p>
                    <p className="mt-3 [text-wrap:balance] text-center font-semibold">
                        Alvaro Mendoza, CEO, Aquafinity Jupiter, FL
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
