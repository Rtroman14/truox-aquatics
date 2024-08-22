import InstallationDiagrams from "./_components/InstallationDiagrams";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function InstallationDiagramsPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <InstallationDiagrams />
            </div>
        </div>
    );
}
