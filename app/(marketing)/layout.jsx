// import Navbar from "@/components/Navbar";
import Navbar from "@/components/Navbar.menu";
import Footer from "@/components/Footer";

export default async function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
