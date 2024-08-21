import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter,
} from "@/components/ui/table";
export default function PerformanceExpectationsTable() {
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
        <Card className="relative w-full overflow-auto">
            <CardHeader>
                <CardTitle className="text-center text-muted-foreground">
                    Performance Expectations
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Pool Dynamic</TableHead>
                            <TableHead className="text-center">Startup</TableHead>
                            <TableHead className="text-center">Daily</TableHead>
                            <TableHead className="text-center">Continuous</TableHead>
                            <TableHead className="text-center">Rapid Recovery</TableHead>
                            <TableHead className="text-center">Startup</TableHead>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center">CIO₂ (ppm/min)</TableHead>
                            <TableHead className="text-center">Remediation</TableHead>
                            <TableHead className="text-center">Maintenance</TableHead>
                            <TableHead className="text-center">24/7</TableHead>
                            <TableHead className="text-center">Shock (INDOOR/OUTDOOR)</TableHead>
                            <TableHead className="text-center">Remediation (EVENING)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {performanceData.map((data) => (
                            <TableRow key={data.clO2}>
                                <TableCell className="text-center">{data.clO2}</TableCell>
                                <TableCell className="text-center">{data.startupRem}</TableCell>
                                <TableCell className="text-center">{data.dailyMaint}</TableCell>
                                <TableCell className="text-center">{data.continuous}</TableCell>
                                <TableCell className="text-center">
                                    {data.rapidIndoorOutdoor}
                                </TableCell>
                                <TableCell className="text-center">{data.rapidEvening}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
