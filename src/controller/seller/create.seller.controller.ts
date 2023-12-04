//Importing the job model to the controller
import SellerModel from "../../model/seller.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const create = async (req: Request, res: Response) => {

    const { firstName,lastName, email, password, phone ,address }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    address: string;
  } = req.body;

    try {
        if (req.method === "POST") {

            const hashed = await bcrypt.hash(password,10);
            const seller = await new SellerModel({
                 firstName,
                 lastName,
                 email,
                 password:hashed,
                 phone,
                 address
              });

              seller.save();
              return res.status(201).json({
                  success: true,
                  message: "Seller created sucessfully",
                  seller,
              });

        } else {
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
