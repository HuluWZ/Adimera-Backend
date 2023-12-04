//Importing the job model to the controller
import ProductModel from "../../model/product.model";
import { Request, Response } from "express";

export const remove = async (req: Request, res: Response) => {
      const {id} = req.params;  
    try {
              const product = await  ProductModel.findByIdAndDelete(id)
              return res.status(201).json({
                product,
                 success: true,
                 message: "product deleted sucessfully",
              });
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
