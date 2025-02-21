export default function IncomeExpenseInput() {
    return (
        <>
            <div id="wrapper">
                <div>
                    <p>Type</p>
                    <div>
                        <label htmlFor="income">Income</label>
                        <input type="radio" name="type" id="income" />
                    </div>
                    <div>
                        <label htmlFor="expense">Expense</label>
                        <input type="radio" name="type" id="expense" />
                    </div>
                </div>

                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" />
                </div>

                <div>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category">
                        <option value="food">Food</option>
                        <option value="rent">Rent</option>
                        <option value="salary">Salary</option>
                        <option value="shopping">Shopping</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" />
                </div>

                <div>
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select name="paymentMethod" id="paymentMethod  ">
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="upi">UPI</option>
                        <option value="credit">Credit</option>
                    </select>
                </div>

                <div>
                    <p>Recurring</p>
                    <div>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" name="recurring" id="yes" />
                    </div>
                    <div>
                        <label htmlFor="no">No</label>
                        <input type="radio" name="recurring" id="no" />
                    </div>
                </div>

            </div>
        </>
    );
};