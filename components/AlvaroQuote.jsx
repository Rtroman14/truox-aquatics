export default function AlvaroQuote() {
    return (
        <figure className="max-w-screen-md mx-auto text-center">
            <svg
                className="md:w-10 w-7 md:h-10 h-7 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
            >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
                <p className="text-xl md:text-3xl italic font-medium text-gray-600 dark:text-white">
                    "Controlling, Confirming & Documenting pool water remediation of Chlorine
                    Resistant Pathogens gives our customers the proof they need to defuse
                    accusations in a climate where even a negative review can go viral online and
                    damage a business’s reputation."
                </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                    className="w-12 h-12 rounded-full drop-shadow-lg"
                    src="/images/Alvaro Mendoza.jpeg"
                    alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-700 dark:text-white text-lg">
                        Alvaro Mendoza
                    </cite>
                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                        CEO at Aquafinity Jupiter, FL
                    </cite>
                </div>
            </figcaption>
        </figure>
    );
}
