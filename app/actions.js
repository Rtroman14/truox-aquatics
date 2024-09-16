"use server";

import { z } from "zod";
import { Resend } from "resend";

import ContactFormEmail from "./(marketing)/contact/_components/ContactFormEmail";
import slackNotification from "@/lib/utils/slackNotification";

import { createClient } from "@/lib/supabase/server";

const contactFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: "1 character min" })
        .max(50, { message: "50 character max" }),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().max(500, { message: "500 character max" }),
});

export async function emailContactForm(values) {
    const resend = new Resend(process.env.RESEND_API);

    console.log(`Form values -->`, values);

    const validatedFields = contactFormSchema.safeParse(values);

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Roy <roy@alerts.truox.com>",
            to: ["ryan@truox.com"],
            subject: "Cryptolyte Website Lead",
            react: ContactFormEmail({
                name: values.name,
                email: values.email,
                phone: values.phone,
                company: values.company,
                message: values.message,
            }),
        });
        if (error) throw new Error(error.message);

        await slackNotification({
            username: "Truox Aquatics",
            text: JSON.stringify(values, null, 4),
        });

        return { success: true, data };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: error.message,
        };
    }
}

export const fetchCustomer = async (select = "*") => {
    const supabase = await createClient();

    try {
        const { data, error } = await supabase.from("customers").select(select).maybeSingle();
        if (error) throw new Error(error.message);

        return { success: true, data };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            data: null,
            message: error.message,
        };
    }
};

export const insertExistingSystemUpgrade = async (values) => {
    const supabase = await createClient();

    try {
        const { data, error } = await supabase.from("existing_system_upgrade").insert(values);
        if (error) throw new Error(error.message);

        return { success: true, data };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            data: null,
            message: error.message,
        };
    }
};

export const insertNewSystemSpec = async (values) => {
    const supabase = await createClient();

    try {
        const { data, error } = await supabase.from("new_system_spec").insert(values);
        if (error) throw new Error(error.message);

        return { success: true, data };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            data: null,
            message: error.message,
        };
    }
};
