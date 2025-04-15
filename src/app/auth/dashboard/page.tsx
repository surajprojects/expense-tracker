"use client"

import { useEffect } from "react";
import { toast } from 'react-toastify';

import ExpenseCard from "@/components/cards/expenseCard";
import MyBalanceCard from "@/components/cards/myBalanceCard";
import TotalBalance from "@/components/dashboard/totalBalance";

import { XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

export default function Dashboard() {
    useEffect(() => {
        toast.success('Success bro 🎉');
    }, [])

    const data = [
        { name: 'Jan', expense: 4000, income: 5000 },
        { name: 'Feb', expense: 3000, income: 4500 },
        { name: 'Mar', expense: 2000, income: 5200 },
    ]
    return (
        <>
            <div>
                <TotalBalance />
                <MyBalanceCard />
                <ExpenseCard />
                <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-3xl my-10 border">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis
                                tickFormatter={(value) => `Rs.${value}`}
                                width={80}
                            />
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-2 rounded text-sm shadow">
                                                <p>{payload[0].payload.name}</p>
                                                <p>💸 Expense: ₹{payload[0].payload.expense}</p>
                                                <p>💰 Income: ₹{payload[0].payload.income}</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="expense"
                                stroke="#408bfa"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="income"
                                stroke="#b4e466"
                                strokeWidth={3}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};