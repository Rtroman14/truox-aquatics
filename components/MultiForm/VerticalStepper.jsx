"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [cl2Output, setCl2Output] = useState("");
    const [boosterPumpFlowRate, setBoosterPumpFlowRate] = useState("");

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleCl2OutputChange = (event) => {
        setCl2Output(event.target.value);
    };

    const handleBoosterPumpFlowRateChange = (event) => {
        setBoosterPumpFlowRate(event.target.value);
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step>
                    <StepLabel optional={null}>Cryptolyte Feed Rate</StepLabel>
                    <StepContent>
                        <Card className="w-[400px]">
                            <CardHeader>
                                <CardTitle>Cryptolyte Feed-rate</CardTitle>
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
                                                <span>
                                                    Maximum{" "}
                                                    <span>
                                                        Cl<sub>2</sub>
                                                    </span>{" "}
                                                    Output
                                                </span>
                                                <Badge variant="secondary">lbs/day</Badge>
                                            </Label>
                                            <Input
                                                id="cl2-output"
                                                type="number"
                                                value={cl2Output}
                                                onChange={handleCl2OutputChange}
                                                placeholder="1,200"
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label
                                                htmlFor="booster-pump-flow-rate"
                                                className="flex gap-1 items-center"
                                            >
                                                <span>Booster Pump Flow Rate</span>
                                                <Badge variant="secondary">GPM</Badge>
                                            </Label>
                                            <Input
                                                id="booster-pump-flow-rate"
                                                type="number"
                                                value={boosterPumpFlowRate}
                                                onChange={handleBoosterPumpFlowRateChange}
                                                placeholder="15"
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
                                    disabled={!cl2Output || !boosterPumpFlowRate}
                                >
                                    Next
                                </Button>
                            </CardFooter>
                        </Card>
                    </StepContent>
                </Step>
                <Step>
                    <StepLabel optional={null}>Maximum Cryptolyte Feed-rate</StepLabel>
                    <StepContent>
                        <Card className="w-[400px]">
                            <CardHeader>
                                <CardTitle>Maximum Cryptolyte Feed-rate</CardTitle>
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
                                    <h3 className="mb-2 font-semibold">
                                        Feed-rate based on maximum{" "}
                                        <span>
                                            Cl<sub>2</sub>
                                        </span>{" "}
                                        Output
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <span>Cryptolyte</span>
                                        <span>
                                            <Badge variant="secondary">gal/day</Badge>
                                        </span>
                                        = {0.75 * cl2Output}
                                        <Badge variant="secondary">lbs/day</Badge>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>Cryptolyte</span>
                                        <span>
                                            <Badge variant="secondary">ml/min</Badge>
                                        </span>
                                        = {2 * cl2Output}
                                        <Badge variant="secondary">lbs/day</Badge>
                                    </div>

                                    <Separator className="my-4" />

                                    <h3 className="mb-2 font-semibold">
                                        Feed-rate based on booster pump flow rate
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <span>Cryptolyte</span>
                                        <span>
                                            <Badge variant="secondary">gal/day</Badge>
                                        </span>
                                        = {19 * boosterPumpFlowRate}
                                        <Badge variant="secondary">lbs/day</Badge>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>Cryptolyte</span>
                                        <span>
                                            <Badge variant="secondary">GPM</Badge>
                                        </span>
                                        = {50 * boosterPumpFlowRate}
                                        <Badge variant="secondary">GPM</Badge>
                                    </div>

                                    <Separator className="my-4" />

                                    <h3 className="mb-2 font-semibold">
                                        GPM Minimum (Booster Pump)
                                    </h3>
                                    <div className="flex items-center gap-1">
                                        <span>GPM Minimum</span>
                                        <span>
                                            <Badge variant="secondary">Booster Pump</Badge>
                                        </span>
                                        = {((0.75 * cl2Output) / 19).toFixed(2)}
                                        <Badge variant="secondary">gal/day</Badge>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>GPM Minimum</span>
                                        <span>
                                            <Badge variant="secondary">Booster Pump</Badge>
                                        </span>
                                        = {((2 * cl2Output) / 50).toFixed(2)}
                                        <Badge variant="secondary">ml/min</Badge>
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
            {activeStep === 2 && (
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
        </Box>
    );
}
