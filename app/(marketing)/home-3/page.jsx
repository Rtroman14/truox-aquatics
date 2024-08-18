import Image from "next/image";

import TwoColSection from "@/components/TwoColSection";
import Banner from "@/components/Banner";
import MitigationSection from "@/components/MitigationSection";
// import { SocialProof } from "@/components/SocialProof";
import ComparisonTable from "@/components/ComparisonTable";
import BookMeetingBtn from "@/components/BookMeetingBtn";
import epaLogo from "@/public/images/epa-icon.svg";

export default async function Home() {
    return (
        <>
            <section className="relative grid min-h-screen py-32">
                <div className="z-20 flex flex-col items-center justify-center bg-[#D2D6EA] py-12 px-6 rounded-3xl m-12">
                    <div className="grid gap-16">
                        <div className="flex justify-center items-center">
                            <Image
                                priority
                                src={epaLogo}
                                alt="EPA Approved"
                                height={50}
                                width={50}
                            />
                            <p className="text-6xl font-bold ml-1 tracking-tighter">EPA Approved</p>
                        </div>

                        <h1 className="text-center text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-8xl">
                            <span className="bg-gradient-to-b from-primary to-black bg-clip-text text-transparent">
                                Kills 99.9% <span className="italic">Cryptosporidium</span> {"<"}
                                30min
                            </span>
                        </h1>

                        <div className="max-w-5xl mx-auto">
                            <video
                                className="rounded-xl shadow-lg"
                                // src="/videos/cryptolyte.mp4"
                                src="https://jvehmpwzlnunrewwnlev.supabase.co/storage/v1/object/public/videos/cryptolyte.mp4?t=2024-08-16T15%3A17%3A55.687Z"
                                width="1440"
                                height="680"
                                controls
                                autoPlay
                                muted
                                playsInline
                                loop
                            />
                        </div>

                        <div className="flex justify-center">
                            <BookMeetingBtn variant="primary" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-24 py-20 sm:gap-36 sm:py-36">
                <TwoColSection
                    title="Recreational Water Illness (RWI)"
                    description="Recreational Water Illness (RWI) is a term for infections caused by germs spread by swimming in contaminated water. Even well-treated pools can have RWIs, due to micro-organisms and byproducts from the interaction of chlorine with bather-introduced substances like sweat, body oils, and lotions. These contaminants reduce the chlorine's effectiveness and can create a shield on surfaces where bacteria hide and multiply. It's essential to maintain proper pool hygiene to protect against RWIs."
                    imageSrc="/images/recreational-water-outbreaks-chart.png"
                    imageAlt=""
                    learnMoreHref="/recreational-water-illness"
                />

                <TwoColSection
                    title="Mitigating RWI"
                    description="Cryptolyte® is a state-of-the-art solution for mitigating Recreational Water Illnesses (RWI). It rapidly oxidizes contaminants like Urea and targets chlorine-resistant pathogens such as Cryptosporidium. Cryptolyte® significantly reduces trichloramine levels, disrupts resistant pathogen membranes, and combats biofilms and bacteria, ensuring a healthier and safer swimming environment without relying on circulation rates."
                    imageSrc="/images/trichlor-chart.png"
                    imageAlt=""
                    learnMoreHref="/remediating-rwi"
                    isReversed
                />
                {/* <TwoColSection
                    title="Remediation"
                    description="Introducing Cryptolyte®, a patented, EPA Registered pool disinfectant, ensuring rapid elimination of chlorine-resistant Cryptosporidium and other pathogens. Its integration with current systems guarantees a safe and clean swimming experience with less chemical usage. Certified for both pools and drinking water, Cryptolyte® is the new standard in water remediation."
                    imageSrc="/images/placeholder.jpeg"
                    imageAlt=""
                    learnMoreHref="/remediation"
                    isReversed
                /> */}
            </section>

            <Banner
                title="Lets Have A Conversation"
                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            />

            <MitigationSection />

            <TwoColSection
                title="Indoor Water & Air Quality"
                description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                imageSrc="/images/placeholder.jpeg"
                imageAlt=""
                learnMoreHref="/water-and-air-quality"
            />

            <section className="py-20 sm:py-28 container">
                <h2 className="text-4xl font-semibold text-center mb-8 leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Comparison Chart
                </h2>

                <ComparisonTable />
            </section>
        </>
    );
}
