import { forwardRef } from "react";
import Logo from "@/components/Logo";

const ComponentToPrint = forwardRef(({ children, title, siteName, companyName }, ref) => {
    return (
        <div className="pt-12 px-24" ref={ref}>
            <div className="h-screen flex flex-col items-center justify-center p-8">
                <div className="w-72 mb-12">
                    <Logo width={500} height={500} />
                </div>

                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-semibold">{title}</h1>

                    <div className="space-y-2">
                        <div>
                            <span className="text-gray-500">Site Name:</span>
                            <p className="text-2xl font-medium">{siteName}</p>
                        </div>

                        <div>
                            <span className="text-gray-500">Company Name:</span>
                            <p className="text-2xl font-medium">{companyName}</p>
                        </div>

                        <p className="text-sm text-gray-500 pt-8">
                            Generated on {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
});

export default ComponentToPrint;
