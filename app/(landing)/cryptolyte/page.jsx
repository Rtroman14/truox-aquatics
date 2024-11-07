import Image from "next/image";
import Link from "next/link";

import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
// import epaLogo from "../public/images/EPA_logo.svg";
import epaLogo from "/public/images/epa-icon.svg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import LeadMagnetForm from "@/components/LeadMagnetForm";

export const metadata = {
    title: "CryptoLyte | Home",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

const dbpCostsImages = [
    {
        src: "/images/correded-air-handler.png",
        alt: "Etiology treated water",
        title: "Corroded Air Handler",
    },
    {
        src: "/images/correded-dehumidifier.png",
        alt: "Crypto Hatching",
        title: "Corroded Dehumidifier",
    },
];

export default async function Home() {
    return (
        <>
            <section className="relative grid min-h-max md:py-28 py-20">
                <Image
                    className="absolute opacity-60"
                    src="/images/pool-background-min.png"
                    alt="Picture of the water"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="absolute h-full w-screen bg-white/0"></div>

                <div className="container z-20 flex flex-col items-center justify-center">
                    <div className="grid md:gap-12 gap-8">
                        <div className="flex justify-center">
                            <Image
                                src="/images/logo.png"
                                alt="Picture of the logo"
                                width={700}
                                height={700}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                priority
                                src={epaLogo}
                                alt="EPA Approved"
                                className="h-6 md:h-11 w-auto"
                            />
                            <p className="text-3xl md:text-6xl font-bold lg:ml-1 tracking-tighter">
                                EPA Approved
                            </p>
                        </div>

                        <h1 className="text-center text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-8xl">
                            <span className="bg-gradient-to-b from-primary to-black bg-clip-text text-transparent">
                                Kills 99.9% <span className="italic">Cryptosporidium</span> {"<"}
                                30min
                            </span>
                        </h1>

                        <div className="flex justify-center">
                            {/* <BookMeetingBtn variant="primary" /> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="md:space-y-32 space-y-20 md:py-32 py-20 container">
                <div className="grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                                Indoor Air and Water Quality
                            </h2>
                            <p className="mt-5 text-slate-600 [text-wrap:balance]">
                                This graph shows trichloramine concentration days and hours leading
                                up to starting treatment. Within hours of implementing the
                                treatment, the trichloramine concentration plummeted. A 10-fold
                                reduction in trichloramine was achieved and sustained during
                                comparable bather loading (time of day) throughout the remainder of
                                the study.
                            </p>
                            <Button asChild size="sm" className="mt-4">
                                <Link href="#lead-form">Download White Paper</Link>
                            </Button>
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

                <div className="grid grid-cols-12 gap-8 sm:gap-16 md:grid-cols-12">
                    <div className="col-span-6 grid place-items-center md:mr-12 px-8 md:px-2">
                        <Carousel
                            opts={{
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {dbpCostsImages.map(({ src, alt, title }) => (
                                    <CarouselItem key={alt}>
                                        <div className="flex flex-col items-center justify-center p-4">
                                            <p className="text-xl font-semibold mb-1">{title}</p>
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
                    <div className="md:col-span-6 col-span-12 grid place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] lg:text-[53px]">
                                Cost of DBPs
                            </h2>
                            <p className="mt-5 text-slate-600 [text-wrap:balance]">
                                Trichloramine and other DBPs induce corrosion of air-handling and
                                dehumidification equipment, costing facilities large sums of money
                                for maintenance and replacement cost. Chemical cost and capital
                                expenses are significantly increased due to trying to combat the
                                problem by super-chlorinating, UV, ozone and the like.
                            </p>
                            <Button asChild size="sm" className="mt-4">
                                <Link href="#lead-form">Download White Paper</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <Banner
                    title="Lets Have A Conversation"
                    description="Partner with us to protect your pool patrons from chlorine-resistant pathogens and ensure water safety."
                />

                <div className="grid gap-8 sm:gap-16 md:grid-cols-12 items-center">
                    <div className="col-span-6 place-items-center justify-self-center md:justify-self-start">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                                Energy Cost
                            </h2>
                            <p className="mt-5 text-slate-600 [text-wrap:balance]">
                                As chloramine and other DBP concentrations increase, air quality
                                deteriorates. In order to remedy the poor air quality, facility
                                operators increase the outside air exchange to dilute the corrosive
                                irritants, “Dilution is the solution to pollution.” This practice
                                dramatically increases operating costs as illustrated.
                            </p>
                            <p className="mt-5 text-slate-600 [text-wrap:balance]">
                                Cryptolyte® mitigates the DBP precursors and DBPs, allowing the
                                facility to operate as designed, saving on energy, chemicals,
                                capital and maintenance expenses.
                            </p>
                            <Button asChild size="sm" className="mt-4">
                                <Link href="#lead-form">Download White Paper</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="col-span-6 grid place-items-center">
                        <picture className="drop-shadow-xl">
                            <Image
                                className="rounded-xl"
                                src="/images/trichlor-chart.png"
                                alt="Chart showing chloramine induced heating costs"
                                width={900}
                                height={900}
                            />
                        </picture>
                    </div>
                </div>
            </section>

            <section id="lead-form" className="max-w-screen-md md:pb-32 pb-20 container">
                <div className="max-w-screen-md mb-8">
                    <h2 className="text-4xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px] mb-5">
                        Download Our White Paper
                    </h2>
                    <p className="text-slate-700">
                        Get our comprehensive technical report on indoor pool water treatment,
                        featuring research data on DBP reduction, energy savings, and equipment
                        protection. Learn how our EPA-approved technology eliminates up to 99.9% of
                        harmful byproducts while reducing operational costs.
                    </p>
                </div>

                <LeadMagnetForm />
            </section>
        </>
    );
}
