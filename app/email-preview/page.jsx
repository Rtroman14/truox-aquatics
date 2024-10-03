import Email from "@/emails/registration-confirmation";

export default function EmailPreview() {
    return (
        <div>
            <Email action="approve" name="Ryan" />
        </div>
    );
}
