import Image from "next/image";

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
} from "@/components/ui/table";

export default function ComparisonTable() {
    const checkIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="size-8 text-green-500"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    );
    const xMarkIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="size-8 text-red-500"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    );

    const questionIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-8 text-blue-500"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
        </svg>
    );

    const performanceData = [
        {
            name: "Controls, Confirms & Documents Remediation",
            cryptoLyte: checkIcon,
            uv: xMarkIcon,
            ozone: xMarkIcon,
            cl2Shock: xMarkIcon,
            filterAids: xMarkIcon,
        },
        {
            name: ">3-log Kill of Cryptosporidium <30min",
            cryptoLyte: checkIcon,
            uv: xMarkIcon,
            ozone: xMarkIcon,
            cl2Shock: xMarkIcon,
            filterAids: xMarkIcon,
        },
        {
            name: "Removes & Prevents Biofilms",
            cryptoLyte: checkIcon,
            uv: xMarkIcon,
            ozone: xMarkIcon,
            cl2Shock: xMarkIcon,
            filterAids: xMarkIcon,
        },
        {
            name: "Remediates Entire Pool System",
            cryptoLyte: checkIcon,
            uv: xMarkIcon,
            ozone: xMarkIcon,
            cl2Shock: xMarkIcon,
            filterAids: xMarkIcon,
        },
        {
            name: "Daily Remediation",
            cryptoLyte: checkIcon,
            uv: questionIcon,
            ozone: questionIcon,
            cl2Shock: xMarkIcon,
            filterAids: xMarkIcon,
        },
        {
            name: "Destroys & Inhibits DBPs",
            cryptoLyte: checkIcon,
            uv: (
                <div className="flex flex-col justify-center items-center">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={4}
                            stroke="currentColor"
                            className="size-8 text-green-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                            />
                        </svg>
                    </span>

                    <span className="text-green-500 text-xs">Increases volatile DBPs</span>
                </div>
            ),
            ozone: checkIcon,
            cl2Shock: xMarkIcon,
            filterAids: xMarkIcon,
        },
        {
            name: "Capital Expense",
            cryptoLyte: <span className="text-green-500 font-semibold text-xl">Low</span>,
            uv: <span className="text-red-500 font-semibold text-xl">High</span>,
            ozone: <span className="text-red-500 font-semibold text-xl">High</span>,
            cl2Shock: <span className="text-green-500 font-semibold text-xl">Low</span>,
            filterAids: <span className="text-green-500 font-semibold text-xl">Low</span>,
        },
        {
            name: "Operating/Maintenance Expense",
            cryptoLyte: (
                <span className="text-green-500 font-semibold text-lg">Offset by Savings</span>
            ),
            uv: <span className="text-red-500 font-semibold text-xl">Mod/High</span>,
            ozone: <span className="text-red-500 font-semibold text-xl">mod/High</span>,
            cl2Shock: <span className="text-green-500 font-semibold text-xl">Low</span>,
            filterAids: <span className="text-green-500 font-semibold text-xl">Low</span>,
        },
        {
            name: "Patented Technology",
            cryptoLyte: checkIcon,
            uv: xMarkIcon,
            ozone: xMarkIcon,
            cl2Shock: xMarkIcon,
            filterAids: xMarkIcon,
        },
    ];

    return (
        <Card>
            {/* <CardHeader>
                        <CardTitle className="text-center text-muted-foreground">
                            Performance Expectations
                        </CardTitle>
                    </CardHeader> */}
            <CardContent className="p-0 m-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
                            <TableHead className="text-center">
                                <div className="flex flex-col justify-center items-center">
                                    <span>
                                        <Image
                                            src="/images/logo.png"
                                            alt="Picture of the logo"
                                            width={130}
                                            height={130}
                                        />
                                    </span>
                                    <span className="text-green-500">EPA Approved</span>
                                </div>
                            </TableHead>
                            <TableHead className="text-center">UV</TableHead>
                            <TableHead className="text-center">Ozone</TableHead>
                            <TableHead className="text-center">
                                Cl<sub>2</sub> Shock
                            </TableHead>
                            <TableHead className="text-center">Filter Aids</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {performanceData.map((data) => (
                            <TableRow key={data.name}>
                                <TableCell className="text-center">{data.name}</TableCell>
                                <TableCell>
                                    <div className="flex justify-center">
                                        <span>{data.cryptoLyte}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center">
                                        <span>{data.uv}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center">
                                        <span>{data.ozone}</span>
                                    </div>
                                </TableCell>
                                <TableCell className=" ">
                                    <div className="flex justify-center">
                                        <span>{data.cl2Shock}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center">
                                        <span>{data.filterAids}</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
