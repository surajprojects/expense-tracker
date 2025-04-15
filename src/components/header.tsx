import Image from "next/image"
import expenseTrackerLogo from "@/assets/expense-tracker-logo.png";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="mt-8 mx-16 flex">
                {/* Container 1 */}
                <div className="grow flex">
                    <Image
                        src={expenseTrackerLogo}
                        alt="Expense Tracker Logo"
                        width={35}
                        priority={true}
                        className="mix-blend-multiply"
                    />
                    <Link href="/" className="text-xl font-medium ">Expense Tracker</Link>
                </div>
                {/* Container 2 */}
                <nav className="grow">
                    <ul className="flex justify-evenly">
                        <li><Link href="#" className="hover:cursor-pointer">Home</Link></li>
                        <li><Link href="#" className="hover:cursor-pointer">About Us</Link></li>
                        <li><Link href="#" className="hover:cursor-pointer">Blog</Link></li>
                        <li><Link href="#" className="hover:cursor-pointer">Pages</Link></li>
                        <li><Link href="#" className="hover:cursor-pointer">Pricing</Link></li>
                    </ul>
                </nav>
                {/* Container 3 */}
                <div className="grow flex justify-end">
                    <button className="px-6">Log In</button>
                    <button className="bg-black text-white text-sm px-5 py-2 rounded-full shadow-md hover:cursor-pointer">Get Started</button>
                </div>
            </header>
        </>
    );
};