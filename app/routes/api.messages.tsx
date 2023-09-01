import { json, type ActionArgs } from "@remix-run/node";
import { createMessage } from "~/services/message.server";

export async function action({request}:ActionArgs) {
    const { email, message } = await request.json()
    try {
        await createMessage({ email, message })
        return json({success:true, message:"Message envoyée"})
    } catch (error) {
        return json({message:'Une erreur est survenue', error},{ status:400 })
    }
}