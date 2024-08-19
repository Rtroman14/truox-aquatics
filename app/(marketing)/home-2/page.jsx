import Hero from "@/components/Hero";
import TwoColSection from "@/components/TwoColSection";
import Banner from "@/components/Banner";
import MitigationSection from "@/components/MitigationSection";
// import { SocialProof } from "@/components/SocialProof";
import ComparisonTable from "@/components/ComparisonTable";

export default async function Home() {
    return (
        <>
            <Hero />

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

            {/* <TwoColSection
                title="Indoor Water & Air Quality"
                description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                imageSrc="/images/placeholder.jpeg"
                imageAlt=""
                learnMoreHref="/water-and-air-quality"
            /> */}
            {/* 
            <section className="py-20 sm:py-28 container">
                <h2 className="text-4xl font-semibold text-center mb-8 leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Comparison Chart
                </h2>

                <ComparisonTable />
            </section> */}
        </>
    );
}
