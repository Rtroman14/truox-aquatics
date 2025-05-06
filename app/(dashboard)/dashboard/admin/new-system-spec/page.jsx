import { createClient } from "@/lib/supabase/admin";
import { NewSystemSpecTable } from "./new-system-spec-table";

export const dynamic = "force-dynamic";

export default async function NewSystemSpecPage() {
    const supabase = createClient();

    const { data: newSystemSpecs, error } = await supabase
        .from("new_system_spec")
        .select("*, customer_id(first_name, last_name, email)");

    if (error) {
        console.error("Error fetching new system specs:", error);
        return <div>Error loading data</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-8">New System Specifications</h1>
            <NewSystemSpecTable data={newSystemSpecs || []} />
        </div>
    );
}
