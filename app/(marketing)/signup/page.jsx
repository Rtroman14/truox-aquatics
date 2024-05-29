import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import SignUpForm from "./_components/SignUpForm";

export const metadata = {
    title: "Cryptolyte | Sign Up",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default async function SignUpPage() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect("/training-videos");
    }

    return (
        <div className="grid h-screen">
            <div className="container flex flex-col items-center justify-center">
                <SignUpForm />
            </div>
        </div>
        // <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
        //     <div className="col-span-1 hidden flex-col items-center justify-center bg-background lg:flex">
        //         Image
        //     </div>
        //     <div className="container col-span-1 flex flex-col items-center justify-center">
        //         <div className="lg:p-8">
        //             <SignUpForm />
        //         </div>
        //     </div>
        // </div>
    );
}
