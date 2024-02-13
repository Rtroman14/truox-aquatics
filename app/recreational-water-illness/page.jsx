import Image from "next/image";
import TwoColSection from "@/components/TwoColSection";

export default function RecreationalWaterIllness() {
    return (
        <div className="mt-[62px]">
            <div className="relative grid">
                <Image
                    className="absolute"
                    src="/images/water-splash.png"
                    alt="Water drop hitting water"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="absolute h-full w-full backdrop-blur-sm"></div>

                <h1 className="z-10 text-center m-44 text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-7xl">
                    <span className="bg-gradient-to-b from-slate-600 to-slate-950 bg-clip-text text-transparent">
                        Recreational Water Illness (RWI)
                    </span>
                </h1>
            </div>

            <section className="grid gap-24 bg-background py-20 sm:gap-36 sm:py-36 ">
                <TwoColSection
                    title="Lorem ipsum dolor sit amet"
                    description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
                    imageSrc="/images/placeholder.jpeg"
                    imageAlt=""
                    learnMoreHref="/recreational-water-illness"
                />

                <TwoColSection
                    title="Lorem ipsum dolor sit amet"
                    description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur."
                    imageSrc="/images/placeholder.jpeg"
                    imageAlt=""
                    learnMoreHref="/remediation"
                    isReversed
                />
            </section>
        </div>
    );
}
