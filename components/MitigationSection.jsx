import { CheckBadgeIcon, DocumentCheckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function MitigationSection() {
    return (
        <section className="py-20 sm:py-36 container">
            <h2 className="text-4xl text-center font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-[53px]">
                Mitigating Liability
            </h2>

            <div>
                <p className="mt-3 text-slate-600 [text-wrap:balance] text-center">
                    “Pool Water remediation, confirmation and documentation give our customers the
                    proof they need to defuse accusations in a climate where even a negative review
                    can go viral online and damage a business’s reputation.”
                </p>
                <p className="mt-3 text-slate-600 [text-wrap:balance] text-center">
                    Alvaro Mendoza, CEO, Aquafinity Jupiter, Fl
                </p>
            </div>

            <div className="grid grid-cols-3 justify-center mt-20 gap-4">
                <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                        <CheckBadgeIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl">EPA Approved</h3>
                    </div>
                    <p className="text-slate-600 [text-wrap:balance]">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                    </p>
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                        <DocumentCheckIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl">Remediation Management</h3>
                    </div>
                    <p className="text-slate-600 [text-wrap:balance]">
                        Controls, Confirms & Documents Remediation, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur.
                    </p>
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                        <ShieldCheckIcon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl">Water Safety Assurance</h3>
                    </div>
                    <p className="text-slate-600 [text-wrap:balance]">
                        Guarantees the supply of safe water for owners and management. Assures
                        customers of water quality and safety. nisi ut aliquid ex consequatur.
                    </p>
                </div>
            </div>
        </section>
    );
}
