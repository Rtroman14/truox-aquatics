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

export default function PreProposalInspectionPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const TotalRelays = ({ title }) => (
        <Card className="min-w-[400px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <p>Order if needed:</p>
                    <p>MRX – 5 Mechanical Relays</p>
                    <p>SRX – 5 Solid State Relays</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl text-center font-semibold">
                            Basic Installation Diagrams
                        </h3>
                    </div>
                    <div className="space-y-6">
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
                        <div>
                            <div className="grid place-items-center">
                                <h3 className="text-xl font-semibold">
                                    Chlorine (Alternative) Installation
                                </h3>
                                <picture>
                                    <Image
                                        src="/images/chlorine-alternative-installation.png"
                                        alt="chlorine-installation"
                                        width={900}
                                        height={900}
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter>
                <div className="flex justify-between w-full">
                    <Button size="sm" variant="secondary" onClick={handleBack}>
                        Back
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );

    const WaterFlowSystem = ({ title }) => (
        <Card className="min-w-[400px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
                <p>
                    Adjust autofill to ensure proper pool-water levels maintain consistent water
                    flow into the Gutter/Skimmer.
                </p>
                <p>
                    If necessary, install a level controller with autofill (requires additional
                    Relay).
                </p>
                <p>
                    <strong>NOTE:</strong> The treatment will not treat contaminants (Biofilms) if
                    it does not contact them as a result of poor water flow.
                </p>
            </CardContent>
            <CardFooter>
                <div className="flex justify-end w-full">
                    <Button size="sm" onClick={handleNext}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );

    const NumberOfRelays = ({ title, existingList, additionalList }) => (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                <div>
                    <h3 className="text-xl font-semibold mb-3">
                        <span className="underline">EXISTING</span> Number of Relays
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-3">
                                {existingList.slice(0, 8).map((el) => (
                                    <div
                                        key={el.toLowerCase().split(" ").join("-")}
                                        className="flex items-center space-x-2"
                                    >
                                        <Checkbox id={el.toLowerCase().split(" ").join("-")} />
                                        <Label htmlFor={el.toLowerCase().split(" ").join("-")}>
                                            {el}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-3">
                                {existingList.slice(8).map((el) => (
                                    <div
                                        key={el.toLowerCase().split(" ").join("-")}
                                        className="flex items-center space-x-2"
                                    >
                                        <Checkbox id={el.toLowerCase().split(" ").join("-")} />
                                        <Label htmlFor={el.toLowerCase().split(" ").join("-")}>
                                            {el}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Separator />

                <div>
                    <h3 className="text-xl font-semibold mb-3">
                        Determine <span className="underline">ADDITIONAL</span> Number of Relays
                    </h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-3">
                            {additionalList.slice(0, 8).map((el) => (
                                <div
                                    key={el.toLowerCase().split(" ").join("-")}
                                    className="flex items-center space-x-2"
                                >
                                    <Checkbox id={el.toLowerCase().split(" ").join("-")} />
                                    <Label htmlFor={el.toLowerCase().split(" ").join("-")}>
                                        {el}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex justify-between w-full">
                    {activeStep !== 0 ? (
                        <Button size="sm" variant="secondary" onClick={handleBack}>
                            Back
                        </Button>
                    ) : null}
                    <Button size="sm" onClick={handleNext}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );

    const Checklist = ({ title, list }) => (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-3">
                    {list.map((el) => (
                        <div key={el} className="flex items-center space-x-2">
                            <Checkbox id={el.toLowerCase().split(" ").join("-")} />
                            <Label htmlFor={el.toLowerCase().split(" ").join("-")}>{el}</Label>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex justify-between w-full">
                    {activeStep !== 0 ? (
                        <Button size="sm" variant="secondary" onClick={handleBack}>
                            Back
                        </Button>
                    ) : null}
                    <Button size="sm" onClick={handleNext}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );

    const basicInstallationRequirementsList = [
        'Booster Pump (1.5" or Larger PVC Pipe) (i.e. Pulsar® Type System)',
        "Static Mixer or Venturi",
        "Chlorine Feed System",
        "Acid Feed System",
        "Cryptolyte Feed System",
        "Neutralizer Feed System (Optional)",
        "pH Sample tap/valve",
        "FREE CHLORINE SENSOR RECOMMENDED",
    ];

    const existingNumberOfRelaysList = [
        "Chlorine Booster Control",
        "Chlorine Control",
        "pH Control",
        "Cryptolyte Feed",
        "Shock Feed",
        "De-Chlorination Feed (Neutralizer)",
        "Sensor Wash",
        "Polymer Feed",
        "Enzyme Feed",
        "Recirculation Pump (VFD Control)",
        "Autofill",
        "Alkalinity Control",
        "Ozone Control",
        "Heater",
        "Chiller",
        "UV Turndown",
    ];

    const additionalNumberOfRelaysList = [
        "Chlorine Booster Control",
        "Cryptolyte Feed",
        "Neutralizer/De-Chlorination Feed",
        "Autofill",
    ];

    const steps = [
        {
            title: "Ensure proper water flow into Gutter/Skimmer system",
            component: (
                <WaterFlowSystem
                    title="Ensure proper water flow into Gutter/Skimmer system"
                    step={0}
                />
            ),
        },
        {
            title: "Basic Installation Requirements",
            component: (
                <Checklist
                    title="Basic Installation Requirements"
                    step={1}
                    list={basicInstallationRequirementsList}
                />
            ),
        },
        {
            title: "Number of Relays",
            component: (
                <NumberOfRelays
                    title="Number of Relays"
                    step={2}
                    existingList={existingNumberOfRelaysList}
                    additionalList={additionalNumberOfRelaysList}
                />
            ),
        },
        {
            title: "Total Relays = Existing + Additional",
            component: <TotalRelays title="Total Relays = Existing + Additional" step={4} />,
        },
    ];

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6 mb-24">
                <Stepper activeStep={activeStep}>
                    {steps.map((step, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={step.title} {...stepProps}>
                                <StepLabel {...labelProps}>Step {index + 1}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>

                {/* <div className={`flex ${activeStep === 0 ? "justify-end" : "justify-between"}`}>
                    {activeStep !== 0 ? (
                        <Button size="sm" variant="secondary" onClick={handleBack}>
                            Back
                        </Button>
                    ) : null}
                    <Button
                        size="sm"
                        onClick={handleNext}
                        disabled={activeStep === steps.length - 1}
                    >
                        Next
                    </Button>
                </div> */}
            </div>

            {/* {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : ( */}
            <>
                <div className="flex flex-col justify-center items-center gap-32">
                    {steps.map((step, index) =>
                        activeStep === index ? <div key={index}>{step.component}</div> : null
                    )}
                </div>
            </>
            {/* )} */}
        </div>
    );
}
