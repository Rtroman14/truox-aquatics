import PageHero from "@/components/PageHero";

import FAQs from "./_components/FAQsPage";

export const metadata = {
    title: "CryptoLyte | FAQs",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function FAQsPage() {
    return (
        <div className="mt-[70px]">
            <PageHero title="FAQs" />
            <section className="py-20 sm:py-28 container">
                <FAQs />
            </section>
        </div>
    );
}
