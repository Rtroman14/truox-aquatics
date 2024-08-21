import NewSystemForm from "@/components/MultiForm/NewSystemForm";

export default function NewSystemPage() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center py-8 px-4 md:px-8">
                <NewSystemForm />
            </div>
        </div>
    );
}
