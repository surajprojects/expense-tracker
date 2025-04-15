import Image from "next/image";
import Link from "next/link";
import expenseTrackerLogo from "@/assets/expense-tracker-logo.png";

export default function SideBar() {
    return (
        <>
            <aside className="bg-gray-50 p-5 w-1/6 min-h-screen flex flex-col">
                {/* Title Container */}
                <div className="mx-4 mt-2 flex">
                    <Image
                        src={expenseTrackerLogo}
                        alt="Expense Tracker Logo"
                        width={25}
                        priority={true}
                        className="mix-blend-multiply"
                    />
                    <Link href="/" className="text-xl font-medium hover:cursor-pointer">Expense Tracker</Link>
                </div>
                {/* Search Bar Container */}
                <div className="mx-4 my-8">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border-2 rounded-lg px-2 py-1 w-full outline-none focus:border-gray-300" />
                </div>
                {/* Wrapper Container */}
                <nav className="grow flex flex-col justify-between">
                    {/* Navigation Routes */}
                    <div className="flex flex-col">
                        <Link href="#" className="mb-1 px-4 py-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer">Dashboard</Link>
                        <Link href="#" className="my-1 px-4 py-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer">Transactions</Link>
                        <Link href="#" className="my-1 px-4 py-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer">Savings</Link>
                        <Link href="#" className="my-1 px-4 py-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer">Reports</Link>
                        <Link href="#" className="my-1 px-4 py-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer">Analytics</Link>
                    </div>
                    {/* Control Settings */}
                    <div className="flex flex-col">
                        <Link href="#" className="my-1 px-4 py-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer">Settings</Link>
                        <Link href="#" className="my-1 px-4 py-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer">Help Center</Link>
                    </div>
                </nav>
            </aside>
        </>
    );
};