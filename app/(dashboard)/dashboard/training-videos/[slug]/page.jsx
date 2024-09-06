import { guides } from "../variables";

export const metadata = {
    title: "CryptoLyte | Training Guides",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function VideoPage({ params }) {
    const { slug } = params;

    const guide = guides.find((el) => el.href.includes(slug));

    return (
        <iframe src={guide.src} frameBorder="0" className="w-full h-[calc(100vh-400px)]"></iframe>
    );
}
