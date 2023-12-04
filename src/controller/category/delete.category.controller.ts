//Importing the job model to the controller
import CategoryModel from "../../model/category.model";
import { Request, Response } from "express";
import {  loop } from "../../utils/db_functions/help";

export const remove = async (req: Request, res: Response) => {
      const {id} = req.params;  
    try {
              const category = await  CategoryModel.findByIdAndDelete(id)
              return res.status(201).json({
                category,
                 success: true,
                 message: "category deleted sucessfully",
              });
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
