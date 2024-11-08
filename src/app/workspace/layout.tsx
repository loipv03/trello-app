import Header from "@/app/components/header/Header";
import Sidebar from "@/app/components/sidebar/Sidebar";

export default function WorkspaceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header />
            <main className="max-w-screen-lg h-full w-[90%] grid grid-cols-1 md:grid-cols-[max-content_auto] gap-x-5 m-auto">
                <Sidebar className="hidden md:block" />
                <div className="size-full">
                    {
                        children
                    }
                </div>
            </main>
        </div>
    );
}
