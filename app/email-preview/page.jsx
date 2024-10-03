import Email from "@/emails/website-error";

export default function EmailPreview() {
    return (
        <div>
            <Email func="Sign Up" error="There was an error signup up new user" />
        </div>
    );
}
