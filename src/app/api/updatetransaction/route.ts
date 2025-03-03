import prisma from "@/db";
import { currentDate, formatDate } from "@/utils/dateAndTime";

export async function PUT(req: Request) {
    try {
        const updatedData: Record<string, any> = {};
        const data = await req.json();

        const setEditedOn = `${currentDate().date}-${currentDate().month}-${currentDate().year}`;
        updatedData.editedOn = setEditedOn;

        if (data.amount) updatedData.amount = data.amount;
        if (data.description) updatedData.description = data.description;
        if (data.paymentMethod) updatedData.paymentMethod = data.paymentMethod;
        if (data.recurring) updatedData.recurring = data.recurring;

        if (data.date) {
            const inputDate = formatDate(data.date);
            if (inputDate) {
                updatedData.date = inputDate;
            }
            else {
                return Response.json({ message: "Invalid format!!!", required: "yyyy-mm-dd" }, { status: 422 });
            }
        }

        if (data.category) {
            if (data.type) {
                const categoryData = await prisma.category.findMany({
                    where: {
                        AND: [
                            { name: data.category },
                            { type: data.type }
                        ]
                    },
                });

                if (categoryData.length > 0) {
                    updatedData.categoryId = categoryData[0].id;
                }
                else {
                    return Response.json({ message: "Category not found!!!" }, { status: 404 });
                }
            }
            else {
                return Response.json({ message: "Type field is required!!!" }, { status: 422 });
            }

        }

        if (data.type) {
            if (data.category) {
                const categoryData = await prisma.category.findMany({
                    where: {
                        AND: [
                            { name: data.category },
                            { type: data.type }
                        ]
                    },
                });

                if (categoryData.length > 0) {
                    updatedData.type = categoryData[0].type;
                    updatedData.categoryId = categoryData[0].id;
                }
                else {
                    return Response.json({ message: "Category not found!!!" }, { status: 404 });
                }
            }
            else {
                return Response.json({ message: "Category field is required!!!" }, { status: 422 });
            }

        }

        const editTransaction = await prisma.transaction.update({
            where: {
                id: Number(data.id),
                authorId: 1,
            },
            data: updatedData
        });

        return Response.json({ message: "Successfully edited the transactions!!!", editTransaction }, { status: 200 })
    }
    catch (error) {
        console.log(error);
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
};