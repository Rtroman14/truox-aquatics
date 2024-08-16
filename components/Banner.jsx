import BookMeetingBtn from "@/components/BookMeetingBtn";

export default function Banner({ title, description }) {
    return (
        <section className="container">
            <div className="relative flex flex-col items-center overflow-hidden rounded-3xl bg-primary p-8 text-center md:px-20 md:py-20">
                <svg
                    className="absolute bottom-0 left-1/2 z-0 w-[60vw] -translate-x-1/2 translate-y-1/2 blur-[64px]"
                    viewBox="153.612 180.152 176.49 33.212"
                    xmlns="http://www.w3.org/2000/svg"
                >
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

                <div className="z-10">
                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-lg text-white/70 md:text-xl">{description}</p>
                    <div className="mt-5 flex justify-center">
                        <BookMeetingBtn variant="white" />
                    </div>
                </div>
            </div>
        </section>
    );
}
