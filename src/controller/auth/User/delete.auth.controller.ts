//Importing the job model to the controller
import UserModel from "../../../model/user.model";
import { Request, Response } from "express";

export const remove = async (req: Request, res: Response) => {
      const {id} = req.params;  
    try {
              const user = await  UserModel.findByIdAndDelete(id)
              return res.status(201).json({
                user,
                 success: true,
                 message: "user deleted sucessfully",
              });
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
