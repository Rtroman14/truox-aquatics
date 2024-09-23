import { createClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { email, action } = params;
    const supabase = createClient();

    if (action !== "approve" && action !== "deny") {
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    try {
        const { data, error } = await supabase
            .from("customers")
            .update({ approved: action === "approve" })
            .eq("email", email);

        if (error) throw error;

        return NextResponse.json({ message: `User ${action}ed successfully` }, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
