import PreProposalCheckListPage from "./_components/PreProposalCheckListPage";

export default function PreProposalCheckList() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <PreProposalCheckListPage />
            </div>
        </div>
    );
}
