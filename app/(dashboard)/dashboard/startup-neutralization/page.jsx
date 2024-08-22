import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function StartupNeutralizationPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <Card className="min-w-[500px]">
                    <CardHeader>
                        <CardTitle>Startup Neutralization</CardTitle>
                    </CardHeader>
                    <CardContent className="ml-4 space-y-8">
                        <div className="space-y-6">
                            <p>
                                <strong>Startup Remediation</strong> is a one-off procedure used to
                                Remediate the system to remove Biofilms etc. The following
                                Neutralization procedure will assist in removing the excess
                                treatment once Remediation is complete. However, anticipate having
                                to make some additional adjustments before re-opening the pool.
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
                                Setup DeChlor for STARTUP Remediation
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
