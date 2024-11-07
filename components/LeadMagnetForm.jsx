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
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addLead } from "@/app/actions";
import { leadMagnetFormSchema } from "@/lib/formSchemas";
import { usePlausible } from "next-plausible";

const PDF = "/pdfs/understanding-and-addressing-indoor-aquatic-illness-2.pdf";

export default function LeadMagnetForm() {
    const plausible = usePlausible();

    const { toast } = useToast();
    const form = useForm({
        resolver: zodResolver(leadMagnetFormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            company: "",
        },
    });

    const { isSubmitting, errors } = form.formState;

    const onSubmit = async (values) => {
        const { success } = await addLead(values);

        if (!success) {
            toast({
                title: "Error",
                description: "There was an internal error. Please email roy@truox.com",
                duration: 5000,
                variant: "destructive",
            });

            return;
        }

        // Create a link element to trigger the PDF download
        const link = document.createElement("a");
        link.href = PDF;
        link.download = "understanding-and-addressing-indoor-aquatic-illness.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        plausible("Download White Paper");

        form.reset();

        // toast({
        //     title: "Success",
        //     description: "Your message has been sent and download should begin shortly!",
        //     duration: 5000,
        //     variant: "default",
        // });
    };

    return (
        <div className="mx-auto shadow border rounded-lg p-6 bg-card">
            <div className="max-w-screen-md mb-4">
                <h2 className="text-3xl font-semibold leading-none [text-wrap:balance] md:tracking-tight lg:text-4x mb-3">
                    Download Our White Paper
                </h2>
                <p className="text-slate-700 text-sm">
                    Download our technical report on indoor pool water treatment. Learn how our
                    EPA-approved technology eliminates harmful byproducts while reducing operational
                    costs.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6">
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John" type="text" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="col-span-6">
                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" type="text" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
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
                    {/* <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="phone_number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="phone_number">Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="phone_number"
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
                                    <FormLabel htmlFor="company">Company*</FormLabel>
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
                    </div> */}
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Loading..." : "Download White Paper"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
