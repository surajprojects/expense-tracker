import Header from "@/components/dashboard/header";
import SideBar from "@/components/dashboard/sideBar";

export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="flex-grow">
                    <Header />
                    <main className="p-5">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
};