import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pdfs = [
    {
        value: "calibration",
        src: "/pdfs/cl02-sensor-calibration.pdf",
    },
    {
        value: "commissioning",
        src: "/pdfs/cl02-sensor-commissioning.pdf",
    },
    {
        value: "maintenance",
        src: "/pdfs/cl02-sensor-maintenance.pdf",
    },
    {
        value: "troubleshooting",
        src: "/pdfs/cl02-sensor-troubleshooting.pdf",
    },
];

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function SensorCommissioningPage() {
    return (
        <div className="grid min-h-screen grid-cols-1 py-12 px-8">
            <Tabs defaultValue="calibration">
                <TabsList className="w-full flex">
                    <TabsTrigger value="calibration" className="flex-1">
                        Calibration
                    </TabsTrigger>
                    <TabsTrigger value="commissioning" className="flex-1">
                        Commissioning
                    </TabsTrigger>
                    <TabsTrigger value="maintenance" className="flex-1">
                        Maintenance
                    </TabsTrigger>
                    <TabsTrigger value="troubleshooting" className="flex-1">
                        Troubleshooting
                    </TabsTrigger>
                </TabsList>
                {pdfs.map((pdf) => (
                    <TabsContent key={pdf.value} value={pdf.value} className="h-full">
                        <div className="flex flex-col items-center p-8 h-full">
                            <iframe
                                src={pdf.src}
                                frameborder="0"
                                width="100%"
                                height="100%"
                            ></iframe>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );

    // return (
    //     <div className="grid min-h-screen grid-cols-1 py-12 px-8">
    //         <Card>
    //             <CardHeader>
    //                 <CardTitle>Sensor Commissioning</CardTitle>

    //                 <CardDescription>
    //                     Low Chlorine Dioxide concentration during Remediation Cycle
    //                 </CardDescription>
    //             </CardHeader>
    //             <CardContent>
    //                 <Tabs defaultValue="calibration">
    //                     <TabsList className="w-full flex">
    //                         <TabsTrigger value="calibration" className="flex-1">
    //                             Calibration
    //                         </TabsTrigger>
    //                         <TabsTrigger value="commissioning" className="flex-1">
    //                             Commissioning
    //                         </TabsTrigger>
    //                         <TabsTrigger value="maintenance" className="flex-1">
    //                             Maintenance
    //                         </TabsTrigger>
    //                         <TabsTrigger value="troubleshooting" className="flex-1">
    //                             Troubleshooting
    //                         </TabsTrigger>
    //                     </TabsList>
    //                     {pdfs.map((pdf) => (
    //                         <TabsContent key={pdf.value} value={pdf.value} className="h-full">
    //                             <div className="flex flex-col items-center p-8 h-full">
    //                                 <iframe
    //                                     src={pdf.src}
    //                                     frameborder="0"
    //                                     width="100%"
    //                                     height="100%"
    //                                 ></iframe>
    //                             </div>
    //                         </TabsContent>
    //                     ))}
    //                 </Tabs>
    //             </CardContent>
    //         </Card>
    //     </div>
    // );
}
