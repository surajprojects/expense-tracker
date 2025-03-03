import ActionBtns from "./actionBtns"

interface transactionDataType {
    data: {
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
    }[]
};

export default function TransactionEntry({ data }: transactionDataType) {
    return (
        <>
            {data.length === 0 && <tr className="border-b-4 border-slate-600 bg-[#f4e285]">
                <td colSpan={9} className="p-5 text-center">No transactions!!!</td>
            </tr>}
            {data.length > 0 && data.map((transactionData, index) => {
                if (index === (data.length - 1)) {
                    return <tr key={index} className="border-b-4 border-slate-600 bg-[#f4e285]">
                        <td className="p-4 text-center border-r-2 border-slate-600">{index + 1}</td>
                        <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.type}</td>
                        <td className="p-4 text-center border-r-2 border-slate-600">Rs.{transactionData.amount}/-</td>
                        <td className="p-4 capitalize text-center border-r-2 border-slate-600">{transactionData.category.name}</td>
                        <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.date}</td>
                        <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.description}</td>
                        <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.paymentMethod}</td>
                        <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.recurring ? "Yes" : "No"}</td>
                        <td className="p-4 text-center">{transactionData.createdOn}<ActionBtns id={transactionData.id} /></td>
                    </tr>
                } else {
                    return <tr key={index} className="border-b-2 border-slate-600 bg-[#f4e285]">
                        <td className="p-4 text-center border-r-2 border-slate-600">{index + 1}</td>
                        <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.type}</td>
                        <td className="p-4 text-center border-r-2 border-slate-600">Rs.{transactionData.amount}/-</td>
                        <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.category.name}</td>
                        <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.date}</td>
                        <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.description}</td>
                        <td className="p-4 text-center capitalize border-r-2 border-slate-600">{transactionData.paymentMethod}</td>
                        <td className="p-4 text-center border-r-2 border-slate-600">{transactionData.recurring ? "Yes" : "No"}</td>
                        <td className="p-4 text-center">{transactionData.createdOn}<ActionBtns id={transactionData.id} />
                        </td>
                    </tr>
                }
            })}


        </>
    );
};