"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { emailContactForm } from "@/app/actions";

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

export default function ContactForm() {
    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
    });

    const { isSubmitting, errors } = form.formState;

    const onSubmit = async (values) => {
        // Handle form submission logic here

        const { success } = await emailContactForm(values);

        if (!success) {
            toast({
                title: "Error",
                description: "There was an internal error. Please email roy@truox.com",
                duration: 5000,
                variant: "destructive",
            });

            return;
        }

        toast({
            title: "Success",
            description: "Your message has been sent!",
            duration: 5000,
            variant: "default",
        });

        form.reset();

        return;
    };

    return (
        <div className="mx-auto shadow border rounded-lg p-6">
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="name">Name*</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="name"
                                                placeholder="Enter your name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="email">Email*</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="phone">Phone</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="company">Company</FormLabel>
                                        <FormControl>
                                            <Input
                                                id="company"
                                                placeholder="Enter your company name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-2">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="message">Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                id="message"
                                                placeholder="Enter your message"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
