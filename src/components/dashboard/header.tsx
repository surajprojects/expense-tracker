import { GiftIcon, MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline"

export default function Header() {
    return (
        <>
            <header className="p-5 flex justify-between">
                {/* Container 1 */}
                <div>
                    <p className="text-2xl font-medium">Dashboard</p>
                </div>
                {/* Container 2 */}
                <div className="flex">
                    {/* Search Bar Container */}
                    <div className="border flex p-1 rounded-md shadow">
                        <div>
                            <MagnifyingGlassIcon className="w-6 h-6 mr-1" />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="searchInput"
                                name="searchInput"
                                placeholder="Search"
                                className="outline-none"
                            />
                        </div>
                    </div>
                    {/* Wrapper Container */}
                    <div className="mx-2 flex">
                        <GiftIcon className="w-8 h-8 p-1 border shadow-sm rounded-md hover:cursor-pointer hover:shadow-md" />
                        <BellIcon className="w-8 h-8 p-1 mx-2 border shadow-sm rounded-md hover:cursor-pointer hover:shadow-md" />
                    </div>
                </div>
            </header>
        </>
    );
};