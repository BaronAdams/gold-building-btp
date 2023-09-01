import { mongoose } from "~/services/db.server";

interface IMeeting{
    name: string;
    email?: string;
    phone:string;
    description:string;
}

const meetingSchema = new mongoose.Schema<IMeeting>({
    name:{
        type: String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    phone:{
        type: String,
        required:true,
    },
    email:{
        type:String,
    }
},{timestamps:true})

const Meeting = mongoose.model<IMeeting>('Meeting',meetingSchema)

export async function createMeeting(meeting :IMeeting) {
        const newMeeting = await Meeting.create(meeting);
        return newMeeting;
}