export default function SecondSection() {
    return (
        <>
            <section className="flex justify-center my-16 bg-gray-100 rounded-3xl p-5">
                {/* Title Container */}
                <div className="flex flex-col items-center font-semibold text-5xl">
                    <span>
                        <span className="text-blue-500">Empower </span>Your Financial
                    </span>
                    <span>Future with us</span>
                </div>
                {/* Wrapper Container */}
                <div className="flex">
                    {/* Left Container */}
                    <div>

                    </div>
                    {/* Right Container */}
                    <div>
                        {/* Row 1 */}
                        <div>
                            <p className="text-4xl font-semibold">Comprehensive Financial <span className="text-blue-500">Analytics</span> Dashboard</p>
                            <p className="text-gray-500">Gain real-time visibility into your financial performance with intuitive dashboards.</p>
                        </div>
                        {/* Row 2 */}
                        <ul className="border-t">
                            <li className="font-medium">Keep tracking balance</li>
                            <li className="font-medium">Receive money easily</li>
                            <li className="font-medium">Send money easily</li>
                            <li className="font-medium">Convert currency</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};