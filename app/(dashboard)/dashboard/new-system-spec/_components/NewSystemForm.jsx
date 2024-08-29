"use client";

import { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Loader2 } from "lucide-react";

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
import ComponentToPrint from "@/components/ComponentToPrint";
import StepIndicator from "@/components/StepIndicator";

import SiteInfoForm from "@/components/SiteInfoForm";

import { insertNewSystemSpec } from "@/app/actions";

const steps = [
    { label: "Site Info", description: "Enter site details" },
    { label: "Input Data", description: "Provide numerical inputs" },
    { label: "Calculations", description: "View results" },
];

export default function NewSystemForm({ customer }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        site_name: "",
        company_name: customer ? customer.company_name : "",
        pool_dynamic: "",
        pool_volume: "",
    });
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleSubmit = async () => {
        setLoading(true);
        console.log("formData", formData);

        await insertNewSystemSpec(formData);
        setLoading(false);

        handlePrint();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const isStepValid = (step) => {
        switch (step) {
            case 1:
                return formData.site_name.trim() !== "" && formData.company_name.trim() !== "";
            case 2:
                return formData.pool_dynamic.trim() !== "" && formData.pool_volume.trim() !== "";
            default:
                return true;
        }
    };

    const handleNext = () => {
        if (isStepValid(currentStep) && currentStep < steps.length) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <SiteInfoForm formData={formData} handleInputChange={handleInputChange} />;
            case 2:
                return <InputData formData={formData} handleInputChange={handleInputChange} />;
            case 3:
                return <Calculations formData={formData} componentRef={componentRef} />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full sm:w-[500px] bg-white p-8 flex-col flex shadow rounded-xl border gap-8">
            <div>
                <h2 className="font-semibold text-2xl text-start">
                    {steps[currentStep - 1].label}
                </h2>
            </div>
            <div>
                <div className="mb-8">
                    <StepIndicator steps={steps} currentStep={currentStep} />
                </div>
                {renderStepContent(componentRef)}
            </div>
            <div className="flex justify-between">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                >
                    Previous
                </Button>
                {currentStep !== steps.length ? (
                    <Button
                        onClick={handleNext}
                        size="sm"
                        disabled={currentStep === steps.length || !isStepValid(currentStep)}
                    >
                        Next
                    </Button>
                ) : (
                    <Button
                        onClick={handleSubmit}
                        size="sm"
                        disabled={!isStepValid(currentStep) || loading}
                    >
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Print & Submit
                    </Button>
                )}
            </div>
        </div>
    );
}

const InputData = ({ formData, handleInputChange }) => {
    return (
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pool_dynamic" className="flex gap-1 items-center">
                    <span>Pool Dynamic</span>
                    <Badge variant="secondary">
                        Cl0 <sub className="mr-1">2</sub> ppm/min
                    </Badge>
                </Label>
                <Input
                    id="pool_dynamic"
                    name="pool_dynamic"
                    type="number"
                    value={formData.pool_dynamic}
                    onChange={handleInputChange}
                    placeholder="0.25"
                    required
                />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pool_volume" className="flex gap-1 items-center">
                    <span>Pool Volume</span>
                    <Badge variant="secondary">Gal</Badge>
                </Label>
                <Input
                    id="pool_volume"
                    name="pool_volume"
                    type="number"
                    value={formData.pool_volume}
                    onChange={handleInputChange}
                    placeholder="10,000"
                    required
                />
            </div>
        </div>
    );
};

const Calculations = ({ formData, componentRef }) => {
    const [cryptolyteFeedRate, setCryptolyteFeedRate] = useState(0);
    const [pd1, setPd1] = useState(0);
    const [tbpSpan, setTbpSpan] = useState(0);
    const [muriaticAcidFeetRate, setMuriaticAcidFeedRate] = useState(0);
    const [sodiumBisulfateAcidFeetRate, setSodiumBisulfateAcidFeedRate] = useState(0);

    const [chlorineFeedRate, setChlorineFeedRate] = useState(0);
    const [minBoosterPump, setMinBoosterPump] = useState(0);

    useEffect(() => {
        const pd1Val = Number(formData.pool_dynamic) * 3.785 * Number(formData.pool_volume);
        setPd1(pd1Val);

        const cryptolyteFeedRateVal = pd1Val / 593.14;
        setCryptolyteFeedRate(cryptolyteFeedRateVal);

        const chlorineFeedRateVal = cryptolyteFeedRateVal / 0.75;
        setChlorineFeedRate(chlorineFeedRateVal);

        const minBoosterPumpVal = cryptolyteFeedRateVal / 10;
        setMinBoosterPump(minBoosterPumpVal);

        setMuriaticAcidFeedRate(cryptolyteFeedRateVal * 0.65);

        setSodiumBisulfateAcidFeedRate(cryptolyteFeedRateVal * 0.86);

        setTbpSpan(Math.min(Number(formData.pool_dynamic) * 10, 4.99));
    }, [formData.pool_volume, formData.pool_dynamic]);

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-3">Feeder System Sizing</h3>

            <div className="space-y-2">
                <div>
                    Pool Volume ={" "}
                    <strong className="underline underline-offset-2">
                        {formData.pool_volume.toLocaleString()}
                    </strong>{" "}
                    Gal
                </div>

                <div>
                    Chlorine Feed Rate ={" "}
                    <strong className="underline underline-offset-2">
                        {chlorineFeedRate.toFixed(2)}
                    </strong>{" "}
                    lbs/day as Cl<sub>2</sub>
                </div>

                <div>
                    Cryptolyte® Feed Rate ={" "}
                    <strong className="underline underline-offset-2">
                        {cryptolyteFeedRate.toFixed(2)}
                    </strong>{" "}
                    gal/day
                </div>

                <div>
                    Minimum Booster Pump ={" "}
                    <strong className="underline underline-offset-2">
                        {minBoosterPump.toFixed(2)}
                    </strong>{" "}
                    GPM
                </div>

                <div>
                    <div>
                        Muriatic Acid Feed Rate ={" "}
                        <strong className="underline underline-offset-2">
                            {muriaticAcidFeetRate.toFixed(2)}
                        </strong>{" "}
                        GPD
                    </div>

                    <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-muted-foreground">Or</span>
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

            <h3 className="text-xl font-semibold mb-3">Performance & Controller Configuration</h3>

            <div className="space-y-2">
                <div>
                    Pool Dynamic ={" "}
                    <strong className="underline underline-offset-2">
                        {Number(formData.pool_dynamic).toFixed(2)}
                    </strong>{" "}
                    ClO<sub>2</sub> ppm/min
                </div>

                <div>
                    TBP SPAN ={" "}
                    <strong className="underline underline-offset-2">{tbpSpan.toFixed(2)}</strong>{" "}
                    <span className="text-xs">(4.99 Max Value)</span>
                </div>
            </div>

            <div className="hidden">
                <ComponentToPrint ref={componentRef}>
                    <div className="h-screen">
                        <div className="mb-12 w-max">
                            <h3 className="text-xl font-semibold mb-3">Feeder System Sizing</h3>

                            <div className="space-y-2">
                                <div>
                                    Pool Volume ={" "}
                                    <strong className="underline underline-offset-2">
                                        {formData.pool_volume.toLocaleString()}
                                    </strong>{" "}
                                    Gal
                                </div>

                                <div>
                                    Chlorine Feed Rate ={" "}
                                    <strong className="underline underline-offset-2">
                                        {chlorineFeedRate.toFixed(2)}
                                    </strong>{" "}
                                    lbs/day as Cl<sub>2</sub>
                                </div>

                                <div>
                                    Minimum Booster Pump ={" "}
                                    <strong className="underline underline-offset-2">
                                        {minBoosterPump.toFixed(2)}
                                    </strong>{" "}
                                    GPM
                                </div>

                                <div>
                                    <div>
                                        Muriatic Acid Feed Rate ={" "}
                                        <strong className="underline underline-offset-2">
                                            {muriaticAcidFeetRate.toFixed(2)}
                                        </strong>{" "}
                                        GPD (Suggested Start Up) [31.45% HCI Undiluted]
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
                                        lbs/day (Suggested Start Up) [93% Sodium Bisulfate]
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator className="my-6" />

                        <div>
                            <h3 className="text-xl font-semibold mb-3">
                                Performance & Controller Configuration
                            </h3>

                            <div className="space-y-2">
                                <div>
                                    Pool Dynamic ={" "}
                                    <strong className="underline underline-offset-2">
                                        {Number(formData.pool_dynamic).toFixed(2)}
                                    </strong>{" "}
                                    ClO<sub>2</sub> ppm/min
                                </div>

                                <div>
                                    TBP SPAN ={" "}
                                    <strong className="underline underline-offset-2">
                                        {tbpSpan.toFixed(2)}
                                    </strong>{" "}
                                    <span className="text-xs">(4.99 Max Value)</span>{" "}
                                    <span className="text-green-500">
                                        Automatically Amend Maintenance Mode & Continuous Mode TBP
                                        SPAN Value
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-screen">
                        <div className="w-full flex justify-end">
                            <Card className="w-max">
                                <CardHeader>
                                    <CardTitle>Legend</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-sm bg-blue-500" />
                                        <div className="flex-1">SELECT or SET POINT VALUE</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-sm bg-black" />
                                        <div className="flex-1">EXISTING DEFAULT VALUE</div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-sm bg-green-500" />
                                        <div className="flex-1">ADDITIONAL INFORMATION</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

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
                                            <span className="text-blue-500">7.5pH</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>TBP Span</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">0.2</span>
                                        </li>
                                        <ul className="list-disc pl-8">
                                            <li className="text-green-500">
                                                If you dilute your acid, determine your TBP Span by
                                                multiplying 0.2 by your WATER dilution factor.
                                            </li>
                                            <li className="text-green-500">
                                                Example: you currently dilute your Muriatic Acid
                                                (HCl) by 9:1 Water to Acid respectfully. Then your
                                                new TBP Span will be 0.2 x 9 = 1.8
                                            </li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>TBP Time Base</span>
                                    <ul className="list-disc pl-8">
                                        <li>Total cycle time for proportional control.</li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">1 Min</span>{" "}
                                            <span className="text-[#1FB55C]">
                                                Ensures always in Time Base Control when Controlling
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
                                            <span className="text-blue-500">3s</span>
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
                                            <span className="text-blue-500">60min</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="h-screen">
                        <h3 className="text-2xl font-semibold mb-12 text-center">
                            Chlorine Configuration
                        </h3>

                        <div className="space-y-3">
                            <ul className="list-disc">
                                <li>
                                    <span>Sanitizer Chemical</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            Bromine or{" "}
                                            <span className="text-blue-500">Chlorine</span>
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
                                            <span className="text-blue-500">Free Chlorine</span>
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
                                            <span className="text-blue-500">0.2</span>{" "}
                                            <span className="text-[#1FB55C]">
                                                Adjust higher (0.1 increments) is Chlorine
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
                                            <span className="text-blue-500">1.2ppm</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>TBP Time Base</span>
                                    <ul className="list-disc pl-8">
                                        <li>Total cycle time for proportional control</li>
                                        <li>
                                            Defaul value -
                                            <span className="text-blue-500">1 Min</span>{" "}
                                            <span className="text-[#1FB55C]">
                                                Ensures always in Time Base Control when Controlling
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
                                            <span className="text-blue-500">10s</span>
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
                                            <span className="text-blue-500">1hr</span>
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
                                            <span className="text-blue-500">Maintenance</span> or
                                            Continuous mode.
                                        </li>
                                        <li>
                                            Determines whether the system will run an evening
                                            maintenance cycle or continuously maintain a ClO
                                            <sub>2</sub> level.
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Maint Start Time</span>
                                    <ul className="list-disc pl-8">
                                        <li>Time of day to trigger a maintenance cycle.</li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">10PM</span>{" "}
                                            <span className="text-[#1FB55C]">
                                                Adjust if needed to ensure pool is closed
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
                                            Initial feed duration in maintenance cycle before
                                            switching to TBP control.
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">0s</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Maint Set Point</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            ClO<sub>2</sub> setpoint that Cryptolyte will control to
                                            in maintenance cycle.
                                        </li>
                                        <li>
                                            This value can be disabled to indicate no feeding to
                                            setpoint should be done.
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">0.5ppm</span>{" "}
                                            <span className="text-[#1FB55C]">
                                                Adjust if needed to complete remediation before pool
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
                                            Maximum time allowed to complete remediation before
                                            triggering alarm in maintenance cycle.
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">8 hr</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Maint CT Set Pnt</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            CT setpoint for tracking when a remediation has been
                                            successfully completed in maintenance cycle.
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">160CT</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Maint TBP Span</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            Offset from Maint Setpoint for which proportional
                                            control will be engaged. If outside this span, then the
                                            feed will be fully on.
                                        </li>
                                        <li>
                                            Default value –{" "}
                                            <span className="text-blue-500">4.99</span>{" "}
                                        </li>
                                        <li>
                                            Calculated value –{" "}
                                            <span className="text-blue-500">
                                                {tbpSpan.toFixed(2)}
                                            </span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="h-screen h-[calc(100vh-10px)"> */}
                    <div className="h-min">
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
                                            <span className="text-blue-500">Continuous mode</span>
                                        </li>
                                        <li>
                                            Determines whether the system will run an evening
                                            maintenance cycle or continuously maintain a ClO
                                            <sub>2</sub> level.
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Cont Set Point</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            ClO<sub>2</sub> setpoint that Cryptolyte will control to
                                            in continuous mode
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">0.3ppm</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Cont CT Set Pnt</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            CT setpoint for tracking when a remediation has been
                                            successfully completed in continuous mode
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">160 CT</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Accel Start Time</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            Start time for which accelerated in-situ generation will
                                            be performed in continuous mode.
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">12AM</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Accel End Time</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            End time for which accelerated in-situ generation will
                                            be performed in continuous mode.
                                        </li>
                                        <li>
                                            If start & end time are equal, then this logic will be
                                            disabled.
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">12AM</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="list-disc">
                                <li>
                                    <span>Accel TBP Span</span>
                                    <ul className="list-disc pl-8">
                                        <li>
                                            Offset from Maint Setpoint for which proportional
                                            control will be engaged. If outside this span, then the
                                            feed will be fully on.
                                        </li>
                                        <li>
                                            Default value -{" "}
                                            <span className="text-blue-500">4.99</span>{" "}
                                        </li>
                                        <li>
                                            Calculated value -{" "}
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
        </div>
    );
};
