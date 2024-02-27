"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function SignOut() {
    const supabase = createClient();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();

            if (error) throw new Error(error);

            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
    );
}
