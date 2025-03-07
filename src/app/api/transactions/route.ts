import prisma from "@/db";

export async function GET() {
    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                authorId: 1
            },
            include: {
                category: true
            },
            orderBy: {
                id: "desc"
            }
        });

        if (!transactions) {
            return Response.json({ message: "No transactions found!!!" }, { status: 404 })
        }

        return Response.json({ message: "Found all transactions!!!", transactions }, { status: 200 })
    }
    catch (error) {
        console.log(error);
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
};