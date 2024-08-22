import { motion } from "framer-motion";

export default function StepIndicator({ steps, currentStep }) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center mb-2 ${
                                index + 1 <= currentStep
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                            }`}
                        >
                            {index + 2 <= currentStep ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            ) : (
                                <span className="text-sm">{index + 1}</span>
                            )}
                        </div>
                        <span className="text-sm font-medium">{step.label}</span>
                        {/* <span className="text-xs text-muted-foreground">{step.description}</span> */}
                    </div>
                ))}
            </div>
            <div className="relative pt-4">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-muted">
                    <motion.div
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </div>
    );
}
