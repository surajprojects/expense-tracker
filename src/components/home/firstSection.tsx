export default function FirstSection() {
    return (
        <>
            <section className="mt-16 flex">
                {/* Container 1 */}
                <div className="grow">
                    {/* Tag */}
                    <p className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-2 rounded-full inline">Finance Solutions for You</p>
                    {/* Title */}
                    <div className="my-3 flex flex-col text-6xl font-semibold">
                        <span>Maximize</span>
                        <span>Your <span className="text-blue-500">Financial</span></span>
                        <span>Potential</span>
                    </div>
                    {/* Description */}
                    <p className="text-gray-500">Welcome to Expense Tracker, where financial management meets simplicity and efficiency.</p>
                    {/* Call-to-Action */}
                    <button className="mt-8 px-11 py-5 rounded-full text-sm bg-black text-white shadow-md hover:cursor-pointer">Get Started</button>
                </div>
                {/* Container 2 */}
                <div className="grow">

                </div>
            </section>
        </>
    );
};