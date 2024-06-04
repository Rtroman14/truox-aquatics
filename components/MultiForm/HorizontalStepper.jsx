"use client";

import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const steps = ["Distributor Input Data", "Print & Save"];

import ComponentToPrint from "../ComponentToPrint";

export default function HorizontalLinearStepper() {
    const componentRef = useRef();

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

    const [maxClFeedRate, setMaxClFeedRate] = useState("");
    const [poolVol, setPoolVol] = useState("");
    const [cryptolyteFeedRate, setCryptolyteFeedRate] = useState(0);
    const [minBoosterPump, setMinBoosterPump] = useState(0);
    const [pd1, setPd1] = useState(0);
    const [pd2, setPd2] = useState(0);
    const [poolDynamic, setPoolDynamic] = useState(0);
    const [tbpSpan, setTbpSpan] = useState(0);
    const [muriaticAcidFeetRate, setMuriaticAcidFeedRate] = useState(0);
    const [sodiumBisulfateAcidFeetRate, setSodiumBisulfateAcidFeedRate] = useState(0);

    const handleMaxClFeedRateChange = (event) => {
        setMaxClFeedRate(event.target.value);
    };

    const handlePoolVolChange = (event) => {
        setPoolVol(event.target.value);
    };

    useEffect(() => {
        const cryptoLyteFeedRateVal = maxClFeedRate * 0.75;
        setCryptolyteFeedRate(cryptoLyteFeedRateVal);
        setMinBoosterPump(cryptoLyteFeedRateVal + 10);

        const pd1Val = cryptoLyteFeedRateVal * 593.14;
        const pd2Val = poolVol * 3.785;
        setPd1(pd1Val);
        setPd2(pd2Val);
        setPoolDynamic(pd1Val / pd2Val);

        setTbpSpan((pd1Val / pd2Val) * 10);

        setMuriaticAcidFeedRate(cryptoLyteFeedRateVal * 0.65);
        setSodiumBisulfateAcidFeedRate(pd1Val * 0.86);
    }, [maxClFeedRate, poolVol]);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const performanceData = [
        {
            clO2: "0.02",
            startupRem: "√",
            dailyMaint: "√",
            continuous: "√",
            rapidIndoorOutdoor: "3hr/5hr",
            rapidEvening: "8hr",
        },
        {
            clO2: "0.03",
            startupRem: "√",
            dailyMaint: "√",
            continuous: "√",
            rapidIndoorOutdoor: "2.5hr/4.5hr",
            rapidEvening: "6hr",
        },
        {
            clO2: "0.05",
            startupRem: "√",
            dailyMaint: "√",
            continuous: "√",
            rapidIndoorOutdoor: "1.5hr/2.5hr",
            rapidEvening: "5hr",
        },
        {
            clO2: "0.10",
            startupRem: "√",
            dailyMaint: "√",
            continuous: "√",
            rapidIndoorOutdoor: "45min/1.5hr",
            rapidEvening: "4.5hr",
        },
        {
            clO2: "0.25",
            startupRem: "√",
            dailyMaint: "√",
            continuous: "√",
            rapidIndoorOutdoor: "35min/50min",
            rapidEvening: "3.5hr",
        },
        {
            clO2: "0.30",
            startupRem: "√",
            dailyMaint: "√",
            continuous: "√",
            rapidIndoorOutdoor: "<30min/45min",
            rapidEvening: "3.5hr",
        },
        {
            clO2: "0.40",
            startupRem: "√",
            dailyMaint: "√",
            continuous: "√",
            rapidIndoorOutdoor: "<35min",
            rapidEvening: "3hr",
        },
        {
            clO2: "0.50",
            startupRem: "√",
            dailyMaint: "√",
            continuous: "√",
            rapidIndoorOutdoor: "<30min",
            rapidEvening: "3hr",
        },
    ];

    return (
        <div className="w-full">
            <Stepper activeStep={activeStep} className="mb-24">
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <Box sx={{ flex: "1 1 auto" }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <>
                    <div className="flex flex-col justify-center items-center gap-32">
                        {activeStep === 0 ? (
                            <Card className="w-[400px]">
                                <CardHeader>
                                    <CardTitle>Distributor Input Data</CardTitle>
                                    <CardDescription>
                                        Cryptolyte Feed-rate based on MAXIMUM{" "}
                                        <span>
                                            Cl<sub>2</sub>
                                        </span>{" "}
                                        Output
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form>
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <Label
                                                    htmlFor="cl2-output"
                                                    className="flex gap-1 items-center"
                                                >
                                                    <span>Maximum Chlorine Feed Rate</span>
                                                    <Badge variant="secondary">
                                                        lbs/day as
                                                        <span className="ml-1">
                                                            Cl<sub>2</sub>
                                                        </span>
                                                    </Badge>
                                                </Label>
                                                <Input
                                                    id="cl2-output"
                                                    type="number"
                                                    value={maxClFeedRate}
                                                    onChange={handleMaxClFeedRateChange}
                                                    placeholder="7"
                                                />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label
                                                    htmlFor="booster-pump-flow-rate"
                                                    className="flex gap-1 items-center"
                                                >
                                                    <span>Pool Volume</span>
                                                    <Badge variant="secondary">Gal</Badge>
                                                </Label>
                                                <Input
                                                    id="booster-pump-flow-rate"
                                                    type="number"
                                                    value={poolVol}
                                                    onChange={handlePoolVolChange}
                                                    placeholder="10,000"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button
                                        size="sm"
                                        onClick={handleNext}
                                        disabled={!maxClFeedRate || !poolVol}
                                    >
                                        Submit
                                    </Button>
                                </CardFooter>
                            </Card>
                        ) : null}

                        {/* {activeStep === 1 ? (
                            <Card className="w-max">
                                <CardHeader>
                                    <CardTitle>Proprietary Calculations</CardTitle>
                                    <CardDescription>
                                        Feed-rate based on{" "}
                                        <span>
                                            Cl<sub>2</sub>
                                        </span>{" "}
                                        and Booster Pump Flow Rate
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <div className="space-y-2">
                                            <div>
                                                A.{" "}
                                                <strong className="underline underline-offset-2">
                                                    {maxClFeedRate}
                                                </strong>
                                                <span>
                                                    <Badge variant="secondary">
                                                        lbs/day as Cl<sub>2</sub>
                                                    </Badge>
                                                </span>
                                                x 0.75 = Cryptolyte® Feed Rate{" "}
                                                <strong className="underline underline-offset-2">
                                                    {cryptolyteFeedRate}
                                                </strong>
                                                <Badge variant="secondary">gal/day</Badge>
                                            </div>

                                            <div className="pl-5">
                                                <strong>Cryptolyte® Feed Rate</strong>{" "}
                                                {cryptolyteFeedRate} + 10 ={" "}
                                                <strong className="underline underline-offset-2">
                                                    {minBoosterPump.toFixed(0)}
                                                </strong>{" "}
                                                <Badge variant="secondary">
                                                    Min Booster Pump GPM
                                                </Badge>
                                            </div>

                                            <div className="pl-5">
                                                <strong>Cryptolyte® Feed Rate</strong>{" "}
                                                {cryptolyteFeedRate} x 593.14 ={" "}
                                                <strong className="underline underline-offset-2">
                                                    {pd1.toFixed(2)}
                                                </strong>{" "}
                                                <Badge variant="secondary">PD1</Badge>
                                            </div>
                                        </div>

                                        <Separator className="my-4" />

                                        <div className="space-y-2">
                                            <div>
                                                B.{" "}
                                                <strong className="underline underline-offset-2">
                                                    {poolVol}
                                                </strong>
                                                <span> Pool Volume</span>
                                                <span>
                                                    <Badge variant="secondary">Gal</Badge>
                                                </span>
                                                x 3.785 ={" "}
                                                <strong className="underline underline-offset-2">
                                                    {pd2.toFixed(2)}
                                                </strong>
                                                <Badge variant="secondary">PD2</Badge>
                                            </div>

                                            <div className="pl-5">
                                                PD1 ÷ PD2 ={" "}
                                                <strong className="underline underline-offset-2">
                                                    {poolDynamic.toFixed(6)}
                                                </strong>{" "}
                                                <Badge variant="secondary">
                                                    Cl0 <sub className="mr-1">2</sub> ppm/min
                                                </Badge>
                                            </div>

                                            <div className="pl-5">
                                                <strong>
                                                    Pool Dynamic{" "}
                                                    <span className="underline underline-offset-2">
                                                        {poolDynamic.toFixed(6)}
                                                    </span>
                                                </strong>{" "}
                                                <Badge variant="secondary">
                                                    Cl0 <sub className="mr-1">2</sub> ppm/min
                                                </Badge>{" "}
                                                = TBP SPAN{" "}
                                                <strong className="underline underline-offset-2">
                                                    {tbpSpan.toFixed(2)}{" "}
                                                </strong>
                                                <span className="text-xs">(4.99 Max Value)</span>
                                            </div>

                                            <div className="pl-5">
                                                <strong>
                                                    Cryptolyte® Feed Rate{" "}
                                                    <span className="underline underline-offset-2">
                                                        {cryptolyteFeedRate.toFixed(2)}
                                                    </span>
                                                </strong>
                                                <Badge variant="secondary">gal/day</Badge> x 0.65 =
                                                Muriatic Acid Feed Rate{" "}
                                                <strong className="underline underline-offset-2">
                                                    {muriaticAcidFeetRate.toFixed(2)}{" "}
                                                </strong>
                                                <Badge variant="secondary">GPM</Badge>
                                            </div>

                                            <div className="pl-5">
                                                <strong>
                                                    Cryptolyte® Feed Rate{" "}
                                                    <span className="underline underline-offset-2">
                                                        {cryptolyteFeedRate.toFixed(2)}
                                                    </span>
                                                </strong>
                                                <Badge variant="secondary">gal/day</Badge> x 0.86 =
                                                Sodium Bisulfate Acid Feed Rate{" "}
                                                <strong className="underline underline-offset-2">
                                                    {sodiumBisulfateAcidFeetRate.toFixed(2)}
                                                </strong>{" "}
                                                <Badge variant="secondary">lbs/day</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button size="sm" onClick={handleBack} variant="secondary">
                                        Back
                                    </Button>
                                    <Button size="sm" onClick={handleNext}>
                                        Next
                                    </Button>
                                </CardFooter>
                            </Card>
                        ) : null} */}

                        {activeStep === 1 ? (
                            <Card className="w-max">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        Feeder System Sizing
                                    </h3>

                                    <div className="space-y-2">
                                        <div>
                                            Maximum Chlorine Feed Rate ={" "}
                                            <strong className="underline underline-offset-2">
                                                {maxClFeedRate}
                                            </strong>{" "}
                                            lbs/day as Cl<sub>2</sub>
                                        </div>

                                        <div>
                                            Pool Volume ={" "}
                                            <strong className="underline underline-offset-2">
                                                {poolVol}
                                            </strong>{" "}
                                            Gal
                                        </div>

                                        <div>
                                            Cryptolyte® Feed Rate ={" "}
                                            <strong className="underline underline-offset-2">
                                                {cryptolyteFeedRate}
                                            </strong>{" "}
                                            gal/day
                                        </div>

                                        <div>
                                            Minimum Booster Pump ={" "}
                                            <strong className="underline underline-offset-2">
                                                {minBoosterPump}
                                            </strong>{" "}
                                            GPM
                                        </div>

                                        <div>
                                            <div>
                                                Muriatic Acid Feed Rate ={" "}
                                                <strong className="underline underline-offset-2">
                                                    {muriaticAcidFeetRate.toFixed(2)}
                                                </strong>{" "}
                                                GPM
                                            </div>

                                            <div className="relative py-2">
                                                <div className="absolute inset-0 flex items-center">
                                                    <span className="w-full border-t"></span>
                                                </div>
                                                <div className="relative flex justify-center text-xs uppercase">
                                                    <span className="bg-white px-2 text-muted-foreground">
                                                        Or
                                                    </span>
                                                </div>
                                            </div>

                                            <div>
                                                Sodium Bisulfate Acid Feed Rate ={" "}
                                                <strong className="underline underline-offset-2">
                                                    {sodiumBisulfateAcidFeetRate.toFixed(2)}
                                                </strong>{" "}
                                                lbs/day
                                            </div>
                                        </div>
                                    </div>

                                    <Separator className="my-6" />

                                    <h3 className="text-xl font-semibold mb-3">
                                        Performance & Controller Configuration
                                    </h3>

                                    <div className="space-y-2">
                                        <div>
                                            Pool Dynamic ={" "}
                                            <strong className="underline underline-offset-2">
                                                {poolDynamic.toFixed(2)}
                                            </strong>{" "}
                                            ClO<sub>2</sub> ppm/min
                                        </div>

                                        <div>
                                            TBP SPAN ={" "}
                                            <strong className="underline underline-offset-2">
                                                {tbpSpan.toFixed(2)}
                                            </strong>{" "}
                                            <span className="text-xs">(4.99 Max Value)</span>
                                        </div>
                                    </div>

                                    <div className="hidden">
                                        <ComponentToPrint ref={componentRef}>
                                            <div className="h-screen">
                                                <h3 className="text-2xl font-semibold mb-12 text-center">
                                                    pH Configuration
                                                </h3>

                                                <div className="space-y-3">
                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>pH Control Type</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    On/Off or{" "}
                                                                    <span className="text-blue-500">
                                                                        Time Base Proportional
                                                                    </span>{" "}
                                                                    control
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Set Point</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Default value{" "}
                                                                    <span className="text-blue-500">
                                                                        7.5pH
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>TBP Span</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Default value -0.2{" "}
                                                                    <span className="text-blue-500">
                                                                        Set to {tbpSpan.toFixed(2)}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>TBP Time Base</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Total cycle time for
                                                                    proportional control.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        1 Min
                                                                    </span>{" "}
                                                                    <span className="text-[#1FB55C]">
                                                                        Ensures always in Time Base
                                                                        Control when Controlling
                                                                        Cryptolyte
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Min On Time</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        3s
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Failsafe Timer</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        60min
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <div className="!mt-12">
                                                        <h4 className="text-lg font-semibold mb-2">
                                                            pH TBP Span Optimization
                                                        </h4>

                                                        <div className="space-y-3">
                                                            <p>
                                                                If you dilute your acid, determine
                                                                your TBP Span by multiplying 0.2 by
                                                                your WATER dilution factor.
                                                            </p>
                                                            <p>
                                                                Example: you currently dilute your
                                                                Muriatic Acid (HCl) by 9:1 Water to
                                                                Acid respectfully. Then your new TBP
                                                                Span will be 0.2 x 9 = 1.8
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="h-screen">
                                                <h3 className="text-2xl font-semibold mb-12 text-center">
                                                    Chlorine Confirguration
                                                </h3>

                                                <div className="space-y-3">
                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Sanitizer Chemical</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Bromine or{" "}
                                                                    <span className="text-blue-500">
                                                                        Chlorine
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Control Input</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    ORP or{" "}
                                                                    <span className="text-blue-500">
                                                                        Free Chlorine
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Free Cl Control Type</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    On/Off or{" "}
                                                                    <span className="text-blue-500">
                                                                        Time Base Proportional
                                                                    </span>{" "}
                                                                    control
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Free Cl TBP Span</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        0.2
                                                                    </span>{" "}
                                                                    <span className="text-[#1FB55C]">
                                                                        Adjust higher (0.1
                                                                        increments) is Chlorine
                                                                        consistently overfeeds
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Free Cl Set Point</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        1.2ppm
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>TBP Time Base</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Total cycle time for
                                                                    proportional control
                                                                </li>
                                                                <li>
                                                                    Defaul value -
                                                                    <span className="text-blue-500">
                                                                        1 Min
                                                                    </span>{" "}
                                                                    <span className="text-[#1FB55C]">
                                                                        Ensures always in Time Base
                                                                        Control when Controlling
                                                                        Cryptolyte
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Min On Time</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        10s
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Failsafe Timer</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        1hr
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="h-screen">
                                                <h3 className="text-2xl font-semibold mb-12 text-center">
                                                    Maintenance Mode Configuration
                                                </h3>

                                                <div className="space-y-3">
                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Mode</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Maintenance or{" "}
                                                                    <span className="text-blue-500">
                                                                        Continuous
                                                                    </span>{" "}
                                                                    mode.
                                                                </li>
                                                                <li>
                                                                    Determines whether the system
                                                                    will run an evening maintenance
                                                                    cycle or continuously maintain a
                                                                    ClO<sub>2</sub> level.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Maint Start Time</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Time of day to trigger a
                                                                    maintenance cycle.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        10PM
                                                                    </span>{" "}
                                                                    <span className="text-[#1FB55C]">
                                                                        Adjust if needed to ensure
                                                                        pool is closed
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Maint Duration</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Initial feed duration in
                                                                    maintenance cycle before
                                                                    switching to TBP control.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        0s
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Maint Set Point</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    ClO<sub>2</sub> setpoint that
                                                                    Cryptolyte will control to in
                                                                    maintenance cycle.
                                                                </li>
                                                                <li>
                                                                    This value can be disabled to
                                                                    indicate no feeding to setpoint
                                                                    should be done.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        0.5ppm
                                                                    </span>{" "}
                                                                    <span className="text-[#1FB55C]">
                                                                        Adjust if needed to complete
                                                                        remediation before pool
                                                                        early opening
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Maint Timeout</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Maximum time allowed to complete
                                                                    remediation before triggering
                                                                    alarm in maintenance cycle.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        8 hr
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Maint CT Set Pnt</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    CT setpoint for tracking when a
                                                                    remediation has been
                                                                    successfully completed in
                                                                    maintenance cycle.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        160CT
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Maint TBP Span</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Offset from Maint Setpoint for
                                                                    which proportional control will
                                                                    be engaged. If outside this
                                                                    span, then the feed will be
                                                                    fully on.
                                                                </li>
                                                                <li>
                                                                    Default value –{" "}
                                                                    <span className="text-blue-500">
                                                                        {tbpSpan.toFixed(2)}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="h-screen">
                                                <h3 className="text-2xl font-semibold mb-12 text-center">
                                                    Continuous Mode Configuration
                                                </h3>

                                                <div className="space-y-3">
                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Mode</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Maintenance or{" "}
                                                                    <span className="text-blue-500">
                                                                        Continuous mode
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    Determines whether the system
                                                                    will run an evening maintenance
                                                                    cycle or continuously maintain a
                                                                    ClO<sub>2</sub> level.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Cont Set Point</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    ClO<sub>2</sub> setpoint that
                                                                    Cryptolyte will control to in
                                                                    continuous mode
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        0.3ppm
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Cont CT Set Pnt</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    CT setpoint for tracking when a
                                                                    remediation has been
                                                                    successfully completed in
                                                                    continuous mode
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        160 CT
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Accel Start Time</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Start time for which accelerated
                                                                    in-situ generation will be
                                                                    performed in continuous mode.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        12AM
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Accel End Time</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    End time for which accelerated
                                                                    in-situ generation will be
                                                                    performed in continuous mode.
                                                                </li>
                                                                <li>
                                                                    If start & end time are equal,
                                                                    then this logic will be
                                                                    disabled.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        12AM
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>

                                                    <ul className="list-disc">
                                                        <li>
                                                            <span>Accel TBP Span</span>
                                                            <ul className="list-disc pl-8">
                                                                <li>
                                                                    Offset from Maint Setpoint for
                                                                    which proportional control will
                                                                    be engaged. If outside this
                                                                    span, then the feed will be
                                                                    fully on.
                                                                </li>
                                                                <li>
                                                                    Default value -{" "}
                                                                    <span className="text-blue-500">
                                                                        {tbpSpan.toFixed(2)}
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </ComponentToPrint>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button size="sm" onClick={handleBack} variant="secondary">
                                        Back
                                    </Button>

                                    {activeStep === 1 ? (
                                        <Button size="sm" onClick={handlePrint}>
                                            Print
                                        </Button>
                                    ) : (
                                        <Button size="sm" onClick={handleNext}>
                                            Next
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        ) : null}

                        {activeStep === 1 ? (
                            <Card>
                                <Table>
                                    <TableCaption>Performance Expectations</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="text-center">
                                                Pool Dynamic
                                            </TableHead>
                                            <TableHead className="text-center">Startup</TableHead>
                                            <TableHead className="text-center">Daily</TableHead>
                                            <TableHead className="text-center">
                                                Continuous
                                            </TableHead>
                                            <TableHead className="text-center">
                                                Rapid Recovery
                                            </TableHead>
                                            <TableHead className="text-center">Startup</TableHead>
                                        </TableRow>
                                        <TableRow>
                                            <TableHead className="text-center">
                                                CIO₂ (ppm/min)
                                            </TableHead>
                                            <TableHead className="text-center">
                                                Remediation
                                            </TableHead>
                                            <TableHead className="text-center">
                                                Maintenance
                                            </TableHead>
                                            <TableHead className="text-center">24/7</TableHead>
                                            <TableHead className="text-center">
                                                Shock (INDOOR/OUTDOOR)
                                            </TableHead>
                                            <TableHead className="text-center">
                                                Remediation (EVENING)
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {performanceData.map((data) => (
                                            <TableRow key={data.clO2}>
                                                <TableCell className="text-center">
                                                    {data.clO2}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {data.startupRem}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {data.dailyMaint}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {data.continuous}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {data.rapidIndoorOutdoor}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {data.rapidEvening}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        ) : null}
                    </div>
                </>
            )}
        </div>
    );
}
