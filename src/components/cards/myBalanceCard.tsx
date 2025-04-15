import { ArrowDownIcon, ArrowUpIcon, ArrowsUpDownIcon } from "@heroicons/react/24/solid"

export default function MyBalanceCard() {
    return (
        <>
            <div className="bg-[#b4e466] flex p-5 rounded-3xl w-1/3 shadow-md">
                {/* Wrapper Container */}
                <div>
                    {/* Title */}
                    <p className="text-xl">My Balance</p>
                    {/* Balance */}
                    <p className="font-medium text-4xl my-3">$9,823,28</p>
                    {/* Description */}
                    <p className="text-xs">You made an extra $2,832,19 in this month.</p>
                </div>
                {/* Icons Container */}
                <div className="ml-10 flex justify-center items-center">
                    {/* Icon 1 */}
                    <div className="mx-2 flex flex-col items-center">
                        <ArrowDownIcon className="w-9 h-9 bg-white rounded-full p-2 text-black hover:shadow-sm hover:cursor-pointer" />
                        <p className="text-xs my-1">Send</p>
                    </div>
                    {/* Icon 2 */}
                    <div className="mx-2 flex flex-col items-center">
                        <ArrowUpIcon className="w-9 h-9 bg-white rounded-full p-2 text-black hover:shadow-sm hover:cursor-pointer" />
                        <p className="text-xs my-1">Receive</p>
                    </div>
                    {/* Icon 3 */}
                    <div className="mx-2 flex flex-col items-center">
                        <ArrowsUpDownIcon className="w-9 h-9 bg-white rounded-full p-2 text-black hover:shadow-sm hover:cursor-pointer" />
                        <p className="text-xs my-1">Convert</p>
                    </div>
                </div>
            </div>
        </>
    );
};