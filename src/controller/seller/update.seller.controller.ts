//Importing the job model to the controller
import SellerModel from "../../model/seller.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const update = async (req: Request, res: Response) => {

    const { firstName,lastName, email, password, phone ,address }: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    address?: string;
  } = req.body;
  const {id} = req.params;

    try {
         let updateData = {}
          if(password != undefined ){
              const hashed = await bcrypt.hash(password,10);
               updateData = {              
                 firstName,
                 lastName,
                 email,
                 password:hashed,
                 phone,
                 address
              }
            }else{
               updateData = {              
                 firstName,
                 lastName,
                 email,
                 phone,
                 address
              }

            }
             const seller = await SellerModel.findByIdAndUpdate(id,updateData);

              return res.status(201).json({
                  success: true,
                  message: "Seller updated sucessfully",
                  seller,
              });
        
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
