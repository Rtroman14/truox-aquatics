"use client";

import PageHero from "@/components/PageHero";
import ChlorineResistanceChart from "@/components/ChlorineResistanceChart";

export default function Comparison() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Relative Chlorine Resistance" />

            <section className="py-20 sm:py-28 container">
                {/* <h2 className="text-4xl mb-6 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                    Comparison Table
                </h2> */}

                <div>
                    <ChlorineResistanceChart />
                </div>
            </section>
        </div>
    );
}
