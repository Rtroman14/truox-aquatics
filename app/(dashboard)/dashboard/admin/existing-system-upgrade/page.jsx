import { createClient } from "@/lib/supabase/admin";
import { ExistingSystemUpgradeTable } from "./existing-system-upgrade-table";

export const dynamic = "force-dynamic";

export default async function ExistingSystemUpgradePage() {
    const supabase = createClient();

    const { data: existingSystemUpgrades, error } = await supabase
        .from("existing_system_upgrade")
        .select("*, customer_id(first_name, last_name, email)")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching existing system upgrades:", error);
        return <div>Error loading data</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-8">Existing System Upgrades</h1>
            <ExistingSystemUpgradeTable data={existingSystemUpgrades || []} />
        </div>
    );
}
