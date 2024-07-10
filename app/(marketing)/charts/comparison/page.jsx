import PageHero from "@/components/PageHero";

import ComparisonTable from "@/components/ComparisonTable";

export default function Comparison() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Comparison Table" />

            <section className="py-20 sm:py-28 container">
                <ComparisonTable />
            </section>
        </div>
    );
}
