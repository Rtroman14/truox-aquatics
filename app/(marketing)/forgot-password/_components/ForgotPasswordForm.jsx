"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { forgotPasswordFormSchema } from "@/lib/formSchemas";

export default function ForgotPasswordForm() {
    const supabase = createClient();

    const [emailSent, setEmailSent] = useState(false);

    const form = useForm({
        resolver: zodResolver(forgotPasswordFormSchema),
        defaultValues: {
            email: "",
        },
    });

    const { isSubmitting, errors } = form.formState;

    const handleResetPassword = async ({ email }) => {
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/reset-password`,
            });

            if (error) throw new Error(error.message);

            setEmailSent(true);
        } catch (error) {
            console.error(error);

            form.setError("email", { message: error.message });
        }
    };

    const onSubmit = async (values) => {
        await handleResetPassword({ email: values.email });
    };

    return (
        <AnimatePresence initial={false}>
            {emailSent ? (
                <motion.div
                    key="email-confirmation"
                    layoutId="123"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Password reset email sent!
                        </h1>
                        <p className="text-muted-foreground">
                            Please check your inbox to reset your password.
                        </p>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="sign-up"
                    layoutId="123"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-3xl font-semibold tracking-tight">
                                Reset your pasword
                            </h1>
                        </div>
                        <div className="grid gap-6">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="john.doe@domain.com"
                                                        {...field}
                                                    />
                                                </FormControl>

                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        className="w-full"
                                        type="submit"
                                        disabled={Object.keys(errors).length > 0 || isSubmitting}
                                        size="sm">
                                        {isSubmitting ? (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        ) : null}
                                        Reset
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
