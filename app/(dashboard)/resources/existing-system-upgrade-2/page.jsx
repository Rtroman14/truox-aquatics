import HorizontalLinearStepper from "@/components/MultiForm/HorizontalStepper";

export default function ExistingSystemUpgradePage() {
    return (
        <div className="grid h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <HorizontalLinearStepper />
            </div>
        </div>
    );
}
