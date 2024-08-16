import PageHero from "@/components/PageHero";

export const metadata = {
    title: "CryptoLyte | Downloads",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

const resources = [
    {
        title: "CDC Study 2018",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/cdc-study-2018.pdf",
    },
    {
        title: "CDC: Bacteria Outbreak (2022)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/cdc-2022-bacteria-outbreak.pdf",
    },
    {
        title: "CDC: Outbreaks with Treated Recreational Water",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/cdc-2015-2019-outbreaks-with-treated-rec-water.pdf",
    },
    {
        title: "Cryptolyte Reduces RWI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/cryptolyte-RWI-reduction.pdf",
    },
    {
        title: "Addressing Indoor Aquatic Illness",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/understanding-and-addressing-indoor-aquatic-illness.pdf",
    },
    {
        title: "Purdue Blatchley Paper",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/purdue-blatchley-paper.pdf",
    },
    {
        title: "UV formation of DBPs in Pools",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/UV formation of DBPs in Pools.pdf",
    },
    {
        title: "UV formation of THMs in Pools",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        src: "/pdfs/UV formation of THMs in Pools.pdf",
    },
];

export default function DownloadsPage() {
    return (
        <div className="mt-[70px]">
            <PageHero title="Downloads" />
            <section className="py-20 sm:py-28 container grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:p-6">
                {resources.map((video) => (
                    <div
                        key={video.title}
                        className="rounded-lg bg-background p-6 transition-all hover:scale-105 shadow-md hover:shadow-xl cursor-pointer h-min"
                    >
                        <div className="mb-4 text-lg font-semibold">{video.title}</div>
                        <p className="text-muted-foreground">{video.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}
