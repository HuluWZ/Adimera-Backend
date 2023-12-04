//Importing the job model to the controller
import ProductModel from "../../model/product.model";
import { Request, Response } from "express";
import {  Mloop } from "../../utils/db_functions/help";

export interface IncomingMessage extends Request {
  userData?: UserDataType ;
}

//creating and exporting the userdatatype which is signed by the JWT SCECRET
export interface UserDataType {
  email: string;
  userId: string;
}
export const create = async (req: IncomingMessage, res: Response) => {
    //Destruct the data sent from req.body
  const { name, description, code, price, category, color, size, quantity, totalRate } = req.body;
  const {userId} = req.userData;

    try {
        if (req.method === "POST") {
            if (req.files) {
                const files = req.files;
                const urls = await Mloop(files);
                const imageUrl = [];
                urls.map((item)=> imageUrl.push(item.url));
              const product = await new ProductModel({
                 name,
                 description,
                 image: imageUrl,
                 uploadedBy:userId,
                 category,
                 code, 
                 price, 
                 color, 
                 size, 
                 quantity, 
                 totalRate
              });

              product.save();
              return res.status(201).json({
                  success: true,
                  message: "category created sucessfully",
                  product,
              });

         } else {
              const product = await new ProductModel({
                 name,
                 description,
                 image: [],
                 uploadedBy:userId,
                 category,
                 code, 
                 price, 
                 color, 
                 size, 
                 quantity, 
                 totalRate
              });

              product.save();
              return res.status(201).json({
                  success: true,
                  message: "category created sucessfully",
                  product,
              });
         }
        } else {
            return res.status(405).json({
                success:false,
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
