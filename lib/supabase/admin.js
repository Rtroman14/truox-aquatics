import { createServerClient } from "@supabase/ssr";

export const createClient = () => {
    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_KEY,
        {
            cookies: {},
        }
    );
};
