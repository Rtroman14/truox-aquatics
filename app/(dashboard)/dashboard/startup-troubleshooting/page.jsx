import StartupTroubleshooting from "./_components/StartupTroubleshooting";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function StartupTroubleshootingPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <StartupTroubleshooting />
            </div>
            {/* <div className="flex flex-col items-center p-8">
                <StartupNeutralization />
            </div> */}
            {/* <div className="flex flex-col items-center p-8">
                <ShockNeutralization />
            </div> */}
        </div>
    );
}
