import Hero from "@/components/Hero.video";
import TwoColSection from "@/components/TwoColSection";
import Banner from "@/components/Banner";
import MitigationSection from "@/components/MitigationSection";

export default async function Home() {
    return (
        <>
            <Hero />

            <section className="grid gap-24 py-20 sm:gap-36 sm:py-36">
                <TwoColSection
                    title="Recreational Water Illness (RWI)"
                    description="Recreational Water Illness (RWI) is a term for infections caused by germs spread by swimming in contaminated water. Even well-treated pools can have RWIs, due to micro-organisms and byproducts from the interaction of chlorine with bather-introduced substances like sweat, body oils, and lotions. These contaminants reduce the chlorine's effectiveness and can create a shield on surfaces where bacteria hide and multiply. It's essential to maintain proper pool hygiene to protect against RWIs."
                    imageSrc="/images/etiology.png"
                    imageAlt=""
                    learnMoreHref="/recreational-water-illness"
                />

                <TwoColSection
                    title="Remediation"
                    description="Introducing Cryptolyte®, a patented, EPA Registered pool disinfectant, ensuring rapid elimination of chlorine-resistant Cryptosporidium and other pathogens. Its integration with current systems guarantees a safe and clean swimming experience with less chemical usage. Certified for both pools and drinking water, Cryptolyte® is the new standard in water remediation."
                    imageSrc="/images/placeholder.jpeg"
                    imageAlt=""
                    learnMoreHref="/remediation"
                    isReversed
                />
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
        </>
    );
}
