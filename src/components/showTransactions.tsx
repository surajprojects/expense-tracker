export default function ShowTransactions() {
    return (
        <>
            <div className="flex flex-col items-center">
                <p className="text-2xl">All Transactions</p>
                <table className="mt-5">
                    <thead>
                        <tr className="border-b-4 border-t-4 border-slate-600 bg-[#80ed99]">
                            <th className="p-4 text-center border-r-2 border-slate-600">S.No.</th>
                            <th className="p-4 text-center border-r-2 border-slate-600">Type</th>
                            <th className="p-4 text-center border-r-2 border-slate-600">Amount</th>
                            <th className="p-4 text-center border-r-2 border-slate-600">Category</th>
                            <th className="p-4 text-center border-r-2 border-slate-600">Date</th>
                            <th className="p-4 text-center border-r-2 border-slate-600">Description</th>
                            <th className="p-4 text-center border-r-2 border-slate-600">Payment Method</th>
                            <th className="p-4 text-center border-r-2 border-slate-600">Recurring</th>
                            <th className="p-4 text-center">Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2 border-slate-600 bg-[#f4e285]">
                            <td className="p-4 text-center border-r-2 border-slate-600">1</td>
                            <td className="p-4 text-center border-r-2 border-slate-600">Income</td>
                            <td className="p-4 text-center border-r-2 border-slate-600">Rs.500/-</td>
                            <td className="p-4 text-center border-r-2 border-slate-600">Freelance</td>
                            <td className="p-4 text-center border-r-2 border-slate-600">21-Feb-2025</td>
                            <td className="p-4 text-center border-r-2 border-slate-600">Tally Fees</td>
                            <td className="p-4 text-center border-r-2 border-slate-600">Cash</td>
                            <td className="p-4 text-center border-r-2 border-slate-600">Yes</td>
                            <td className="p-4 text-center">21-Feb-2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};