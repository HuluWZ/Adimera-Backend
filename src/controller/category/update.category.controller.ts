//Importing the job model to the controller
import CategoryModel from "../../model/category.model";
import { Request, Response } from "express";
import {  loop } from "../../utils/db_functions/help";

export const update = async (req: Request, res: Response) => {
    const {
        name,
        description }:{
          name?:string,
          description?:string
        } = req.body;
    const {id} = req.params;
    const {body}= req;
    try {
        if (req.files.length >0) {
            const files = req.files;
            const {url} = await loop(files);
            const category = await CategoryModel.findByIdAndUpdate(id,{...body,image:url});
            return res.status(201).json({
                 category,
                 success: true,
                 message: "category updated sucessfully",
            });

        } else {
            const category = await CategoryModel.findByIdAndUpdate(id,body);
            console.log(body)
            return res.status(201).json({
                category,
                 success: true,
                 message: "category updated sucessfully",
            });
        } 
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
