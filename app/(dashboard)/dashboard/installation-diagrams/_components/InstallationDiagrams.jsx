"use client";

import { useState } from "react";
import Image from "next/image";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function InstallationDiagrams() {
    return (
        <div className="w-full space-y-12">
            <div className="grid place-items-center p-5 shadow-lg rounded-xl bg-white gap-8">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Pulsar Installations</h3>
                    <picture>
                        <Image
                            src="/images/pulsar-installation.png"
                            alt="pulsar-installation"
                            width={900}
                            height={900}
                        />
                    </picture>
                </div>

                <div className="grid grid-cols-1 gap-3 mb-6">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="pulsar-1" />
                        <Label htmlFor="pulsar-1">
                            Cryptolyte & Acid injection points are AFTER the Pulsar Venturi
                            providing turbulent flow and mixing.
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="pulsar-2" />
                        <Label htmlFor="pulsar-2">
                            The pH sample tap is located down-stream on the injection points
                            preferably 3+ feet.
                        </Label>
                    </div>
                </div>
            </div>

            <div className="grid place-items-center p-5 shadow-lg rounded-xl bg-white gap-8">
                <div>
                    <h3 className="text-2xl font-semibold text-center">
                        Chlorine (Alternative) Installations
                    </h3>
                    <picture>
                        <Image
                            src="/images/chlorine-alternative-installation-installation.png"
                            alt="Chlorine Installation diagram"
                            width={900}
                            height={900}
                        />
                    </picture>
                </div>

                <div className="grid grid-cols-1 gap-3 mb-6">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="chlorine-1" />
                        <Label htmlFor="chlorine-1">
                            Cryptolyte & Acid injection points are BEFORE the Static Mixer providing
                            turbulent flow and mixing.
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="chlorine-2" />
                        <Label htmlFor="chlorine-2">
                            The pH sample tap is located down-stream on the injection points
                            preferably 3+ feet.
                        </Label>
                    </div>
                </div>
            </div>

            <div className="grid place-items-center p-5 shadow-lg rounded-xl bg-white gap-8">
                <div>
                    <h3 className="text-2xl font-semibold text-center mb-6">
                        Installation and Technical Manual
                    </h3>
                    <picture>
                        <Image
                            src="/images/installation-and-technical-manual.png"
                            alt="pulsar-installation"
                            width={600}
                            height={600}
                        />
                    </picture>
                </div>
            </div>

            <div className="grid place-items-center p-5 shadow-lg rounded-xl bg-white gap-8">
                <div>
                    <h3 className="text-2xl font-semibold text-center mb-6">
                        Installation and Technical Manual
                    </h3>
                    <picture>
                        <Image
                            src="/images/installation-and-technical-manual-2.png"
                            alt="pulsar-installation"
                            width={600}
                            height={600}
                        />
                    </picture>
                </div>
            </div>
        </div>
    );
}
