import IncomeExpenseInput from "@/components/incomeExpenseInput";

export default function AddTransaction() {
    return (
        <>
            <div className="flex flex-col items-center mt-16">
                <h4 className="text-3xl mb-4">Add Transaction</h4>
                <IncomeExpenseInput />
            </div>
        </>
    );
};