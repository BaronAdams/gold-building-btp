import { mongoose } from "~/services/db.server";

interface IProject{
    title: string;
    place:string;
    status:'Pas débuté'|'En cours'|'Terminé';
    projectImgs:string[];
}

const projectSchema = new mongoose.Schema<IProject>({
    title:{
        type: String,
        required:true,
    },
    status:{
        type : String,
        required:true  
    },
    projectImgs:{
        type:[String],
        required:true
    }
},{timestamps:true})

const Project = mongoose.model<IProject>('Project',projectSchema)


export async function getProjects() {
    const projects = await Project.find();
    return projects;
  }
  
  export async function getProject(id:string) {
    const project = await Project.findById(id).exec();
    return project;
  }
  
  export async function createProject(project :IProject) {
    const newProject = await Project.create(project);
    return newProject;
  }
  
  export async function updateProject(project :IProject) {
    //@ts-ignore
    const updatedProject = await Project.findOneAndUpdate(project._id,{...project}).exec();
    return updatedProject;
  }