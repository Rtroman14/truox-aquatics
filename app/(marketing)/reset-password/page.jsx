import ResetPasswordForm from "./_components/ResetPasswordForm";

export const metadata = {
    title: "CryptoLyte | Reset Passowrd",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

export default function ResetPasswordPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="lg:p-8">
                    <ResetPasswordForm />
                </div>
            </div>
        </div>
    );
}
