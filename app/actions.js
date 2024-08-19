"use server";

import { z } from "zod";
import { Resend } from "resend";

import ContactFormEmail from "./(marketing)/contact/_components/ContactFormEmail";
import slackNotification from "@/lib/utils/slackNotification";

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
    // const resend = new Resend(process.env.RESEND_API_KEY);

    console.log(`Form values -->`, values);

    await slackNotification({ username: "Truox Aquatics", text: JSON.stringify(values) });

    return {
        success: true,
    };

    const validatedFields = contactFormSchema.safeParse(values);

    // Return early if the form data is invalid
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Roy <roy@truox.com>",
            to: ["ryan@peakleads.io"],
            subject: "Truox Website Lead",
            react: ContactFormEmail({
                name: values.name,
                email: values.email,
                phone: values.phone,
                company: values.company,
                message: values.message,
            }),
        });
        if (error) throw new Error(error.message);

        return { success: true, data };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: error.message,
        };
    }
}
