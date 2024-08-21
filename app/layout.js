import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";
// import Script from "next/script";
// import MicrosoftClarity from "@/components/Clarity";

const inter = Inter({ subsets: ["latin"] });

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

                {/* <MicrosoftClarity /> */}

                <Toaster />

                <Script
                    type="text/javascript"
                    id="hs-script-loader"
                    async
                    defer
                    src="//js.hs-scripts.com/44551456.js"
                    strategy="beforeInteractive"
                />
            </body>
        </html>
    );
}
