import SignOut from "./_components/SignOut";

export const metadata = {
    title: "CryptoLyte | Training Videos",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function TrainingVideos() {
    return (
        <div className="flex h-screen items-center justify-center flex-col">
            <h1>Training Videos</h1>

            <SignOut />
        </div>
    );
}
