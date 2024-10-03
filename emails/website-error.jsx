import * as React from "react";
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";

export default function WebsiteError({ func, error }) {
    const previewText = `New website error in function: ${func}`;

    const logsUrl =
        "https://vercel.com/rtroman14s-projects/truox-website/logs?slug=app-future&slug=en-US&slug=rtroman14s-projects&slug=truox-website&slug=logs&page=1&timeline=past30Minutes";

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Website Error Detected
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            An error has occurred in the website:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Function:</strong> {func}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Error Message:</strong> {JSON.stringify(error, null, 4)}
                        </Text>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-blue-500 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href={logsUrl}
                            >
                                View Logs
                            </Button>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
