import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="w-full shadow-md px-24 py-6 flex justify-between">
                <p>Expense Tracker</p>
                <nav>
                    <Link href="">Sign In</Link>
                    <Link href="">Sign Up</Link>
                </nav>
            </header>
        </>
    );
};