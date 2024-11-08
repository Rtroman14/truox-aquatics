import { createClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

import { Resend } from "resend";
import RegistrationConfirmationEmail from "@/lib/emails/registration-confirmation";

const sendRegistrationConfirmation = async ({ action, name }) => {
    try {
        const resend = new Resend(process.env.RESEND_API);

        const data = await resend.emails.send({
            from: "Roy <roy@alerts.truox.com>",
            to: ["ryan@peakleads.io"], // Replace with the actual admin email
            subject: `Cryptolyte Registration ${action === "approve" ? "Approved!" : "Denied"}`,
            react: RegistrationConfirmationEmail({ action, name }),
        });

        return { success: true, data };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error };
    }
};

export const GET = async (request, { params }) => {
    const { email, action } = { email: "ryan@peakleads.io", action: "approve" };
    const supabase = createClient();

    if (action !== "approve" && action !== "deny") {
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    try {
        // const { data, error } = await supabase
        //     .from("customers")
        //     .update({ approved: action === "approve" })
        //     .eq("email", email.toLowerCase().trim())
        //     .select("first_name");

        // if (error) throw error;

        // if (data && data.length > 0) {
        //     const firstName = data[0].first_name;
        //     await sendRegistrationConfirmation({ action, name: firstName });
        // }

        return NextResponse.json({ message: `User ${action}ed successfully` }, { status: 200 });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
