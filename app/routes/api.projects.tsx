import { json } from "@remix-run/node";
import { getProjects } from "~/services/project.server";


export async function loader() {
    try {
      const projects = await getProjects() 
      return json({ success: true, data: projects },{status:200});
    } catch (error) {
      return json({ success: false, message:'Une erreur est survenue', error },{status:500});
    }
}