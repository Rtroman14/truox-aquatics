import QRCode from "react-qr-code";

export default function QRCodesPage() {
    return (
        <div className="md:mt-60 mt-32 flex items-center flex-col h-screen container">
            <h1 className="font-bold text-2xl mb-16">Home page (https://truoxaquatics.com/)</h1>

            <div className="h-auto mx-auto w-full flex justify-center">
                <QRCode size={800} value="https://truoxaquatics.com/" viewBox={`0 0 900 900`} />
            </div>
        </div>
    );
}
