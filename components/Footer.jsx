import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-background py-16">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-6 px-5">
                <div>
                    <div className="flex justify-center">
                        <Logo />
                    </div>

                    <p className="text-center text-sm text-slate-600 [text-wrap:balance]">
                        Copyright © 2024 Cryptolyte®.com. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
