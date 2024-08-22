import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function StartupConfigurationPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <Card className="min-w-[400px]">
                    <CardHeader>
                        <CardTitle>Startup Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="ml-4 space-y-6">
                        {/* <p>
                            <strong>NOTE:</strong> The Shock Cycle is used to perform the “Startup
                            Remediation”. So the Shock Configuration will be programmed to perform
                            the Startup Remediation. After completion of the Startup Remediation,
                            the Shock Cycle needs to be reconfigured back to the normal Shock Cycle
                            settings.
                        </p> */}
                        <ul className="grid grid-cols-1 gap-3 list-disc">
                            <li className="space-y-1">
                                <span>Shock Duration</span>
                                <ul className="list-inside list-disc ml-4 space-y-1">
                                    <li>
                                        Initial feed duration in shock cycle before switching to TBP
                                        control.
                                    </li>
                                    <li>Default value - 0s</li>
                                </ul>
                            </li>
                            <li className="space-y-1">
                                <span>Shock Set Point</span>
                                <ul className="list-inside list-disc ml-4 space-y-1">
                                    <li>
                                        ClO<sub>2</sub> setpoint that Cryptolyte will control to in
                                        shock cycle
                                    </li>
                                    <li>Default value - 9.0ppm</li>
                                </ul>
                            </li>
                            <li className="space-y-1">
                                <span>Shock Timeout</span>
                                <ul className="list-inside list-disc ml-4 space-y-1">
                                    <li>
                                        Maximum time allowed to complete remediation before
                                        triggering alarm in shock cycle
                                    </li>
                                    <li>
                                        <span>Default value - 3 hr</span>{" "}
                                        <span className="text-blue-600">Set to 6hr</span>
                                    </li>
                                    <li>
                                        <span className="text-green-600">
                                            Upon completion of the Startup Remediation, Reset the
                                            Default to 3hr
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="space-y-1">
                                <span>Shock CT Set Point</span>
                                <ul className="list-inside list-disc ml-4 space-y-1">
                                    <li>
                                        CT setpoint for tracking when a remediation has been
                                        successfully completed in shock cycle
                                    </li>
                                    <li>
                                        <span>Default value - 160CT</span>{" "}
                                        <span className="text-blue-600">Set to 800</span>
                                    </li>
                                    <li>
                                        <span className="text-green-600">
                                            Upon completion of the Startup Remediation, Reset the
                                            Default to 160
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="space-y-1">
                                <span>Shock TBP Span</span>
                                <ul className="list-inside list-disc ml-4 space-y-1">
                                    <li>
                                        Offset from Shock Setpoint for which proportional control
                                        will be engaged. If outside this span, then the feed will be
                                        fully on.
                                    </li>
                                    <li>Default value - 0.2ppm</li>
                                </ul>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
