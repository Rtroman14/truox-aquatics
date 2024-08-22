import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import LogInForm from "./_components/LogInForm";

export const metadata = {
    title: "Cryptolyte | Login",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default async function LogInPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect("/dashboard");
    }

    return (
        <div className="grid h-[calc(100vh-71px)]">
            <div className="flex flex-col items-center justify-center">
                <LogInForm />
            </div>
        </div>
    );
}
