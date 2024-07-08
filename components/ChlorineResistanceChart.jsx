"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { chlorineResistance: "chrome", value: 0.5, fill: "var(--color-chrome)" },
    { chlorineResistance: "safari", value: 2, fill: "var(--color-safari)" },
    { chlorineResistance: "firefox", value: 4, fill: "var(--color-firefox)" },
    { chlorineResistance: "edge", value: 6, fill: "var(--color-edge)" },
    { chlorineResistance: "other", value: 60, fill: "var(--color-other)" },
];

const chartConfig = {
    value: {
        label: "Value",
    },
    chrome: {
        label: "E. coli",
        color: "#93c5fd",
    },
    safari: {
        label: "Enterococcus faecium",
        color: "#60a5fa",
    },
    firefox: {
        label: "Legionella",
        color: "#3b82f6",
    },
    edge: {
        label: "Pseudomonas aeruginosa",
        color: "#2563eb",
    },
    other: {
        label: "Giardia",
        color: "#1d4ed8",
    },
    other: {
        label: "Cryptosporidium",
        color: "#1e40af",
    },
};

export default function ChlorineResistanceChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-center">Relative Chlorine Resistance</CardTitle>
                {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: 50,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="chlorineResistance"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => chartConfig[value]?.label}
                        />
                        <XAxis dataKey="value" type="number" hide />
                        {/* <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} /> */}
                        <Bar dataKey="value" layout="vertical" radius={5} />
                    </BarChart>

                    <div className="w-full">
                        <p className="text-center font-medium leading-none">
                            Cl<sub>2</sub> Concentration (ppm) x Time (min)
                        </p>
                    </div>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col items-center text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Cl<sub>2</sub> Concentration (ppm) x Time (min)
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    );
}
