import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

export default function ExistingSystemUpgradeEmail({
    siteName,
    companyName,
    maxChlorineFeedRate,
    poolVolume,
    customerName,
    customerEmail,
}) {
    return (
        <Html>
            <Head />
            <Preview>New Existing System Upgrade Submission</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Existing System Upgrade Submission</Heading>
                    <Section style={section}>
                        <Text style={text}>
                            A new existing system upgrade has been submitted with the following
                            details:
                        </Text>
                        <Text style={text}>
                            <strong>Site Name:</strong> {siteName}
                        </Text>
                        <Text style={text}>
                            <strong>Company Name:</strong> {companyName}
                        </Text>
                        <Text style={text}>
                            <strong>Customer Name:</strong> {customerName}
                        </Text>
                        <Text style={text}>
                            <strong>Customer Email:</strong> {customerEmail}
                        </Text>
                        <Text style={text}>
                            <strong>Maximum Chlorine Feed Rate:</strong> {maxChlorineFeedRate}{" "}
                            lbs/day as Cl₂
                        </Text>
                        <Text style={text}>
                            <strong>Pool Volume:</strong> {poolVolume} Gal
                        </Text>
                    </Section>
                    <Text style={footer}>
                        This is an automated message from the Truox Aquatics website.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const section = {
    padding: "0 48px",
};

const h1 = {
    color: "#1a1a1a",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.3",
    margin: "16px 0",
    padding: "0 48px",
};

const text = {
    color: "#1a1a1a",
    fontSize: "16px",
    lineHeight: "1.5",
    margin: "16px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "1.5",
    margin: "16px 0",
    padding: "0 48px",
};
