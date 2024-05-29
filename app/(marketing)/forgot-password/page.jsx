import ForgotPasswordForm from "./_components/ForgotPasswordForm";

export const metadata = {
    title: "WebAgent | Reset Password",
    description: "AI Assistant For Your Business",
};

export default function ResetPasswordPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="lg:p-8">
                    <ForgotPasswordForm />
                </div>
            </div>
        </div>
    );
}
