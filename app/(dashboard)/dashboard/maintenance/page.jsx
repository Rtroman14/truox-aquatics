export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};
export default function MaintenancePage() {
    return (
        <div className="grid min-h-screen grid-cols-1 py-12 px-8">
            <div className="h-full">
                <div className="flex flex-col items-center p-8 h-full">
                    <iframe
                        src="/pdfs/cl02-sensor-maintenance.pdf"
                        frameborder="0"
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
