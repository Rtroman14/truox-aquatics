import * as z from "zod";

export const logInFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, {
            message: "8 character min",
        })
        .max(50, {
            message: "50 character max",
        }),
});

export const signUpFormSchema = z.object({
    firstName: z.string().max(50, {
        message: "50 character max",
    }),
    lastName: z.string().max(50, {
        message: "50 character max",
    }),
    companyName: z.string().max(50, {
        message: "50 character max",
    }),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(8, {
            message: "8 character min",
        })
        .max(50, {
            message: "50 character max",
        }),
});

export const forgotPasswordFormSchema = z.object({
    email: z.string().email("Invalid email address"),
});

export const resetPasswordFormSchema = z.object({
    password: z
        .string()
        .min(8, {
            message: "8 character min",
        })
        .max(50, {
            message: "50 character max",
        }),
    confirmPassword: z
        .string()
        .min(8, {
            message: "8 character min",
        })
        .max(50, {
            message: "50 character max",
        }),
});

export const leadMagnetFormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    phone_number: z.string().optional(),
    company: z.string().optional(),
});
