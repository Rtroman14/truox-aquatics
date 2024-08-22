import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function NeutralizationPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <Card className="min-w-[400px]">
                    <CardHeader>
                        <CardTitle>Shock Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="ml-4">
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
                                        <span className="text-blue-600">Reset to 3hr</span>
                                    </li>
                                    <li className="text-blue-600">
                                        (Can set the Timeout based off the Pool Dynamic Chart if
                                        desired)
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
                                        <span className="text-blue-600">Reset to 160</span>
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
