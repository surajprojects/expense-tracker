import prisma from "@/db";
import { currentDate, formatDate } from "@/utils/dateAndTime";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const setCreatedOn = `${currentDate().date}-${currentDate().month}-${currentDate().year}`;
        let setDate = "";

        if (data.date) {
            const inputDate = formatDate(data.date);
            if (inputDate) {
                setDate = inputDate;
            }
            else {
                return Response.json({ message: "Invalid format!!!", required: "yyyy-mm-dd" }, { status: 422 });
            }
        }

        const categoryData = await prisma.category.findMany({
            where: {
                AND: [
                    { name: data.category },
                    { type: data.type }
                ]
            },
        });

        if (!(categoryData.length > 0)) {
            return Response.json({ message: "Category id not found!!!" }, { status: 404 })
        }

        const newTransaction = await prisma.transaction.create({
            data: {
                type: data.type,
                amount: Number(data.amount),
                categoryId: categoryData[0].id,
                date: setDate,
                description: data.description,
                paymentMethod: data.paymentMethod,
                recurring: data.recurring,
                createdOn: setCreatedOn,
                editedOn: "",
                authorId: 1,
            }
        });

        return Response.json({ message: "Successfully created the transactions!!!", newTransaction }, { status: 201 })
    }
    catch (error) {
        console.log(error);
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
};