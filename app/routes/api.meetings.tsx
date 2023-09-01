import { json, type ActionArgs } from "@remix-run/node";
import { createMeeting } from "~/services/meeting.server";

export async function action({request}:ActionArgs) {
    const { name, email, phone, description } = await request.json()
    try {
        await createMeeting({ name, email, phone, description })
        return json({success:true, message:"Message envoyée"})
    } catch (error) {
        return json({message:'Une erreur est survenue', error},{ status:400 })
    }
}