import { type LoaderArgs, json } from "@remix-run/node";
import { getProject } from "~/services/project.server";


export async function loader({ params }: LoaderArgs) {
  try {
    //@ts-ignore
    const project = await getProject(params.id) 
    return json({ success: true, data: project },{status:200});
  } catch (error) {
    return json({ success: false, message:'Une erreur est survenue', error },{status:500});
  }
}