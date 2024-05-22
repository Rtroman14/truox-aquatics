import VerticalLinearStepper from "@/components/MultiForm/VerticalStepper";
import FeedRateForm from "@/components/FeedRateForm";

export default function Calculator() {
    return (
        <div className="grid h-screen grid-cols-1 dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
            <div className="flex flex-col items-center justify-center">
                <VerticalLinearStepper />

                {/* <FeedRateForm /> */}
            </div>
        </div>
    );
}
