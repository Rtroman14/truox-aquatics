import PreProposalInspectionPage from "./_components/PreProposalInspectionPage";

export default function PreProposalCheckList() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <PreProposalInspectionPage />
            </div>
        </div>
    );
}
