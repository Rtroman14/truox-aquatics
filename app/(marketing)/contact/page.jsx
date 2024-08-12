import PageHero from "@/components/PageHero";
import ContactForm from "./_components/ContactForm";

export const metadata = {
    title: "CryptoLyte | Contact",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function ContactPage() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Contact" />

            <section className="py-20 sm:py-28 container flex items-center justify-center">
                <ContactForm />
            </section>
        </div>
    );
}
