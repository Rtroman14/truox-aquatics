import Image from "next/image";
import PageHero from "@/components/PageHero";

import Banner from "@/components/Banner";

export const metadata = {
    title: "CryptoLyte | Remediating RWI",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

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
                            <strong>Cryptolyte®</strong> accelerates oxidation of the organic
                            contaminants contributed by swimmers and existing DBPs thereby
                            inhibiting accumulation. Oxidation Potential (ORP) remains elevated.
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
                            <strong>Fig. 2</strong>
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

            <Banner
                title="Lets Have A Conversation"
                description="Discover how we can help you maintain the highest standards in pool water hygiene."
            />

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
                                    src="/images/cryptolyte-before.jpg"
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
                                    src="/images/cryptolyte-after.jpg"
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
                        <strong>Biofilms & Bacteria</strong> throughout the <strong>ENTIRE</strong>{" "}
                        water & circulating system. The Rate of Remediation is <strong>NOT</strong>{" "}
                        determined by Circulation Rate like side-stream treatments (e.g. UV, Ozone).{" "}
                        <span className="text-blue-500 font-semibold">Cryptolyte®</span> provides{" "}
                        <strong>Controlled, Confirmed & Documented Remediation</strong> of{" "}
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
                            src="/images/relative-chlorine-resistance.png"
                            alt="after-cryptolyte"
                            width={800}
                            height={800}
                        />
                    </picture>
                </div>
            </section>
        </div>
    );
}
