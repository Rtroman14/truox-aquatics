import PreProposalInspectionPage from "./_components/PreProposalInspectionPage";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function PreProposalCheckList() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <PreProposalInspectionPage />
            </div>
        </div>
    );
}
