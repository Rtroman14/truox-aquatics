import StartupTroubleshooting from "./_components/StartupTroubleshooting";

// import StartupNeutralization from "@/components/StartupNeutralization";
// import ShockNeutralization from "@/components/ShockNeutralization";

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
