"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function PreInstallationCheckList() {
    return (
        <div className="w-full">
            <Card className="min-w-[400px]">
                <CardHeader>
                    <CardTitle>Pre-Installation Check List</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-1 gap-3">
                        <li className="flex items-start space-x-2">
                            <Checkbox id="pH Meter" />
                            <Label className="leading-5" htmlFor="pH Meter">
                                <strong>pH Meter – Digital with Standards</strong>
                            </Label>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Palin Kemio Disinfectant Test Kit (or Truox approved ClO2 test kit)" />
                            <Label
                                className="leading-5"
                                htmlFor="Palin Kemio Disinfectant Test Kit (or Truox approved ClO2 test kit)"
                            >
                                <strong>
                                    Palin Kemio Disinfectant Test Kit (or Truox approved ClO2 test
                                    kit)/Chlorine Dioxide sensors/Standards Kit
                                </strong>
                            </Label>
                        </li>
                        <li>
                            <ul className="grid grid-cols-1 gap-3 ml-8">
                                <li className="flex items-start space-x-2">
                                    <Checkbox id="Kemio Disinfectant Test Kit" />
                                    <Label
                                        className="leading-5"
                                        htmlFor="Kemio Disinfectant Test Kit"
                                    >
                                        Kemio Disinfectant Test Kit: Part Number KEMS10DIS
                                    </Label>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Checkbox id="Sensor Starter Kit" />
                                    <Label className="leading-5" htmlFor="Sensor Starter Kit">
                                        Sensor Starter Kit w/ Glycine: Part Number KEM20CDX
                                    </Label>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Checkbox id="Kemio Check Standards" />
                                    <Label className="leading-5" htmlFor="Kemio Check Standards">
                                        Kemio Check Standards: Part Number KEMC10
                                    </Label>
                                </li>
                            </ul>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Cryptolyte Upgrade kit" />
                            <Label className="leading-5" htmlFor="Cryptolyte Upgrade kit">
                                <strong>Cryptolyte Upgrade kit</strong>
                            </Label>
                        </li>
                        <li>
                            <ul className="grid grid-cols-1 gap-3 ml-8">
                                <li className="flex items-start space-x-2">
                                    <Checkbox id="or NEW Cryptolyte Controller" />
                                    <Label
                                        className="leading-5"
                                        htmlFor="or NEW Cryptolyte Controller"
                                    >
                                        or NEW Cryptolyte Controller
                                    </Label>
                                </li>
                            </ul>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="FREE CHLORINE SENSOR RECOMMENDED" />
                            <Label className="leading-5" htmlFor="FREE CHLORINE SENSOR RECOMMENDED">
                                <strong>FREE CHLORINE SENSOR RECOMMENDED</strong>
                            </Label>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Check available number of Relays" />
                            <Label className="leading-5" htmlFor="Check available number of Relays">
                                <strong>Check available number of Relays</strong>
                            </Label>
                        </li>
                        <li>
                            <ul className="grid grid-cols-1 gap-3 ml-8">
                                <li className="flex items-start space-x-2">
                                    <Checkbox id="MRX or SRX" />
                                    <Label className="leading-5" htmlFor="MRX or SRX">
                                        Use either MRX or SRX if more relays required
                                    </Label>
                                </li>
                            </ul>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Contact BECS" />
                            <Label className="leading-5" htmlFor="Contact BECS">
                                <strong>
                                    Contact BECS to dial-in and Enable Cryptolyte® on the Controller
                                </strong>
                            </Label>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Ensure proper water flow" />
                            <Label className="leading-5" htmlFor="Ensure proper water flow">
                                <strong>Ensure proper water flow into Gutter/Skimmer system</strong>
                            </Label>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Adjust autofill" />
                            <Label className="leading-5" htmlFor="Adjust autofill">
                                <strong>Adjust autofill</strong> to ensure proper pool-water levels
                                maintain consistent water flow into the Gutter/Skimmer.{" "}
                                <strong>NOTE:</strong> The treatment CANNOT treat contaminants
                                (Biofilms) it does not contact as a result of poor water flow.
                            </Label>
                        </li>
                        <ul className="grid grid-cols-1 gap-3 ml-8">
                            <li className="flex items-start space-x-2">
                                <Checkbox id="If necessary manually fill the pool" />
                                <Label
                                    className="leading-5"
                                    htmlFor="If necessary manually fill the pool"
                                >
                                    <strong>If necessary manually fill</strong> the pool to obtain
                                    proper flow before performing Startup.
                                </Label>
                            </li>
                        </ul>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Clean Pulsar" />
                            <Label className="leading-5" htmlFor="Clean Pulsar">
                                <strong>Clean Pulsar (Cal-Hypo) unit</strong> to remove{" "}
                                <strong>ALL</strong> accumulation of calcium carbonate sludge,
                                including from the TOP of the grid on which the Briquettes lay. The
                                Pulsar system <strong>MUST</strong> operate at its FULL OUTPUT
                                Capacity during the Startup Remediation.
                            </Label>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Acid Setup" />
                            <Label className="leading-5" htmlFor="Acid Setup">
                                <strong>Acid Setup</strong> – You will use 31% Muriatic Acid
                                (UNDILUTED) or Sodium Bisulfate. Consult Truox for CO2 pH Control
                                Systems. Follow CONFIGURATION recommendations for proper setup.
                                Startup feed-rate should be ~65% of the Cryptolyte® Feed-rate using
                                muriatic acid (if Cryptolyte feed-rate is 85gpd, start with 55gpd
                                Acid), then adjust as needed by sampling off the sample point post
                                injection point to achieve pH 3.0-4.0.
                            </Label>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Neutralization installation & setup" />
                            <Label
                                className="leading-5"
                                htmlFor="Neutralization installation & setup"
                            >
                                <strong>
                                    Neutralization installation & setup (venturi for rapid recovery)
                                </strong>
                            </Label>
                        </li>
                        <li className="flex items-start space-x-2">
                            <Checkbox id="Testing Procedures" />
                            <Label className="leading-5" htmlFor="Testing Procedures">
                                <strong>
                                    Testing Procedures (Download) – Purchase Test Kits and Supplies
                                </strong>
                            </Label>
                        </li>
                        <ul className="grid grid-cols-1 gap-3 ml-8">
                            <li className="flex items-start space-x-2">
                                <Checkbox id="Testing Breathe EZ Activator" />
                                <Label className="leading-5" htmlFor="Testing Breathe EZ Activator">
                                    Testing Breathe EZ Activator (INDOOR Pools)
                                </Label>
                            </li>
                            <li className="flex items-start space-x-2">
                                <Checkbox id="Testing for Residual Cryptolyte" />
                                <Label
                                    className="leading-5"
                                    htmlFor="Testing for Residual Cryptolyte"
                                >
                                    Testing for Residual Cryptolyte
                                </Label>
                            </li>
                        </ul>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
