import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "CryptoLyte | Home",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <Navbar /> */}
                <main>
                    <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
                </main>
                {/* <Footer /> */}

                <Toaster />
            </body>
        </html>
    );
}
