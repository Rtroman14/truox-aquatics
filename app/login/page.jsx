import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

import LogInForm from "./_components/LogInForm";

export const metadata = {
    title: "Cryptolyte | Login",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default async function LogInPage() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect("/training-videos");
    }

    return (
        <div className="grid h-screen grid-cols-1">
            <div className="flex flex-col items-center justify-center">
                <LogInForm />
            </div>
        </div>

        // <div className="grid h-screen grid-cols-1 lg:grid-cols-2">
        //     <div className="col-span-1 hidden flex-col items-center justify-center bg-background lg:flex"></div>
        //     <div className="col-span-1 flex flex-col items-center justify-center">
        //         <div className="lg:p-8">
        //             <LogInForm />
        //         </div>
        //     </div>
        // </div>
    );
}
