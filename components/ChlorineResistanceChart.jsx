"use client";

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
    { chlorineResistance: "e-coli", value: 0.1, fill: "var(--color-e-coli)" },
    {
        chlorineResistance: "enterococcus-faecium",
        value: 0.1,
        fill: "var(--color-enterococcus-faecium)",
    },
    { chlorineResistance: "legionella", value: 0.5, fill: "var(--color-legionella)" },
    {
        chlorineResistance: "pseudomonas-aeruginosa",
        value: 2,
        fill: "var(--color-pseudomonas-aeruginosa)",
    },
    { chlorineResistance: "giardia", value: 3, fill: "var(--color-giardia)" },
    { chlorineResistance: "cryptosporidium", value: 30, fill: "var(--color-cryptosporidium)" },
];

const chartConfig = {
    value: {
        label: "Value",
    },
    "e-coli": {
        label: "E. coli",
        color: "#93c5fd",
    },
    "enterococcus-faecium": {
        label: "Enterococcus faecium",
        color: "#60a5fa",
    },
    legionella: {
        label: "Legionella",
        color: "#3b82f6",
    },
    "pseudomonas-aeruginosa": {
        label: "Pseudomonas aeruginosa",
        color: "#2563eb",
    },
    giardia: {
        label: "Giardia",
        color: "#1d4ed8",
    },
    cryptosporidium: {
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
