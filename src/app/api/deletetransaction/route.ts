import prisma from "@/db";

export async function DELETE(req: Request) {
    try {
        const data = await req.json();

        const transaction = await prisma.transaction.delete({
            where: {
                id: Number(data.id),
                authorId: Number(data.authorId),
            }
        });

        return Response.json({ message: "Successfully deleted the transaction!!!", transaction }, { status: 200 });
    }
    catch (error) {
        console.log(error);
        return Response.json({ message: "Internal Server Error" }, { status: 500 });
    }
};