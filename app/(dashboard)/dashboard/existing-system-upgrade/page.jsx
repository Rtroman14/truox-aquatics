// import ExistingSystemForm from "@/components/MultiForm/ExistingSystemForm";
import ExistingSystemForm from "./_components/ExistingSystemForm";
import PerformanceExpectationsTable from "@/components/PerformanceExpectationsTable";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function ExistingSystemUpgradePage() {
    return (
        <div className="grid min-h-screen grid-cols-1 gap-24 container">
            <div className="flex flex-col items-center py-8 max-w-xl mx-auto w-full">
                <ExistingSystemForm />
            </div>
            <div>
                <PerformanceExpectationsTable />
            </div>
        </div>
    );
}
