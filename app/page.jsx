import Hero from "@/components/Hero";
import TwoColSection from "@/components/TwoColSection";
import Banner from "@/components/Banner";

export default async function Home() {
    return (
        <>
            <Hero />

            <section className="grid gap-24 bg-background py-20 sm:gap-36 sm:py-36 ">
                <TwoColSection
                    title="Recreational Water Illness (RWI)"
                    description="Recreational Water Illness (RWI) is a term for infections caused by germs spread by swimming in contaminated water. Even well-treated pools can have RWIs, due to micro-organisms and byproducts from the interaction of chlorine with bather-introduced substances like sweat, body oils, and lotions. These contaminants reduce the chlorine's effectiveness and can create a shield on surfaces where bacteria hide and multiply. It's essential to maintain proper pool hygiene to protect against RWIs."
                    imageSrc="/images/placeholder.jpeg"
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
        </>
    );
}
