//Importing the job model to the controller
import CategoryModel from "../../model/category.model";
import { Request, Response } from "express";
import {  loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
    //Destruct the data sent from req.body
    const {
        name,
        description } = req.body;

    try {
        if (req.method === "POST") {
            if (req.files) {
                const files = req.files;
                const {url} = await loop(files);
              const category = await new CategoryModel({
                 name: name,
                 description: description,
                 image: url,
              });

              category.save();
              return res.status(201).json({
                 category,
                 success: true,
                 message: "category created sucessfully",
              });

         } else {

              const category = await new CategoryModel({
                 name: name,
                 description: description
              });

              category.save();
              return res.status(201).json({
                  category,
                 success: true,
                 message: "category created sucessfully",
              });
         }
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
