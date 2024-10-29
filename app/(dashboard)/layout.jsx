import Logo from "@/components/Logo";

import DashboardNav from "@/components/DashboardNav";
import DashboardHeader from "@/components/DashboardHeader";

import { fetchCustomer } from "@/app/actions";

export default async function Layout({ children }) {
    const customer = await fetchCustomer("approved");
    if (!customer.success) throw new Error(customer.message);

    const isApproved = customer.data.approved;

    if (!isApproved) {
        return (
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-muted/40 md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <Logo />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <DashboardHeader />
                    <main className="flex flex-1 flex-col gap-4 lg:gap-6">
                        <div
                            className="h-[calc(100vh-60px)] items-center justify-center rounded-lg border border-dashed shadow-sm dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
                            x-chunk="dashboard-02-chunk-1"
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <h1 className="text-2xl font-bold">Pending Approval</h1>
                                <p className="text-lg mt-2 text-center">
                                    Your account is currently pending approval. You will receive an
                                    email once your account is approved.
                                </p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Logo />
                    </div>
                    <aside className="flex-1">
                        <DashboardNav />
                    </aside>
                </div>
            </div>
            <div className="flex flex-col">
                <DashboardHeader />
                <main className="flex flex-1 flex-col gap-4 lg:gap-6">
                    {/* <div className="flex items-center">
                        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
                    </div> */}
                    <div
                        className="items-center justify-center rounded-lg border border-dashed shadow-sm dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
                        x-chunk="dashboard-02-chunk-1"
                    >
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
