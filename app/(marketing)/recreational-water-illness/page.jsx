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
    title: "CryptoLyte | Recreational Water Illness",
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

export default function RecreationalWaterIllness() {
    return (
        <div className="mt-[70px]">
            <PageHero
                title="Recreational Water Illness (RWI)"
                subheading="Underlying causes of Recreational Water Illness"
            />

            <div className="space-y-20 my-20">
                <section className="container grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
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

                <section className="container grid grid-col gap-8 sm:gap-16 md:grid-cols-12">
                    <div className="col-span-6 flex items-center">
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

                    <div className="col-span-6 grid place-items-center justify-self-center md:justify-self-start">
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

                <Banner
                    title="Lets Have A Conversation"
                    description="Partner with us to protect your pool patrons from chlorine-resistant pathogens and ensure water safety."
                />

                <section className="container my-20">
                    <div className="grid gap-8 md:grid-cols-12">
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
                                Reduced ORP increases the time required for chlorine to kill
                                bacteria (see biofilms).
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
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
                    description="Learn how our innovative solutions can transform your pool’s safety and compliance."
                />

                <section className="container grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 grid place-items-center md:ml-8 px-8 md:px-2">
                        <Carousel>
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
                        <div className="max-w-lg">
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
            </div>
        </div>
    );
}
