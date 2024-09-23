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

export default function NewUserApprovalEmail({ name, email, company }) {
    const previewText = `New user registration: ${name}`;

    const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000";

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            New User Registration
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            A new user has registered to the Distributor Portal:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Name:</strong> {name}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Email:</strong> {email}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Company:</strong> {company}
                        </Text>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Text className="text-black text-[14px] leading-[24px]">
                            Please approve or deny this registration:
                        </Text>

                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Button
                                className="bg-green-500 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3 mr-4"
                                href={`${baseUrl}/api/register/${email}/approve`}
                            >
                                Approve
                            </Button>
                            <Button
                                className="bg-red-500 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                href={`${baseUrl}/api/register/${email}/deny`}
                            >
                                Deny
                            </Button>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
