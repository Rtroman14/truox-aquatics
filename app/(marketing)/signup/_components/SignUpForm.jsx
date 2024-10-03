"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { sendErrorAlert } from "@/app/actions";

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
    const supabase = createClient();
    const { toast } = useToast();
    const router = useRouter();

    const [peak, setPeak] = useState(false);

    const form = useForm({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            companyName: "",
            email: "",
            password: "",
        },
    });

    const { isSubmitting, errors } = form.formState;

    const handleSignUp = async (values) => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
                options: {
                    data: {
                        full_name: `${values.firstName} ${values.lastName}`,
                        first_name: values.firstName,
                        last_name: values.lastName,
                        company_name: values.companyName,
                    },
                },
            });

            if (error) throw new Error(error.message);

            // Send approval email to admin
            await sendNewUserApprovalEmail({
                name: `${values.firstName} ${values.lastName}`,
                email: values.email,
                company: values.companyName,
            });

            router.refresh();

            return {
                success: true,
            };
        } catch (error) {
            console.error(error);
            form.setError("password", { message: error.message });

            // Send approval email to admin
            await sendErrorAlert({
                func: "Sign Up Form",
                error,
            });

            return {
                success: false,
                message: error.message,
            };
        }
    };

    const onSubmit = async (values) => {
        const signUpRes = await handleSignUp(values);

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
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] rounded-xl border shadow-lg p-6">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight">Register an account</h1>
                <p className="text-sm text-muted-foreground">
                    Enter your email below to register your account
                </p>
            </div>
            <div className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex gap-3">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="grow">
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem className="grow">
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Company Name" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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
                                        <div className="relative">
                                            <Input
                                                placeholder="********"
                                                {...field}
                                                type={peak ? "text" : "password"}
                                            />
                                            <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2">
                                                <div onClick={() => setPeak(!peak)}>
                                                    {peak ? (
                                                        <EyeIcon className="m-3 h-5 w-5 cursor-pointer text-marketing-text" />
                                                    ) : (
                                                        <EyeSlashIcon className="m-3 h-5 w-5 cursor-pointer text-marketing-text" />
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
                                disabled={Object.keys(errors).length > 0 || isSubmitting}
                                size="sm"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : null}
                                Sign Up
                            </Button>

                            <div className="mt-2">
                                <p className="text-sm text-marketing-text">
                                    Already have an account?{" "}
                                    <Link href="/login" className="text-blue-500 underline">
                                        Log In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}
