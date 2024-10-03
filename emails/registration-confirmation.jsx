import * as React from "react";
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
    Img,
} from "@react-email/components";

export default function RegistrationConfirmationEmail({ action, name }) {
    const previewText = `Your Distributor Portal registration has been ${
        action === "approve" ? "approved" : "denied"
    }`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Img
                            className="w-1/2 mx-auto"
                            src="https://truoxaquatics.com/_next/image?url=%2Fimages%2Flogo.png&w=750&q=75"
                        />
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Distributor Portal Access{" "}
                            {action === "approve" ? "Approved!" : "Denied"}
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">Dear {name},</Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            {action === "approve" ? (
                                <>
                                    We are pleased to inform you that your registration for the
                                    Distributor Portal has been approved. You now have access to all
                                    the features and resources available in the portal.
                                </>
                            ) : (
                                <>
                                    We regret to inform you that your registration for the
                                    Distributor Portal has been denied. If you believe this is an
                                    error or would like more information, please contact
                                    ryan@truox.com.
                                </>
                            )}
                        </Text>

                        {action === "approve" && (
                            <Section className="text-center mt-[32px] mb-[32px]">
                                <Button
                                    className="bg-blue-500 rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                                    href="https://truoxaquatics.com//dashboard"
                                >
                                    Access Dashboard
                                </Button>
                            </Section>
                        )}

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

                        <Text className="text-black text-[14px] leading-[24px]">
                            If you have any questions or need assistance, please don't hesitate to
                            contact ryan@truox.com.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
