"use client";

import { useState } from "react";
import { createClient } from "@/app/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";

import { resetPasswordFormSchema } from "@/lib/formSchemas";

export default function ResetPasswordForm() {
    const supabase = createClient();

    const router = useRouter();

    const [peak, setPeak] = useState(false);

    const form = useForm({
        resolver: zodResolver(resetPasswordFormSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const { isSubmitting, errors } = form.formState;

    const handleResetPassword = async (password) => {
        try {
            const { error } = await supabase.auth.updateUser({
                password,
            });

            if (error) throw new Error(error.message);

            router.push("/chatbots");
        } catch (error) {
            console.error(error);

            form.setError("confirmPassword", { message: error.message });
        }
    };

    const onSubmit = async (values) => {
        if (values.password !== values.confirmPassword) {
            form.setError("confirmPassword", { message: "Your password doesn't match!" });

            return;
        } else {
            await handleResetPassword(values.password);
        }
    };

    return (
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-3xl font-semibold tracking-tight">Reset your pasword</h1>
            </div>
            <div className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Retype Password</FormLabel>
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
                            Reset
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
