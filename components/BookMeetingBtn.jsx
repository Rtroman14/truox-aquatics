"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Calendly from "@/components/Calendly";
import { cn } from "@/lib/utils";

export default function BookMeetingBtn({ variant = "primary" }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className={cn(
                        "text-sm sm:text-base",
                        variant === "primary" ? "" : "bg-white text-home-primary hover:bg-white/90"
                    )}
                >
                    Book Meeting
                </Button>
            </DialogTrigger>

            <DialogContent>
                <Calendly url="https://calendly.com/ryan-truox/30min" />
            </DialogContent>
        </Dialog>
    );
}
