import TransactionEntry from "./transactionEntry";

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
                        <TransactionEntry data={data} />
                    </tbody>
                </table>
            </div>
        </>
    );
};