"use client"

import { useState } from "react";

export default function IncomeExpenseInput() {

    const [formData, setFormData] = useState({
        type: "income",
        amount: "",
        category: "",
        description: "",
        paymentMethod: "cash",
        recurring: false,
    });

    const handleChange = (evt: any) => {
        const changedField = evt.target.name;
        const newValue = changedField === "recurring" ? evt.target.checked : evt.target.value;
        setFormData((currData) => {
            return {
                ...currData,
                [changedField]: newValue
            };
        });
    };

    const handleSubmit = () => {
        console.log(formData);
        setFormData({
            type: "income",
            amount: "",
            category: "",
            description: "",
            paymentMethod: "cash",
            recurring: false,
        })
    };

    return (
        <>
            <div id="wrapper" className="bg-[#faedcd] p-8 rounded-md border shadow w-80">
                <div className="mb-3 flex flex-col">
                    <label htmlFor="type" className="mb-2">Type</label>
                    <select name="type" id="type" className="rounded-sm hover:cursor-pointer p-1" value={formData.type} onChange={handleChange}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="amount" className="mb-2">Amount</label>
                    <input type="number" name="amount" id="amount" value={formData.amount} onChange={handleChange} className="rounded-sm hover:cursor-pointer p-1" />
                </div>

                {formData.type === "income" ?
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="category" className="mb-2">Category</label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange} className="rounded-sm hover:cursor-pointer p-1">
                            <option value="salary">Salary</option>
                            <option value="freelance">Freelance</option>
                            <option value="investment">Investment</option>
                            <option value="business">Business</option>
                            <option value="rental">Rental</option>
                            <option value="bonus">Bonus</option>
                            <option value="interest">interest Earned</option>
                            <option value="refund">Refund</option>
                            <option value="gift">Gift</option>
                            <option value="donation">Donation</option>
                            <option value="misc">Miscellaneous</option>
                        </select>
                    </div>
                    :
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="category" className="mb-2">Category</label>
                        <select name="category" id="category" value={formData.category} onChange={handleChange} className="rounded-sm hover:cursor-pointer p-1">
                            <option value="food">Food</option>
                            <option value="rent">Rent</option>
                            <option value="shopping">Shopping</option>
                            <option value="travel">Travel</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="transport">Transport</option>
                            <option value="bill">Bill</option>
                            <option value="health">Health</option>
                            <option value="education">Education</option>
                            <option value="gift">Gift</option>
                            <option value="donation">Donation</option>
                            <option value="penalty">Penalty</option>
                            <option value="misc">Miscellaneous</option>
                        </select>
                    </div>
                }

                <div className="mb-3 flex flex-col">
                    <label htmlFor="description" className="mb-2">Description</label>
                    <input type="text" name="description" id="description" value={formData.description} onChange={handleChange} className="rounded-sm hover:cursor-pointer p-1" />
                </div>

                <div className="mb-3 flex flex-col">
                    <label htmlFor="paymentMethod" className="mb-2">Payment Method</label>
                    <select name="paymentMethod" id="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="rounded-sm hover:cursor-pointer p-1">
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="upi">UPI</option>
                        <option value="credit">Credit</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="recurring" className="mr-2">Recurring</label>
                    <input type="checkbox" name="recurring" id="recurring" checked={formData.recurring} onChange={handleChange} className="rounded-sm w-4 h-4 translate-y-1 hover:cursor-pointer p-1" />
                </div>
                <button type="button" onClick={handleSubmit} className="w-full bg-green-500 text-white rounded py-1 border hover:border-black shadow hover:cursor-pointer">Add</button>
            </div>
        </>
    );
};