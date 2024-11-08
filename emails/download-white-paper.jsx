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

export default function DownloadWhitePaperNotification({ name, email }) {
    const previewText = `${name} Downloaded The White Paper`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            White Paper Download
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            A user has downloaded the white paper:
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Name:</strong> {name}
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            <strong>Email:</strong> {email}
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
