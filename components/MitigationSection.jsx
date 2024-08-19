import { CheckBadgeIcon, DocumentCheckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AlvaroQuote from "./AlvaroQuote";

export default function MitigationSection() {
    return (
        <section>
            <h2 className="text-4xl mb-8 text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                Mitigating Risk
            </h2>

            <AlvaroQuote />

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-20 md:gap-4 gap-12 max-w-screen-lg mx-auto">
                <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                        <CheckBadgeIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl">EPA Approved</h3>
                    </div>
                    <p className="text-slate-600 [text-wrap:balance]">
                        We adhere to EPA standards, ensuring our water treatments meet legal and
                        safety requirements, safeguarding both public health and your business.
                    </p>
                    <div>
                        <Button asChild size="sm">
                            <Link href="/risk-mitigation">Learn More</Link>
                        </Button>
                    </div>
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                        <DocumentCheckIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl">Remediation Management</h3>
                    </div>
                    <p className="text-slate-600 [text-wrap:balance]">
                        Our management system quickly targets and corrects water quality issues,
                        providing reliable and comprehensive remediation services.
                    </p>
                    <div>
                        <Button asChild size="sm">
                            <Link href="/risk-mitigation">Learn More</Link>
                        </Button>
                    </div>
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl">Water Safety Assurance</h3>
                    </div>
                    <p className="text-slate-600 [text-wrap:balance]">
                        Our stringent testing and safety measures ensure superior water conditions,
                        minimizing risk and enhancing user confidence.
                    </p>
                    <div>
                        <Button asChild size="sm">
                            <Link href="/risk-mitigation">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
