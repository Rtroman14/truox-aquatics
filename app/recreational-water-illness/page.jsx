import Image from "next/image";

export default function RecreationalWaterIllness() {
    return (
        <>
            <section className="relative grid mt-[62px]">
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
                        Recreational Water Illness (RWI)
                    </span>
                </h1>
            </section>

            <section className="grid gap-24 bg-background py-20 sm:gap-36 sm:py-36 ">
                <div className="container grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                                Understanding RWI
                            </h2>
                            <p className="mt-3 text-slate-600 [text-wrap:balance]">
                                The Centers for Disease Control and Prevention coined the phrase
                                Recreational Water Illness (RWI) to describe various illnesses
                                attributed to contaminated water at Aquatic Facilities. UNDETECTED
                                Microbiological Organisms and accumulated Disinfection Byproducts
                                (DBPs) are accountable for Recreational Water Illness (RWI) in
                                TREATED Aquatic Facilities.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-6 grid place-items-center">
                        <picture className="drop-shadow-xl">
                            <Image
                                className="rounded-xl"
                                src="/images/etiology.png"
                                alt=""
                                width={900}
                                height={900}
                            />
                        </picture>
                    </div>
                </div>

                <div className="container grid grid-col gap-8 sm:gap-16 md:grid-cols-12">
                    <div className="col-span-6 flex items-center">
                        <div className="grid gap-6">
                            <div>
                                <Image
                                    className="rounded-xl drop-shadow-xl"
                                    src="/images/biofilm.png"
                                    alt=""
                                    width={900}
                                    height={900}
                                />
                            </div>

                            <div>
                                <p className="text-slate-600 [text-wrap:balance]">
                                    Cryptosporidium is the leading cause of RWI, and is usually
                                    introduced to the pool water by someone infected by the
                                    parasite. Due to its high chlorine resistance, Cryptosporidium
                                    can survive and infect countless bathers for over a week under
                                    normal chlorine concentrations.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-span-6 grid place-items-center">
                        <picture className="drop-shadow-xl">
                            <Image
                                className="rounded-xl"
                                src="/images/biofilm.png"
                                alt=""
                                width={900}
                                height={900}
                            />
                        </picture>

                        <p className="text-slate-600 [text-wrap:balance]">
                            Cryptosporidium is the leading cause of RWI, and is usually introduced
                            to the pool water by someone infected by the parasite. Due to its high
                            chlorine resistance, Cryptosporidium can survive and infect countless
                            bathers for over a week under normal chlorine concentrations.
                        </p>
                    </div> */}

                    <div className="col-span-6 grid place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] lg:text-[53px]">
                                Challenges of Effective Water Disinfection
                            </h2>
                            <p className="mt-3 text-slate-600 [text-wrap:balance]">
                                Contaminants contributed by bathers and environment impose oxidant
                                demand on the chlorine used to sanitize/disinfect the water. The
                                interaction between chlorine and contaminants results in generation
                                of Disinfection Byproducts (DBPs) and reduces Oxidation Potential
                                (ORP) for a given concentration of chlorine. Reduced ORP increases
                                the time required for chlorine to kill bacteria.
                            </p>
                            <p className="mt-3 text-slate-600 [text-wrap:balance]">
                                Furthermore, low solubility organics (body oils, lotions etc.)
                                released into the water adsorb onto the piping of the skimmer/gutter
                                intakes forming a barrier film, creating an environment for
                                surviving bacteria to become entrapped and protected from the
                                chlorine. The barrier film provides a protective shelter from the
                                chlorine within a warm and nutrient rich environment. Adaptive
                                bacteria then form biofilms under which the bacteria thrive and
                                propagate while protected from the chlorine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
