import prisma from "@/db";
import { getMonthNumber } from "@/utils/dateAndTime";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const transactions = await prisma.transaction.findMany({
            where: {
                id: Number(id),
                authorId: 1
            },
            include: {
                category: true
            }
        });

        if (!(transactions.length > 0)) {
            return Response.json({ message: "Transaction not found!!!" }, { status: 404 })
        }

        const formatDate = `${transactions[0].date.slice(7)}-${getMonthNumber(transactions[0].date.slice(3, 6))?.monthCodeFormat}-${transactions[0].date.slice(0, 2)}`

        return Response.json({ message: "Found transaction!!!", transactions, formatDate }, { status: 200 })
    }
    catch (error) {
        console.log(error);
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
};