"use client";

import { useEffect, useState } from "react";
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

import { logInFormSchema } from "@/lib/formSchemas";

export default function SignUpForm() {
    const supabase = createClient();

    const router = useRouter();

    const [peak, setPeak] = useState(false);

    const form = useForm({
        resolver: zodResolver(logInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { isSubmitting, errors } = form.formState;

    const handleSignIn = async (values) => {
        try {
            const user = await supabase.auth.signInWithPassword(values);

            if (user?.error?.message) throw new Error(user.error.message);

            router.refresh();
        } catch (error) {
            console.error(error);

            form.setError("password", { message: error.message });
        }
    };

    const onSubmit = async (values) => {
        await handleSignIn(values);
    };

    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] rounded-xl border shadow-lg p-6">
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
                                                    className="text-sm text-blue-500 underline"
                                                >
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
                            size="sm"
                        >
                            {isSubmitting ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : null}
                            Log In
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
