"use client";

import { useState } from "react";

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

export default function FeedRateForm() {
    const [cl2Output, setCl2Output] = useState();

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Cryptolyte Feed-rate</CardTitle>
                <CardDescription>Sizing the Cryptolyte Feed System</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="cl2-output" className="flex gap-1 items-center">
                                <span>Maximum Cl2 Output</span>
                                <Badge variant="secondary">lbs/day</Badge>
                            </Label>
                            <Input id="cl2-output" type="number" placeholder="25" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label
                                htmlFor="booster-pump-flow-rate"
                                className="flex gap-1 items-center"
                            >
                                <span>Booster Pump Flow Rate</span>
                                <Badge variant="secondary">GPM</Badge>
                            </Label>
                            <Input id="booster-pump-flow-rate" type="number" placeholder="25" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Next</Button>
            </CardFooter>
        </Card>
    );
}
