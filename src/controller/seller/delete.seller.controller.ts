//Importing the job model to the controller
import SellerModel from "../../model/seller.model";
import { Request, Response } from "express";
import {  loop } from "../../utils/db_functions/help";

export const remove = async (req: Request, res: Response) => {
      const {id} = req.params;  
    try {
              const seller = await  SellerModel.findByIdAndDelete(id)
              return res.status(201).json({
                seller,
                 success: true,
                 message: "seller deleted sucessfully",
              });
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
