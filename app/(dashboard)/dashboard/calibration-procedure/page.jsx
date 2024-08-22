import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function CalibrationProcedure() {
    return (
        <div className="grid min-h-screen grid-cols-1 py-12 px-8">
            <Tabs defaultValue="calibration-procedure">
                <TabsList className="w-full flex">
                    <TabsTrigger value="calibration-procedure" className="flex-1">
                        Calibration Procedure
                    </TabsTrigger>
                    <TabsTrigger value="kemio-instructions" className="flex-1">
                        Kemio Instructions
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="calibration-procedure" className="h-full">
                    <div className="flex flex-col items-center p-8 h-full">
                        <Card className="min-w-[400px]">
                            <CardHeader>
                                <CardTitle>Calibration</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-6">
                                    <strong>Recommendation</strong> – Calibrate the Cryptolyte
                                    Controller when the ClO<sub>2</sub> ppm concentration in the
                                    pool water is at a near steady state condition, such as first
                                    thing in the morning &/or when ClO<sub>2</sub> reading are
                                    remaining stable on the controller display. Avoid calibrating
                                    during a shock cycle as changes are rapid and time is required
                                    for the sensor to reach equilibrium with the changing water
                                    conditions.
                                </p>
                                <ol className="list-decimal list-inside space-y-2 ml-6">
                                    <li>Flush the sample tap on the BECS flow-cell.</li>
                                    <li>
                                        Rinse the Kemio sample cell with treated water off the BECS
                                        flow-cell
                                    </li>
                                    <li>
                                        Collect a fresh sample of treated pool water off the BECS
                                        flow-cell, make sure to minimize turbulence when collecting
                                        the sample. <strong>NOTE:</strong> Make sure you have a slow
                                        steady sample filling the sample cell by allowing the water
                                        to flow down the side of the sample cell in a non-turbulent
                                        manor to prevent degassing the sample.
                                    </li>
                                    <li>
                                        Record the TIME and ClO<sub>2</sub> reading on the
                                        Cryptolyte Controller Screen
                                    </li>
                                    <li>
                                        Immediately perform the Kemio test, and record the value ClO
                                        <sub>2</sub> ppm
                                    </li>
                                    <li>
                                        Compare the Recorded ClO<sub>2</sub> ppm value from the
                                        Cryptolyte Controller to the ClO<sub>2</sub> ppm value from
                                        the Kemio test
                                    </li>
                                    <li>
                                        Calculate the Difference in ClO<sub>2</sub> ppm
                                    </li>
                                    <li>
                                        Log into the Cryptolyte Controller, either add or subtract
                                        the Difference in ClO<sub>2</sub> ppm from Step 7 from the
                                        current ClO
                                        <sub>2</sub> ppm value displayed on the Controller.
                                    </li>
                                    <li>
                                        <strong>REPEAT THE PROCESS</strong> – Confirm the controller
                                        displayed ClO<sub>2</sub> ppm value and the Kemio ClO
                                        <sub>2</sub> ppm value are within {"<"} 0.1ppm ClO
                                        <sub>2</sub> ppm Difference. If
                                        {">"} 0.1 ClO<sub>2</sub> ppm, repeat Steps 1-8. Make sure
                                        you have a slow steady sample filling the sample cell by
                                        allowing the water to flow down the side of the sample cell
                                        in a non-turbulent manor to prevent degassing the sample.
                                    </li>
                                    <li>
                                        Confirm calibration weekly or as needed to ensure accurate
                                        readings and proper control of Remediation.
                                    </li>
                                </ol>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="kemio-instructions" className="h-full">
                    <div className="flex flex-col items-center p-8 h-full w-full">
                        <iframe
                            src="/pdfs/kemio-test-instructions.pdf"
                            frameborder="0"
                            width="100%"
                            height="100%"
                        ></iframe>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
