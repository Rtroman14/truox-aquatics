"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";

import { signUpFormSchema } from "@/lib/formSchemas";

export default function SignUpForm() {
    const supabase = createClient();

    const router = useRouter();

    const [peak, setPeak] = useState(false);

    const form = useForm({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { isSubmitting, errors } = form.formState;

    const handleSignIn = async ({ email, password }) => {
        try {
            const user = await supabase.auth.signInWithPassword({ email, password });

            if (user?.error?.message) throw new Error(user.error.message);

            router.refresh();
        } catch (error) {
            console.error(error);

            form.setError("password", { message: error.message });
        }
    };

    const onSubmit = async (values) => {
        await handleSignIn({ email: values.email, password: values.password });
    };

    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight">Log into your account</h1>
                <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-blue-500 underline">
                        Sign up for free!
                    </Link>
                </p>
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
                                        <Input placeholder="john.doe@domain.com" {...field} />
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
                                        <div>
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
                                            <div>
                                                <Link
                                                    href="/forgot-password"
                                                    className="text-sm text-blue-500 underline">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                        </div>
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
                            Log In
                        </Button>
                    </form>
                </Form>

                {/* <Button
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
                    Log In With Google
                </Button> */}
            </div>
        </div>
    );
}
