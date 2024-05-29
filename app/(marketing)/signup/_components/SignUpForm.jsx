"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
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
import { useToast } from "@/components/ui/use-toast";

import { signUpFormSchema } from "@/lib/formSchemas";

export default function SignUpForm() {
    const [emailSent, setEmailSent] = useState(false);

    const supabase = createClient();
    const { toast } = useToast();

    const [peak, setPeak] = useState(false);

    const form = useForm({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { isSubmitting, errors } = form.formState;

    const handleSignUp = async ({ email, password }) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/auth/callback`,
                    // emailRedirectTo: `${location.origin}/auth/callback`,
                },
            });

            if (error) throw new Error(error.message);

            setEmailSent(true);

            return {
                success: true,
            };
        } catch (error) {
            console.error(error);

            form.setError("password", { message: error.message });

            return {
                success: error,
                message: error.message,
            };
        }
    };

    const onSubmit = async (values) => {
        const signUpRes = await handleSignUp({ email: values.email, password: values.password });

        if (!signUpRes.success) {
            toast({
                title: "Error",
                description: signUpRes.message,
                duration: 5000,
                variant: "destructive",
            });
        }
    };

    return (
        <div>
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
                                Confirmation email sent!
                            </h1>
                            <p className="text-muted-foreground">
                                Please check your inbox to activate your account.
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
                                    Create an account
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    Enter your email below to create your account
                                </p>
                            </div>
                            <div className="grid gap-6">
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="space-y-4">
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

                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Password</FormLabel>
                                                    <FormControl>
                                                        <div className="relative">
                                                            <Input
                                                                placeholder="********"
                                                                {...field}
                                                                type={peak ? "text" : "password"}
                                                            />
                                                            <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2">
                                                                <div onClick={() => setPeak(!peak)}>
                                                                    {peak ? (
                                                                        <EyeIcon className="m-3 h-5 w-5 cursor-pointer" />
                                                                    ) : (
                                                                        <EyeSlashIcon className="m-3 h-5 w-5 cursor-pointer" />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </FormControl>

                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div>
                                            <Button
                                                className="w-full"
                                                type="submit"
                                                disabled={
                                                    Object.keys(errors).length > 0 || isSubmitting
                                                }
                                                size="sm">
                                                {isSubmitting ? (
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                ) : null}
                                                Sign Up
                                            </Button>

                                            <div className="mt-2">
                                                <p className="text-sm text-muted-foreground">
                                                    Already have an account?{" "}
                                                    <Link
                                                        href="/login"
                                                        className="text-blue-500 underline">
                                                        Log In
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </Form>

                                {/* <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t"></span>
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-white px-2 text-muted-foreground">
                                            Or
                                        </span>
                                    </div>
                                </div>

                                <Button
                                    className="w-full"
                                    onClick={handleSignInWithGoogle}
                                    variant="outline"
                                    disabled={isSubmitting}
                                    size="sm">
                                    <svg
                                        className="mr-1.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        enableBackground="new 0 0 48 48"
                                        height="20"
                                        viewBox="0 0 48 48"
                                        width="20">
                                        <path
                                            d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                            fill="#ffc107"
                                        />
                                        <path
                                            d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                                            fill="#ff3d00"
                                        />
                                        <path
                                            d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                                            fill="#4caf50"
                                        />
                                        <path
                                            d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                                            fill="#1976d2"
                                        />
                                    </svg>
                                    Sign Up With Google
                                </Button> */}
                            </div>

                            {/* <p className="px-8 text-center text-sm text-muted-foreground">
                                By clicking create account, you agree to our{" "}
                                <a
                                    className="underline underline-offset-4 hover:text-primary"
                                    href="/terms">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                    className="underline underline-offset-4 hover:text-primary"
                                    href="/privacy">
                                    Privacy Policy
                                </a>
                                .
                            </p> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
