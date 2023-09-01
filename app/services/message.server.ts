import { mongoose } from "~/services/db.server";

interface IMessage{
    email: string;
    message:string;
}

const messageSchema = new mongoose.Schema<IMessage>({
    message:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},{timestamps:true})

const Message = mongoose.model<IMessage>('Message',messageSchema)

export async function createMessage(message :IMessage) {
        const newMessage = await Message.create(message);
        return newMessage;
}