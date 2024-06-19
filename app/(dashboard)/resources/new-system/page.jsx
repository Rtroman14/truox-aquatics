import NewSystemForm from "@/components/MultiForm/NewSystemForm";

export default function NewSystemPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <NewSystemForm />
            </div>
        </div>
    );
}
