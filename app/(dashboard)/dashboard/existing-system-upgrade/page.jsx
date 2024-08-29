// import ExistingSystemForm from "@/components/MultiForm/ExistingSystemForm";
import ExistingSystemForm from "./_components/ExistingSystemForm";
import PerformanceExpectationsTable from "@/components/PerformanceExpectationsTable";

import { fetchCustomer } from "@/app/actions";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default async function ExistingSystemUpgradePage() {
    const { success, data } = await fetchCustomer("company_name");

    return (
        <div className="grid min-h-screen grid-cols-1 gap-24 container">
            <div className="flex flex-col items-center py-8 max-w-xl mx-auto w-full">
                <ExistingSystemForm customer={data} />
            </div>
            <div>
                <PerformanceExpectationsTable />
            </div>
        </div>
    );
}
