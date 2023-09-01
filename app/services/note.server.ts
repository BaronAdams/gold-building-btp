import { mongoose } from "~/services/db.server";

interface INoteProject{
    author: string;
    content:string;
}

const noteProjectSchema = new mongoose.Schema<INoteProject>({
    author:{
        type: String,
        required:true,
    },
    content:{
        type : String,
        required:true  
    }
},{timestamps:true})

const NoteProject = mongoose.model<INoteProject>('NoteProject',noteProjectSchema)


export async function getNotes() {
    const notes = await NoteProject.find();
    return notes;
  }
  
  export async function getNote(id:string) {
    const note = await NoteProject.findById(id).exec();
    return note;
  }
  
  export async function createNote(note :INoteProject) {
    const newNote = await NoteProject.create(note);
    return newNote;
  }
  