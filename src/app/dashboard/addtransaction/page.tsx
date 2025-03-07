import IncomeExpenseInput from "@/components/incomeExpenseInput";

export default function AddTransaction() {
    return (
        <>
            <div className="flex flex-col items-center my-14">
                <p className="text-2xl underline mb-5">Add Transaction</p>
                <IncomeExpenseInput />
            </div>
        </>
    );
};