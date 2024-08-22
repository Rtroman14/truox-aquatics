import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import SignUpForm from "./_components/SignUpForm";

export const metadata = {
    title: "Cryptolyte | Sign Up",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default async function SignUpPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect("/dashboard");
    }

    return (
        <div className="grid h-[calc(100vh-71px)]">
            <div className="container flex flex-col items-center justify-center">
                <SignUpForm />
            </div>
        </div>
    );
}
