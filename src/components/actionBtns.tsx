"use client"

import { useState } from "react";
import EditTransaction from "./editTransaction";

async function removeTransaction(id: number) {
    try {
        const BASE_URL = "http://localhost:3000/";
        const response = await fetch(`${BASE_URL}api/deletetransaction`, {
            method: "DELETE",
            body: JSON.stringify({ id, authorId: 1 })
        });
        const result = await response.json();
        if (response.ok) {
            return result.transactions;
        }
        else {
            console.warn("Internal Server Error!!!");
            return false;
        }
    }
    catch (error) {
        console.warn("Failed to submit the form!");
        alert("Failed to connect to server.");
    }
};

export default function ActionBtns({ id }: { id: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleDelete = async () => {
        const data = await removeTransaction(id);
        if (data !== false) {
            toggleMenu();
        }
    };

    const handleEdit = async () => {
        toggleMenu();
        setIsEdit(true);
    };

    return (
        <>
            {isEdit && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-50 z-40">
                    <div className="flex flex-col items-center my-32">
                        <p className="text-2xl underline mb-5 bg-gray-200 translate-y-1">Edit Transaction</p>
                        <button onClick={() => setIsEdit(false)} className="absolute translate-x-32 translate-y-16 hover:bg-[#f5e5bd] rounded-md">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729" />
                            </svg>
                        </button>
                        <EditTransaction id={id} handleEdit={setIsEdit} />
                    </div>
                </div>
            )}

            <button onClick={toggleMenu} className="ml-4 hover:bg-[#ead775] rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" width={4} viewBox="0 0 125 512.73">
                    <path d="M62.5 0C97.01 0 125 27.99 125 62.5c0 34.51-27.99 62.49-62.5 62.49C27.99 124.98 0 97.01 0 62.5 0 27.99 27.99 0 62.5 0zm0 387.74c34.51 0 62.5 27.99 62.5 62.5 0 34.52-27.99 62.49-62.5 62.49-34.51 0-62.5-27.98-62.5-62.49 0-34.51 27.99-62.5 62.5-62.5zm0-193.87c34.51 0 62.5 27.99 62.5 62.5 0 34.51-27.99 62.5-62.5 62.5-34.51-.01-62.5-27.99-62.5-62.5 0-34.51 27.99-62.5 62.5-62.5z"></path>
                </svg>
            </button >
            {isOpen && <div className="absolute bg-white shadow-md p-2 w-20 rounded-md border ml-16">
                <button onClick={handleEdit} className="hover:bg-gray-100 px-2 rounded">Edit</button>
                <button onClick={handleDelete} className="hover:bg-gray-100 px-2 rounded">Delete</button>
            </div>
            }
        </>
    );
};