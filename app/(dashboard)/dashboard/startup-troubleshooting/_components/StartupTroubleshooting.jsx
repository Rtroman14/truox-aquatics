import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function StartupTroubleshooting() {
    return (
        <div className="w-full">
            <Card className="min-w-[400px]">
                <CardHeader>
                    <CardTitle>Startup Optimization & Troubleshooting</CardTitle>

                    <CardDescription>
                        Low Chlorine Dioxide concentration during Remediation Cycle
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-12">
                    <ul className="grid grid-cols-1 gap-3">
                        <li className="flex items-start space-x-2">
                            <Checkbox id="confirm-operations" />
                            <Label className="leading-5" htmlFor="confirm-operations">
                                Confirm chlorine, acid and Cryptolyte feeders are operating
                            </Label>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="obtain-sample" />
                            <Label className="leading-5" htmlFor="obtain-sample">
                                Obtain a sample of water off the pH Sample tap
                            </Label>
                        </li>
                        <li>
                            <ul className="grid grid-cols-1 gap-3 ml-8">
                                <li className="flex items-start space-x-2">
                                    <Checkbox id="test-ph" />
                                    <Label className="leading-5" htmlFor="test-ph">
                                        Test pH using digital pH meter, confirm pH 3-4
                                    </Label>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Checkbox id="adjust-acid-feed" />
                                    <Label className="leading-5" htmlFor="adjust-acid-feed">
                                        Adjust acid feed as needed to achieve target pH 3-4
                                    </Label>
                                </li>
                            </ul>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="add-chlorine" />
                            <Label className="leading-5" htmlFor="add-chlorine">
                                If pH is correct, add some chlorine to the sample and see if the
                                sample begins to turn yellow.
                            </Label>
                        </li>
                        <li className="ml-8">
                            Yes Yellow – chlorine feeder needs cleaning, filling, repair
                        </li>
                        <li className="ml-8">No Yellow – Check Cryptolyte feed & feed-rate</li>
                    </ul>

                    <div>
                        <div className="grid place-items-center">
                            <h3 className="text-xl font-semibold">Pulsar Installation</h3>
                            <picture>
                                <Image
                                    src="/images/pulsar-installation.png"
                                    alt="pulsar-installation"
                                    width={900}
                                    height={900}
                                />
                            </picture>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
