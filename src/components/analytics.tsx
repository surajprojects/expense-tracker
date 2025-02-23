export default function Analytics({ data }: any) {
    let incomeStats = 0;
    let expensesStats = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "income") {
            incomeStats = incomeStats + data[i].amount;
        }
        else {
            expensesStats = expensesStats + data[i].amount;
        }
    }

    return (
        <>
            <div className="mt-14 shadow p-5 border">
                <p>Total income - Rs.{incomeStats}/-</p>
                <p>Total expenses - Rs.{expensesStats}/-</p>
                <p>Balance - Rs.{incomeStats + expensesStats}/-</p>
            </div>
        </>
    );
};