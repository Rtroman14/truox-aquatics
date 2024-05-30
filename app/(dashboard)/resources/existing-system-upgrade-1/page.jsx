import VerticalLinearStepper from "@/components/MultiForm/VerticalStepper";

export default function ExistingSystemUpgradePage() {
    return (
        <div className="grid h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <VerticalLinearStepper />
            </div>
        </div>
    );
}
