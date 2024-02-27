import * as z from "zod";

export const signUpFormSchema = z.object({
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
