import { createClient } from "@/lib/supabase/admin";

(async () => {
    try {
        const { email, action } = { email: "ryan@peakleads.io" };
        const supabase = await createClient();
    } catch (error) {
        console.error(error);
    }
})();
