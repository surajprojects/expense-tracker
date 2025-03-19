import Image from "next/image"
import expenseTrackerLogo from "@/assets/expense-tracker-logo.png";

export default function Header() {
    return (
        <>
            <header className="flex">
                <div className="grow flex">
                    <Image
                        src={expenseTrackerLogo}
                        alt="Expense Tracker Logo"
                        width={35}
                        priority={true}
                    />
                    <p className="text-xl font-medium ">Expense Tracker</p>
                </div>
                <nav className="grow">
                    <ul className="flex justify-evenly">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Pages</li>
                        <li>Pricing</li>
                    </ul>
                </nav>
                <div className="grow flex justify-end">
                    <button className="px-6">Log In</button>
                    <button className="bg-black text-white text-sm px-5 py-2 rounded-full shadow-md hover:cursor-pointer">Get Started</button>
                </div>
            </header>
        </>
    );
};