import Analytics from "./analytics";

async function getTransactions() {
    const BASE_URL = "http://localhost:3000/";
    const result = await fetch(`${BASE_URL}api/alltransactions`);
    const res = await result.json();
    return res.transactions;
};

interface transactionDataType {
    id: number,
    type: string,
    description: string,
    amount: number,
    date: string,
    paymentMethod: string,
    createdOn: string,
    recurring: boolean,
    category: {
        id: number,
        name: string,
        type: string,
    }
};

export default async function ShowTransactions() {
    const data: transactionDataType[] = await getTransactions();
    return (
        <>
            <div className="mt-20 flex flex-col items-center">
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
                        {data.length === 0 && <tr className="border-b-4 border-slate-600 bg-[#f4e285]">
                            <td colSpan={9} className="p-5 text-center">No transactions!!!</td>
                        </tr>}
                        {data.length > 0 && data.map((transactionData, index) => {
                            if (index === (data.length - 1)) {
                                return <tr key={index} className="border-b-4 border-slate-600 bg-[#f4e285]">
                                    <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.id}</td>
                                    <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.type}</td>
                                    <td className="p-4 text-center border-r-2 border-slate-600">Rs.{transactionData.amount}/-</td>
                                    <td className="p-4 capitalize text-center border-r-2 border-slate-600">{transactionData.category.name}</td>
                                    <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.date}</td>
                                    <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.description}</td>
                                    <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.paymentMethod}</td>
                                    <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.recurring ? "Yes" : "No"}</td>
                                    <td className="p-4 text-center">{transactionData.createdOn}</td>
                                </tr>
                            } else {
                                return <tr key={index} className="border-b-2 border-slate-600 bg-[#f4e285]">
                                    <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.id}</td>
                                    <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.type}</td>
                                    <td className="p-4 text-center border-r-2 border-slate-600">Rs.{transactionData.amount}/-</td>
                                    <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.category.name}</td>
                                    <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.date}</td>
                                    <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.description}</td>
                                    <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.paymentMethod}</td>
                                    <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.recurring ? "Yes" : "No"}</td>
                                    <td className="p-4 text-center">{transactionData.createdOn}</td>
                                </tr>
                            }
                        })}
                    </tbody>
                </table>
                <Analytics data={data} />
            </div>
        </>
    );
};