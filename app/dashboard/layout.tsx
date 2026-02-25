import Navbar from "@/components/navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen overflow-x-hidden">
            <Navbar />
            <main className="flex-1 ml-64 min-w-0 overflow-x-hidden">
                {children}
            </main>
        </div>
    );
}