import { WifiIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/solid"

export default function ExpenseCard() {
    return (
        <>
            <div className="bg-[#408bfa] p-5 rounded-3xl w-1/6 shadow-md">
                {/* Container 1 */}
                <div className="flex items-center">
                    <WifiIcon className="w-14 h-14 text-white bg-white bg-opacity-20 rounded-full p-4" />
                    <p className="text-white text-3xl mx-5">Spotify</p>
                </div>
                {/* Container 2 */}
                <div className="flex justify-between items-end mt-2">
                    {/* Subscription Wrapper */}
                    <p className="text-white"><span className="text-5xl">$13</span><span className="text-sm opacity-75">/month</span></p>
                    {/* Switch Container */}
                    <div className="bg-white rounded-full p-1">
                        {/* Icon 1 */}
                        <XMarkIcon className="w-9 h-9 text-gray-700 p-2 hover:cursor-pointer hover:bg-gray-200 rounded-full mb-1" />
                        {/* Icon 2 */}
                        <CheckIcon className="w-9 h-9 text-white p-2 bg-[#408bfa] rounded-full hover:cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    );
};