import ExistingSystemForm from "@/components/MultiForm/ExistingSystemForm";

export default function ExistingSystemUpgradePage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <ExistingSystemForm />
            </div>
        </div>
    );
}
