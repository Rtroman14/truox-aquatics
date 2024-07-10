import PreInstallationCheckList from "./_components/PreInstallationCheckList";

export default function PreInstallationCheckListPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <PreInstallationCheckList />
            </div>
        </div>
    );
}
