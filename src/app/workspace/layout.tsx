import Header from "@/app/components/header/Header";
import Sidebar from "@/app/components/sidebar/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header />
            <main className="max-w-screen-lg size-full grid grid-cols-[max-content_auto] gap-x-5 m-auto">
                <Sidebar />
                <div className="w-full">
                    {
                        children
                    }
                </div>
            </main>
        </div>
    );
}