import { mongoose } from "~/services/db.server";

interface IUser{
    name: string;
    email: string;
    password:string;
    phone:string;
    profileImg?:string;
    isAdmin?:boolean
}

const userSchema = new mongoose.Schema<IUser>({
    name:{
        type: String,
        required: true,
        minLength: 5,
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    profileImg:{
        type: String,
    },
    phone:{
        type: String,
        required:true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},{ timestamps: true })


const User = mongoose.model<IUser>('User',userSchema)

export async function getUsers() {
    const users = await User.find();
    return users;
  }
  
  export async function getUser(id:string) {
    const user = await User.findById(id).exec();
    return user;
  }
  
  export async function createUser(user :IUser) {
    const newUser = await User.create(user);
    return newUser;
  }
  
  export async function updateUser(user :IUser) {
    const updatedUser = await User.findOneAndUpdate(
      { email: user.email },
      user
    ).exec();
    return updatedUser;
  }


