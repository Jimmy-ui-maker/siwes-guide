import { SiwesTableGuide } from "@/models/Tables";

export async function GET(req){
    await db.connect()
    try {
        const userCount = await SiwesTableGuide.countDocuments();
        const totalCount = await SiwesTableGuide.countDocuments();
        const kadunaCount = await SiwesTableGuide.countDocuments({status: "Kaduna"});
        const kanoCount = await SiwesTableGuide.countDocuments({status: "Kano"});
        const kebbiCount = await SiwesTableGuide.countDocuments({status: "Kebbi"});
        const stats = {
            userCount,
            totalCount,
            kadunaCount,
            kanoCount,
            kebbiCount,
        }
        return new Response(JSON.stringify(stats), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), {status: 500})
    }
}