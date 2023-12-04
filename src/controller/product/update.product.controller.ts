//Importing the job model to the controller
import ProductModel from "../../model/product.model";
import { Request, Response } from "express";
import {  Mloop } from "../../utils/db_functions/help";

export const update = async (req: Request, res: Response) => {
   const { name, description, code, price, category, color, size, quantity, totalRate } = req.body;
    const {id} = req.params;
    const {body}= req;
    try {
        if (req.files.length >0) {
            const files = req.files;
            const urls = await Mloop(files);
            const imageUrl = [];
            urls.map((item)=> imageUrl.push(item.url));
            const product = await ProductModel.findByIdAndUpdate(id,{...body,image:imageUrl});
            return res.status(201).json({
                 product,
                 success: true,
                 message: "product updated sucessfully",
            });

        } else {
            const product = await ProductModel.findByIdAndUpdate(id,body);
            console.log(body)
            return res.status(201).json({
                product,
                 success: true,
                 message: "product updated sucessfully",
            });
        } 
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
