"use client";

import { InlineWidget } from "react-calendly";

export default function Calendly({ url = "https://calendly.com/ryan-truox/30min" }) {
    return <InlineWidget url={url} />;
}
