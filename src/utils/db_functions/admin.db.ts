import { AdminModelID } from "../../interfaces/admin.interface";
import UserModel from "../../model/admin.model";

export async function getAllUsers() {
    return await UserModel.find().sort({_id:-1}) 
}

export async function showUsersbyId(id: string) {
    return await UserModel.findOne({_id: id})
}

export async function showUsersbyEmail(email: string) {
    return await UserModel.findOne({email: email}) as AdminModelID
}
