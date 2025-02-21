import IncomeExpenseInput from "@/components/incomeExpenseInput";

export default function Home() {
  return (
    <>
      <div className="mt-28 flex flex-col items-center">
        <h1>Expense Tracker</h1>
        <IncomeExpenseInput />
      </div>
    </>
  );
};