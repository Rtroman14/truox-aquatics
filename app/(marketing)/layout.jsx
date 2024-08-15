import Script from "next/script";
import Navbar from "@/components/Navbar.menu";
import Footer from "@/components/Footer";

export default async function Layout({ children }) {
    return (
        <>
            <Script src="https://webagent.ai/api/chatbot/41874d5c-3950-4394-adb8-c14ceb356740" />

            <Navbar />
            {children}
            <Footer />
        </>
    );
}
