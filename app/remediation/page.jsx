import Image from "next/image";
import { CheckBadgeIcon, DocumentCheckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const integratedSystems = [
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Kills >99.9% Cryptosporidium in <30 minutes",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Penetrates, Removes & Prevents Biofilms",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Controls, Confirms & Documents Remediation",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Certified ANSI/NSF 50 for use in Swimming Pools",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Certified ANSI/NSF 60 for use in Drinking Water",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6 text-primary" />,
        title: "Superior Indoor Water & Air Quality",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
];

export default function Remediation() {
    return (
        <div className="mt-[62px]">
            <div className="relative grid">
                <Image
                    className="absolute"
                    src="/images/water-splash.png"
                    alt="Water drop hitting water"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="absolute h-full w-full backdrop-blur-sm"></div>

                <h1 className="z-10 text-center m-44 text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-7xl">
                    <span className="bg-gradient-to-b from-slate-600 to-slate-950 bg-clip-text text-transparent">
                        Remediation
                    </span>
                </h1>
            </div>

            <section className="py-20 sm:py-36 container">
                <h2 className="text-4xl text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
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

            <section className="container">
                <h2 className="text-4xl text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Mitigating Liability
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
                            <div className="flex items-center gap-2 [text-wrap:balance]">
                                {el.icon}
                                <h3 className="text-xl">{el.title}</h3>
                            </div>
                            <p className="text-slate-600 [text-wrap:balance]">{el.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
