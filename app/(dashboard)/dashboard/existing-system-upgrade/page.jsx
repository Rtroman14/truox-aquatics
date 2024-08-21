import ExistingSystemForm from "@/components/MultiForm/ExistingSystemForm";

export default function ExistingSystemUpgradePage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center py-8 px-4 md:px-8">
                <ExistingSystemForm />
            </div>
        </div>
    );
}
