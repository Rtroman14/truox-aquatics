import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Existing System Upgrades</CardTitle>
                        <CardDescription>
                            View and manage existing system upgrade requests from customers
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/dashboard/admin/existing-system-upgrade">
                            <Button className="w-full">
                                View Data
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>New System Specifications</CardTitle>
                        <CardDescription>
                            View and manage new system specification requests from customers
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/dashboard/admin/new-system-spec">
                            <Button className="w-full">
                                View Data
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
