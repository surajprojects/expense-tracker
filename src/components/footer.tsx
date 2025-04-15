import Image from "next/image";
import expenseTrackerLogo from "@/assets/expense-tracker-logo.png";

export default function Footer() {
    return (
        <>
            <footer className="mb-8 mx-16">
                {/* Parent of Container 1 & 2 */}
                <div className="flex justify-between">
                    {/* Container 1 */}
                    <div className="grow flex flex-col p-5">
                        <div className="flex mb-4">
                            <Image
                                src={expenseTrackerLogo}
                                alt="Expense Tracker Logo"
                                width={40}
                                priority={true}
                                className="mix-blend-multiply"
                            />
                            <p className="text-2xl font-medium">Expense Tracker</p>
                        </div>
                        <p className="text-gray-500 flex flex-col">
                            <span>Welcome to Expense Tracker, where financial</span>
                            <span>management meets simplicity and efficiency.</span>
                        </p>
                        {/* Social media icons */}
                        <div className="mt-4">
                            <span className="pr-2">Facebook</span>
                            <span className="px-2">Instagram</span>
                            <span className="px-2">Twitter</span>
                            <span className="pl-2">LinkedIn</span>
                        </div>
                    </div>
                    {/* Container 2 */}
                    <div className="grow flex justify-between">
                        {/* Column 1 */}
                        <ul className="flex flex-col">
                            <li className="font-medium mb-3">Company</li>
                            <li className="text-gray-500 text-sm my-2">Home</li>
                            <li className="text-gray-500 text-sm my-2">About Us</li>
                            <li className="text-gray-500 text-sm my-2">Affiliate Program</li>
                            <li className="text-gray-500 text-sm my-2">Careers</li>
                        </ul>
                        {/* Column 2 */}
                        <ul className="flex flex-col">
                            <li className="font-medium mb-3">Product</li>
                            <li className="text-gray-500 text-sm my-2">Overview</li>
                            <li className="text-gray-500 text-sm my-2">Features</li>
                            <li className="text-gray-500 text-sm my-2">Integrations</li>
                            <li className="text-gray-500 text-sm my-2">Pricing</li>
                        </ul>
                        {/* Column 3 */}
                        <ul className="flex flex-col">
                            <li className="font-medium mb-3">Resources</li>
                            <li className="text-gray-500 text-sm my-2">Blog</li>
                            <li className="text-gray-500 text-sm my-2">Podcast</li>
                            <li className="text-gray-500 text-sm my-2">Webinars</li>
                            <li className="text-gray-500 text-sm my-2">Press</li>
                        </ul>
                        {/* Column 4 */}
                        <ul className="flex flex-col">
                            <li className="font-medium mb-3">Support</li>
                            <li className="text-gray-500 text-sm my-2">Request a Demo</li>
                            <li className="text-gray-500 text-sm my-2">Contact Us</li>
                            <li className="text-gray-500 text-sm my-2">Report a Bug</li>
                        </ul>
                    </div>
                </div>
                {/* Container 3 */}
                <div className="mt-6 p-5 flex justify-between bg-gray-100 rounded-3xl">
                    <p className="text-gray-500 text-sm">&copy; 2025 All Rights Reserved</p>
                    <div className="flex">
                        <p className="mr-5 text-gray-500 text-sm">Terms & Conditions</p>
                        <p className="text-gray-500 text-sm">Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </>
    );
};