import NewSystemForm from "./_components/NewSystemForm";
import PerformanceExpectationsTable from "@/components/PerformanceExpectationsTable";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function NewSystemPage() {
    return (
        <div className="grid min-h-screen grid-cols-1 gap-24 container">
            <div className="flex flex-col items-center py-8 max-w-xl mx-auto w-full">
                <NewSystemForm />
            </div>
            <div>
                <PerformanceExpectationsTable />
            </div>
        </div>
    );
}
