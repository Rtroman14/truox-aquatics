import PageHero from "@/components/PageHero";
import ContactForm from "./_components/ContactForm";
import Calendly from "../../../components/Calendly";

export const metadata = {
    title: "CryptoLyte | Contact",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function ContactPage() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Contact" />

            <section className="py-20 sm:py-28 flex flex-col items-center justify-center container">
                <div className="max-w-screen-md mb-8">
                    <h2 className="font-bold text-4xl mb-6">Contact Us</h2>
                    <p className="text-slate-700">
                        Have questions about our products or services? Interested in partnering with
                        us to enhance pool safety? We're here to help! Please fill out the form
                        below, and one of our representatives will get back to you as soon as
                        possible.
                    </p>
                </div>

                <div className="w-full max-w-screen-sm ">
                    <ContactForm />
                </div>
            </section>

            <section className="mx-auto">
                <div className="mb-2 max-w-screen-md w-full mx-auto">
                    <h2 className="font-bold text-4xl mb-6">Book a Call</h2>
                    <p className="text-slate-700">
                        If you prefer a more direct approach, you can book a meeting with us at your
                        convenience. Selected a time below to schedule a 30-minute consultation with
                        our VP, Ryan. We look forward to discussing your pool safety needs and
                        showing you how Cryptolyte® can make a difference.
                    </p>
                </div>
                <div>
                    <Calendly url="https://calendly.com/ryan-truox/30min" />
                </div>
            </section>
        </div>
    );
}
