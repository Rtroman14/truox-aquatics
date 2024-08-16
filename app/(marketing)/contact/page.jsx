import PageHero from "@/components/PageHero";
import ContactForm from "./_components/ContactForm";
import QRCode from "react-qr-code";
import Calendly from "../../../components/Calendly";

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

            <section className="py-20 sm:py-28 mx-auto">
                <Calendly url="https://calendly.com/ryan-truox/30min" />
            </section>

            {/* <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value="https://truox-website.vercel.app/"
                    viewBox={`0 0 256 256`}
                />
            </div> */}
        </div>
    );
}
