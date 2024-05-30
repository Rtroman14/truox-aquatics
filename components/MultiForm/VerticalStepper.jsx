"use client";

import { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
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

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

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

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical" className="mb-24">
                <Step>
                    <StepLabel optional={null}>Distributor Input Data</StepLabel>
                    <StepContent>
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
                                        {/* <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="framework">Framework</Label>
                                            <Select>
                                                <SelectTrigger id="framework">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent position="popper">
                                                    <SelectItem value="next">Next.js</SelectItem>
                                                    <SelectItem value="sveltekit">
                                                        SvelteKit
                                                    </SelectItem>
                                                    <SelectItem value="astro">Astro</SelectItem>
                                                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div> */}
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button
                                    size="sm"
                                    onClick={handleNext}
                                    disabled={!maxClFeedRate || !poolVol}
                                >
                                    Next
                                </Button>
                            </CardFooter>
                        </Card>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel optional={null}>Proprietary Calculations</StepLabel>
                    <StepContent>
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
                                            <Badge variant="secondary">Min Booster Pump GPM</Badge>
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
                    </StepContent>
                </Step>

                <Step>
                    <StepLabel optional={null}>Print & Save</StepLabel>
                    <StepContent>
                        <Card className="w-max">
                            <CardHeader>
                                <CardTitle>Print & Save</CardTitle>
                                <CardDescription>
                                    Print this report and save it to the database
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h3 className="text-lg font-semibold mb-3">Feeder System Sizing</h3>

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
                                        Muriatic Acid Feed Rate ={" "}
                                        <strong className="underline underline-offset-2">
                                            {muriaticAcidFeetRate.toFixed(2)}
                                        </strong>{" "}
                                        GPM
                                    </div>

                                    <div>
                                        Sodium Bisulfate Acid Feed Rate ={" "}
                                        <strong className="underline underline-offset-2">
                                            {sodiumBisulfateAcidFeetRate.toFixed(2)}
                                        </strong>{" "}
                                        GPM
                                    </div>
                                </div>

                                <Separator className="my-4" />

                                <h3 className="text-lg font-semibold mb-3">
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
                    </StepContent>
                </Step>
            </Stepper>
            {activeStep === 3 && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button size="sm" variant="secondary" onClick={handleBack}>
                        Back
                    </Button>
                    <Button onClick={handleReset} size="sm">
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}
