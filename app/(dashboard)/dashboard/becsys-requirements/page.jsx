import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function CalibrationPage() {
    const tabsData = [
        {
            value: "becsys-requirements",
            label: "BECSys Requirements",
            pdfPath: "/pdfs/cryptolyte-upgrade-becsys-requirements.pdf",
        },
        {
            value: "cryptolyte-control-application-notes",
            label: "Control Application Notes APN",
            pdfPath: "/pdfs/cryptolyte-control-application-notes-apn-6151-a.pdf",
        },
        {
            value: "chlorine-dioxide-sensor",
            label: "Chlorine Dioxide Sensor",
            pdfPath: "/pdfs/chlorine-dioxide-sensor-tds-6145-a.pdf",
        },
    ];

    return (
        <div className="grid min-h-screen grid-cols-1 py-12 px-8">
            <Tabs defaultValue={tabsData[0].value}>
                <TabsList className="w-full flex">
                    {tabsData.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value} className="flex-1">
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabsData.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value} className="h-full">
                        <div className="flex flex-col items-center p-8 h-full">
                            <iframe
                                src={tab.pdfPath}
                                frameBorder="0"
                                width="100%"
                                height="100%"
                            ></iframe>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
