// import Image from "next/image";

export default function PageHero({ title }) {
    return (
        <div className="relative grid bg-primary">
            <h1 className="z-10 text-center p-36 text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-7xl">
                <span className="bg-gradient-to-b from-white to-white bg-clip-text text-transparent">
                    {title}
                </span>
            </h1>

            <svg
                className="absolute bottom left-1/4 z-0 w-[30vw] -translate-x-1/2 translate-y-1/2 blur-[64px]"
                viewBox="153.612 180.152 176.49 33.212"
                xmlns="http://www.w3.org/2000/svg">
                <ellipse
                    style={{
                        stroke: "rgba(112, 103, 255, 0.3)",
                        fill: "rgba(255, 255, 255, 0.3)",
                        strokeWidth: "0px",
                    }}
                    cx="241.857"
                    cy="196.758"
                    rx="88.245"
                    ry="16.606"
                    transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -3.552713678800501e-15, 0)"
                />
            </svg>

            <svg
                className="absolute bottom-0 left-3/4 z-0 w-[30vw] -translate-x-1/2 translate-y-1/2 blur-[64px]"
                viewBox="153.612 180.152 176.49 33.212"
                xmlns="http://www.w3.org/2000/svg">
                <ellipse
                    style={{
                        stroke: "rgba(112, 103, 255, 0.3)",
                        fill: "rgba(255, 255, 255, 0.3)",
                        strokeWidth: "0px",
                    }}
                    cx="241.857"
                    cy="196.758"
                    rx="88.245"
                    ry="16.606"
                    transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -3.552713678800501e-15, 0)"
                />
            </svg>
        </div>
        // <div className="relative grid">
        //     <Image
        //         className="absolute"
        //         src="/images/water-splash.png"
        //         alt="Water drop hitting water"
        //         fill
        //         sizes="100vw"
        //         style={{
        //             objectFit: "cover",
        //         }}
        //     />
        //     <div className="absolute h-full w-full backdrop-blur-sm"></div>

        //     <h1 className="z-10 text-center p-44 text-5xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-6xl md:text-7xl">
        //         <span className="bg-gradient-to-b from-slate-600 to-slate-950 bg-clip-text text-transparent">
        //             Remediation
        //         </span>
        //     </h1>
        // </div>
    );
}
