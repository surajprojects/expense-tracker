"use client"

import { useState } from "react";

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
    };

    return (
        <>
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