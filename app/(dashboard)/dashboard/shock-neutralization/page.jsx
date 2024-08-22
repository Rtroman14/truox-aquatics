import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function ShockNeutralizationPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <Card className="min-w-[500px]">
                    <CardHeader>
                        <CardTitle>Shock Neutralization</CardTitle>
                    </CardHeader>
                    <CardContent className="ml-4 space-y-8">
                        <div className="space-y-6">
                            <p>
                                <strong>Shock Treatment</strong> performed after a fecal release
                                relies on the Pool Dynamic (PPM ClO2 per minute based on the total
                                pool volume) to perform the Remediation cycle. The time and dosage
                                required to complete this cycle should not change by any significant
                                amount. So, once you have the Neutralization feed rate and duration
                                (time) dialed in, the need to make additional adjustments should be
                                minor if at all.
                            </p>
                            <p>
                                <strong>You will need to following information:</strong>
                            </p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Pool Volume _______ gallons</li>
                                <li>
                                    Neutralizer Feed Rate _______ gal/min (Pump of Venturi Output)
                                </li>
                                <li>
                                    Total Free Residual from DPD Test _______ PPM (Reported as Cl
                                    <sub>2</sub>)
                                </li>
                                <li>
                                    Startup Remediation Duration ________ (Minutes)
                                    <p className="bg-[#FFFF00] w-max mb-5">
                                        This is the TOTAL time from Start to Finish in minutes
                                    </p>
                                </li>
                                <li>
                                    Neutralizer (Dechlor) (gal) = [Pool Volume (gal)/10,000] x [Free
                                    Residual Cl<sub>2</sub> PPM/10] x 0.26
                                </li>
                                <li>
                                    <strong className="text-[#FF0000]">
                                        Dechlor Feed Time (Min)
                                    </strong>{" "}
                                    = Shock Neutralizer (gal) / Neutralizer Feed Rate (gal/min)
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl underline font-bold text-[#2F5496]">
                                Setup SHOCK (Fecal) DeChlor
                            </h2>
                            <p>From the main menu, press the "Menu" key to enter the menus.</p>
                            <p>Login as Rep if necessary. Select "Control Outputs".</p>
                            <p>Select "Dechlorination".</p>
                            <p>
                                Set the{" "}
                                <strong className="text-[#2F5496]">Crypto Feed Factor</strong> to
                                achieve the
                                <strong className="text-[#FF0000]">
                                    {" "}
                                    Dechlor Feed Time (Min){" "}
                                </strong>
                                using the following equation:
                            </p>
                            <div className="space-y-2">
                                <p>
                                    <strong className="text-[#FF0000]">
                                        DeChlor Feed Time (Min){" "}
                                    </strong>{" "}
                                    = Startup Remediation Feed Duration (min) x{" "}
                                    <strong className="text-[#2F5496]">Crypto Feed Factor</strong>
                                </p>
                            </div>

                            <div className="space-y-6">
                                <ul className="list-disc ml-4 space-y-2">
                                    <li>
                                        <strong className="text-[#2F5496]">
                                            Crypto Feed Factor
                                        </strong>
                                        <ul className="list-none ml-4 space-y-2">
                                            <li>
                                                Default value – 0.25
                                                <strong className="text-[#008000]">
                                                    {" "}
                                                    Adjust as Needed
                                                </strong>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong className="text-[#2F5496]">
                                            Crypto Comp Factor
                                        </strong>
                                        <ul className="list-none ml-4 space-y-2">
                                            <li>
                                                Default value – 1.0
                                                <strong className="text-[#008000]">
                                                    {" "}
                                                    Do Not Change
                                                </strong>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
