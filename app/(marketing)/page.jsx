import Image from "next/image";

import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import MitigationSection from "@/components/MitigationSection";
import ComparisonTable from "@/components/ComparisonTable";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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

export const metadata = {
    title: "CryptoLyte | Home",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default async function Home() {
    return (
        <>
            <Hero />

            <div className="md:space-y-32 space-y-20 md:py-32 py-20 container">
                <section className="grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                                Undetected Pool Dangers
                            </h2>
                            <p className="mt-5 text-slate-600 [text-wrap:balance]">
                                A CDC report reveals a surge in recreational water illnesses due to
                                chlorine-resistant pathogens and disinfection byproducts (DBPs). The
                                chart shows a significant spike in outbreaks, particularly acute
                                gastrointestinal illness (AGI), during the summer months of June
                                through August in 2011-2012. This data highlights the urgent need
                                for enhanced safety measures in public pools to protect against eye,
                                skin, and respiratory illnesses. Safer water means healthier summers
                                for our kids.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-6 grid place-items-center">
                        <div className="grid gap-3">
                            <p className="text-slate-600 text-sm text-center font-bold [text-wrap:balance]">
                                Recreation Water - associated Outbreaks, by Predominant Illness* and
                                Month - United States, 2011 - 2012
                            </p>

                            <picture className="drop-shadow-xl">
                                <Image
                                    className="rounded-xl"
                                    src="/images/recreational-water-outbreaks-chart.png"
                                    alt=""
                                    width={900}
                                    height={900}
                                />
                            </picture>
                            <p className="text-slate-600 text-sm text-center [text-wrap:balance]">
                                <strong>Abbreviation/Terms:</strong> AGI: acute gastrointestinal
                                illness; ARI: acute respiratory illness; Eye: illness, condition or
                                symptom related to eyes; Multiple: a combination of predominant
                                illnesses; Skin: illness, condition or symptom related to skin
                                <br />* n=90; The category of illness reported by &ge;50% of ill
                                respondents.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-12 gap-8 sm:gap-16 md:grid-cols-12">
                    <div className="md:col-span-6 col-span-12 flex items-center">
                        <div className="grid gap-3">
                            <div>
                                <Image
                                    className="rounded-xl drop-shadow-xl"
                                    src="/images/sick-kid.png"
                                    alt=""
                                    width={900}
                                    height={900}
                                />
                            </div>

                            <p className="text-slate-600 text-sm text-center">
                                Several children had to be hospitalized because of the outbreak.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-6 col-span-12 grid place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] lg:text-[53px]">
                                Kids Hospitalized in Pool Outbreak
                            </h2>
                            <p className="mt-5 text-slate-600 [text-wrap:balance]">
                                The CDC issued a new report on May 20, chronicling a 
                                <a
                                    className="text-blue-500 underline"
                                    href="https://www.cdc.gov/mmwr/volumes/71/wr/mm7120a4.htm"
                                    target="_blank"
                                >
                                    recent bacteria outbreak
                                </a>
                                 from a swimming community pool. According to the report, the
                                Pennsylvania Department of Health (PADOH) received multiple
                                complaints of gastrointestinal illness on June 7, 2021, from patrons
                                who had visited and swam at a community pool on May 31 that year.
                                The agency identified 15 cases of E. coli infection among children
                                ages 4 to 14, with nine confirmed cases and six probable cases.
                            </p>
                            <p className="mt-5 text-slate-600 italic">
                                "Some of the children who tested positive for E. coli also tested
                                positive for C. difficile."
                            </p>
                        </div>
                    </div>
                </section>

                <Banner title="Lets Have A Conversation" description="" />

                <section className="grid gap-8 md:grid-cols-12">
                    <div className="col-span-12 text-center">
                        <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] lg:text-[53px]">
                            Etiology of RWI
                        </h2>

                        <div className="mt-5">
                            <p className="text-slate-600 [text-wrap:balance] text-center mx-auto">
                                The interaction between chlorine and contaminants results in
                                generation of <br /> Disinfection Byproducts (DBPs)
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 flex justify-center items-center">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/images/disinfection-byproducts.png"
                                alt="Enzyme (saliva)"
                                width={900}
                                height={900}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 text-center">
                        <p className="text-slate-600">
                            Accumulation of Contaminants & DBPs reduce Oxidation Potential (ORP){" "}
                            <br />
                            Reduced ORP increases the time required for chlorine to kill bacteria
                            (see biofilms).
                        </p>
                    </div>
                </section>

                <section className="grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                                Biofilm Evolution
                            </h2>

                            <ol className="ml-6 list-decimal list-outside space-y-1 mt-5 text-slate-600">
                                <li>
                                    Low solubility organics (body oils, lotions etc.) adsorb onto
                                    the piping forming a barrier film.
                                </li>
                                <li>
                                    Reduced ORP allows bacteria to survive longer allowing
                                    adsorption & absorption.
                                </li>
                                <li>
                                    Barrier film provides a protective shelter from the chlorine in
                                    a warm and nutrient rich environment.
                                </li>
                                <li>
                                    Adaptive bacteria then form biofilms under which the bacteria
                                    thrive and propagate.
                                </li>
                                <li>
                                    Protected from the chlorine,{" "}
                                    <strong>encapsulated colonies are Chlorine Resistant.</strong>
                                </li>
                                <li>
                                    Literally hundreds of different species of bacteria can thrive
                                    within the biofilm.
                                </li>
                                <li>
                                    Detached bacteria (5) are returned to the pool where they are
                                    ingested, resulting in infection.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="col-span-6 grid place-items-center md:mr-12 px-8 md:px-2">
                        <Carousel
                            opts={{
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {biofilmImages.map(({ src, alt }) => (
                                    <CarouselItem key={alt}>
                                        <div className="flex items-center justify-center p-4">
                                            <picture className="drop-shadow-xl">
                                                <Image
                                                    className="rounded-xl"
                                                    src={src}
                                                    alt={alt}
                                                    width={900}
                                                    height={900}
                                                />
                                            </picture>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </section>

                <Banner
                    title="Lets Have A Conversation"
                    description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                />

                <section className="grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 grid place-items-center md:ml-8 px-8 md:px-2">
                        <Carousel
                            opts={{
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {cryptosporidiumImages.map(({ src, alt }) => (
                                    <CarouselItem key={alt}>
                                        <div className="flex items-center justify-center p-4">
                                            <picture className="drop-shadow-xl">
                                                <Image
                                                    className="rounded-xl"
                                                    src={src}
                                                    alt={alt}
                                                    width={900}
                                                    height={900}
                                                />
                                            </picture>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    <div className="col-span-6 place-items-center justify-self-center md:justify-self-start">
                        <div className="md:max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                                Cryptosporidium
                            </h2>

                            <ul className="ml-6 list-disc list-outside space-y-1 mt-5 text-slate-600">
                                <li className=" space-y-1">
                                    <strong>Cryptosporidium</strong> is the leading cause of RWI.
                                </li>
                                <li className=" space-y-1">
                                    Cryptosporidium is introduced into the pool water by someone
                                    infected by the parasite.
                                </li>
                                <li className=" space-y-1">
                                    Cryptosporidium <span className="underline">oocyst</span>{" "}
                                    comprise a multi-layer membrane.
                                </li>
                                <li className=" space-y-1">
                                    The sporozoites residing inside are highly protected -{" "}
                                    <strong>Chlorine Resistant.</strong>
                                </li>
                                <li className=" space-y-1">
                                    Cryptosporidium can survive & infect bathers for over a week
                                    with typical chlorine concentrations. .
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 place-items-center justify-self-center">
                        <div>
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
                                <span className="text-blue-500 font-semibold">Cryptolyte®</span>{" "}
                                rapidly oxidizes Urea as it is being introduced into the pool water.
                                <br />
                                <br />
                                <strong>Fig. 2</strong> shows Trichloramine concentration Days &
                                Hours leading up to starting treatment. Within hours of implementing
                                the treatment, the Trichloramine concentration plummeted. A 10-fold
                                reduction in trichloramine was achieved and sustained during
                                comparable bather loading (time of day) throughout the remainder of
                                the study.
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
                </section>

                <section>
                    <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                        Cryptolyte® Chemical Treatment
                    </h2>

                    <div className="lg:w-3/4 mx-auto">
                        <p className="mt-4 text-slate-800 [text-wrap:balance] text-center">
                            <span className="text-blue-500 font-semibold">Cryptolyte®</span> rapidly
                            penetrates the protective membranes of chlorine resistant
                            Cryptosporidium oocyst compromising the protective membrane and killing
                            the sporozoites within.
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
                                    After Cryptolyte® Remnants of Crypto oocyst 1000x
                                    Epifluorescence
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/4 mx-auto">
                        <p className="text-slate-800 [text-wrap:balance] text-center">
                            The same powerful effects are exerted on{" "}
                            <strong>Biofilms & Bacteria</strong> throughout the{" "}
                            <strong>ENTIRE</strong> water & circulating system. The Rate of
                            Remediation is <strong>NOT</strong> determined by Circulation Rate like
                            side-stream treatments (e.g. UV, Ozone).{" "}
                            <span className="text-blue-500 font-semibold">Cryptolyte®</span>{" "}
                            provides <strong>Controlled, Confirmed & Documented Remediation</strong>{" "}
                            of <strong>Chlorine Resistant Pathogens</strong>.
                        </p>
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

                <MitigationSection />

                <section>
                    <h2 className="text-4xl font-semibold text-center mb-8 leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                        Comparison Chart
                    </h2>

                    <ComparisonTable />
                </section>
            </div>
        </>
    );
}
