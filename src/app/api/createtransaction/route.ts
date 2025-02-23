import prisma from "@/db";
import { currentDate, getMonth } from "@/utils/dateAndTime";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const setCreatedOn = `${currentDate().date}-${currentDate().month}-${currentDate().year}`;
        const setDate = `${data.date.slice(8)}-${getMonth(Number(data.date.slice(5, 7))).month}-${data.date.slice(0, 4)}`;
        const categoryData = await prisma.category.findMany({
            where: {
                AND: [
                    { name: data.category },
                    { type: data.type }
                ]
            },
        });

        if (!(categoryData.length > 0)) {
            return Response.json({ message: "Unable to find the category id!!!" }, { status: 404 })
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