import PageHero from "@/components/PageHero";

import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
    title: "CryptoLyte | Downloads",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

const resources = [
    {
        // title: "CDC Study 2018",
        title: "CDC: Outbreaks Associated with Untreated Recreational Water in the U.S. (2000–2014)",
        description:
            "A comprehensive report on public health data detailing 140 outbreaks in untreated recreational waters in the United States, highlighting causes, impacted populations, and preventative measures.",
        src: "/pdfs/cdc-study-2018.pdf",
    },
    {
        title: "CDC: Bacteria Outbreak (2022)",
        description:
            "Discover how an improperly treated Pennsylvania pool led to an E. coli outbreak among children, unraveling crucial insights for preventing similar incidents.",
        src: "/pdfs/cdc-2022-bacteria-outbreak.pdf",
    },
    {
        title: "CDC: Outbreaks with Treated Recreational Water",
        description:
            "Explore essential insights and preventive measures for outbreaks in public aquatic venues, highlighting key data and recommendations from the CDC for safer swimming environments.",
        src: "/pdfs/cdc-2015-2019-outbreaks-with-treated-rec-water.pdf",
    },
    {
        // title: "Cryptolyte Reduces RWI",
        title: "Cryptolyte - Cutting-Edge RWI Reduction Technology",
        description:
            "Combat Recreational Water Illness with Cryptolyte®'s EPA-approved, patented technology for unparalleled pool safety and pristine water quality.",
        src: "/pdfs/cryptolyte-RWI-reduction.pdf",
    },
    {
        title: "Transform Your Indoor Pool Safety with Cryptolyte",
        description:
            "Discover how Cryptolyte® technology dramatically improves air and water quality by mitigating harmful disinfection byproducts (DBPs) in indoor aquatic facilities, ensuring a safer and cleaner swimming environment.",
        src: "/pdfs/understanding-and-addressing-indoor-aquatic-illness-2.pdf",
    },
    {
        title: "Purdue Blatchley: Enhancing Indoor Pool Air and Water Quality",
        description:
            "Explore how innovative water treatment modifications can significantly improve air and water quality in indoor pool facilities, reducing harmful disinfection byproducts and enhancing swimmer safety.",
        src: "/pdfs/purdue-blatchley-paper.pdf",
    },
    {
        title: "UV formation of DBPs in Pools",
        description:
            "Discover the impact of combined UV irradiation and chlorination on swimming pool water chemistry and disinfection byproducts through an insightful three-year study.",
        src: "/pdfs/UV formation of DBPs in Pools.pdf",
    },
    {
        title: "UV formation of THMs in Pools",
        description:
            "Dive into groundbreaking research on how UV treatment affects the formation of disinfection by-products in swimming pool water, revealing crucial insights for safer and clearer pools.",
        src: "/pdfs/UV formation of THMs in Pools.pdf",
    },
];

export default function DownloadsPage() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Downloads" />
            <section className="mt-8 sm:py-28 container grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6">
                {resources.map((resource) => (
                    <div
                        key={resource.title}
                        className="shadow border rounded-lg p-4 flex flex-col justify-between gap-6"
                    >
                        <div>
                            <h2 className="text-xl leading-6 font-bold pb-3">{resource.title}</h2>
                            <p className="text-sm">{resource.description}</p>
                        </div>
                        <div>
                            <div className="flex gap-3 justify-end">
                                <Button size="sm" asChild variant="outline">
                                    <Link href={resource.src} download>
                                        Download
                                        <ArrowDownTrayIcon className="size-4 ml-2" />
                                    </Link>
                                </Button>
                                <Button size="sm" asChild>
                                    <Link
                                        href={resource.src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View
                                        <ArrowTopRightOnSquareIcon className="size-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
