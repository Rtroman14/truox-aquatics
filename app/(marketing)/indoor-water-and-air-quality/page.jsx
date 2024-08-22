import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import PageHero from "@/components/PageHero";
import Banner from "@/components/Banner";

export const metadata = {
    title: "CryptoLyte | Indoor Water and Air Quality",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

const breatheEzCharts = [
    {
        title: "Chloroform",
        src: "/images/chloroform.png",
    },
    {
        title: "Cyanogen Chloride",
        src: "/images/cyanogen-chloride.png",
    },
    {
        title: "Trichloramine",
        src: "/images/trichloramine.png",
    },
    {
        title: "Urea",
        src: "/images/urea.png",
    },
];

export default function WaterAndAirQuality() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Indoor Water and Air Quality" />

            <section className="pt-20 sm:pt-28 container">
                <div className="grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl mb-6 font-semibold leading-none md:tracking-tight lg:text-[53px]">
                                Formation of DBPs
                            </h2>
                            <p className="mt-3 text-slate-600">
                                Chlorine is a very effective disinfectant for the treatment of
                                recreational water. However when chlorine reacts with organic based
                                contaminants added to the pool water by swimmers (e.g. urea, enzymes
                                in saliva etc.), undesirable reactions occur resulting in the
                                formation of volatile chlorinated disinfection byproducts (DBP).
                            </p>
                            <ul className="mt-6 grid gap-y-3 text-left">
                                {[
                                    "Respiratory discomfort",
                                    "Irritation of the sinus, nose and eyes",
                                    "Corrosion of equipment",
                                    "Increased energy cost associated with excess outside air exchange",
                                ].map((el) => (
                                    <li
                                        key={el}
                                        className="flex items-center gap-3 text-neutral-800"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-red-600"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                            />
                                        </svg>

                                        <span className="text-sm">{el}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-6 grid place-items-center">
                        <picture className="drop-shadow-xl">
                            <Image
                                className="rounded-xl"
                                src="/images/chlorine.png"
                                alt=""
                                width={900}
                                height={900}
                            />
                        </picture>
                    </div>
                </div>
            </section>

            <section className="py-20 sm:pt-28 container">
                <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Cost of DBPs
                </h2>

                <div className="flex flex-col justify-center py-12">
                    <div className="grid sm:grid-cols-2 gap-8 sm:w-3/4 mx-auto">
                        <div className="space-y-2">
                            <picture className="drop-shadow-xl">
                                <Image
                                    className="rounded-xl"
                                    src="/images/correded-dehumidifier.png"
                                    alt="before-cryptolyte"
                                    width={900}
                                    height={900}
                                />
                            </picture>
                            <p className="text-center">Corroded Dehumidifier</p>
                        </div>
                        <div className="space-y-2">
                            <picture className="drop-shadow-xl">
                                <Image
                                    className="rounded-xl"
                                    src="/images/correded-air-handler.png"
                                    alt="after-cryptolyte"
                                    width={900}
                                    height={900}
                                />
                            </picture>

                            <p className="text-center">Corroded Air Handler</p>
                        </div>
                    </div>
                </div>

                <div className="sm:w-1/2 mx-auto">
                    <picture className="drop-shadow-xl">
                        <Image
                            className="rounded-xl"
                            src="/images/chloramine-induced-heating-costs.png"
                            alt="after-cryptolyte"
                            width={900}
                            height={900}
                        />
                    </picture>
                </div>
            </section>

            <Banner
                title="Lets Have A Conversation"
                description="Ensuring healthy and safe swimming environments through advanced water treatments."
            />

            <section className="pt-20 sm:pt-20 container">
                <h2 className="text-4xl mb-14 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Mitigating DBPs
                </h2>

                <div className="grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h3 className="text-4xl mb-6 font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[38px]">
                                Cryptolyte® with Breathe EZ Activator Immediate Impact
                            </h3>
                            <p className="mt-3 text-slate-600 [text-wrap:balance]">
                                Implementing Cryptolyte® with Breathe EZ Activator dramatically
                                decreases trichloramine levels in pool water, ensuring a healthier
                                and more pleasant swimming environment. This{" "}
                                <strong>PATENTED</strong> treatment rapidly reduces harmful
                                irritants, leading to improved air quality around the pool and
                                minimizing respiratory and eye discomfort for swimmers. Cryptolyte®
                                delivers immediate, sustained results, promoting safer and cleaner
                                recreational water, and significantly enhancing overall public
                                health.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-6 grid place-items-center">
                        <picture className="drop-shadow-xl">
                            <Image
                                className="rounded-xl"
                                src="/images/trichlor-chart.png"
                                alt=""
                                width={900}
                                height={900}
                            />
                        </picture>
                    </div>
                </div>

                <div className="w-10/12 my-24 mx-auto">
                    <div className="mb-12">
                        <h3 className="text-4xl mb-2 font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[38px] text-center">
                            Data Before & After Cryptolyte® with Breathe EZ Activator
                        </h3>

                        <div className="flex justify-center gap-8">
                            <div className="flex items-center gap-2">
                                <div className="rounded h-4 w-4 bg-[#8FAADA]"></div>
                                <span>Before Filter</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="rounded h-4 w-4 bg-[#2F5499]"></div>
                                <span>After Filter</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <picture>
                            <Image
                                className="rounded-xl"
                                src="/images/urea-and-dbps.png"
                                alt=""
                                width={900}
                                height={900}
                            />
                        </picture>
                    </div>

                    {/* <Carousel>
                        <CarouselContent>
                            {breatheEzCharts.map(({ title, src }, index) => (
                                <CarouselItem key={index} className="md:basis-1/2">
                                    <div>
                                        <h4 className="text-2xl font-semibold leading-none tracking-tight w-full text-center">
                                            {title}
                                        </h4>
                                        <div className="flex items-center justify-center p-4">
                                            <picture className="drop-shadow-xl">
                                                <Image
                                                    className="rounded-xl"
                                                    src={src}
                                                    alt=""
                                                    width={900}
                                                    height={900}
                                                />
                                            </picture>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel> */}

                    <p className="mt-4 text-slate-600 [text-wrap:balance] text-center">
                        Other DBP and precursors (i.e. Urea) the following days (right of RED line)
                        after implementation of Cryptolyte® with Breathe EZ Activator.
                    </p>
                </div>
            </section>
        </div>
    );
}
