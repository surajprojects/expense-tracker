import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="w-full shadow-md px-24 py-6 flex justify-between">
                <p className="text-xl">Expense Tracker</p>
                <nav>
                    <Link href="" className="mx-3">Sign In</Link>
                    <Link href="" className="mx-3">Sign Up</Link>
                </nav>
            </header>
        </>
    );
};