import Email from "@/emails/new-user-approval";

export default function EmailPreview() {
    return (
        <div>
            <h1>Hello World</h1>

            <Email name="Ryan Roman" email="ryan@peakleads.io" company="Peakleads.io" />
        </div>
    );
}
