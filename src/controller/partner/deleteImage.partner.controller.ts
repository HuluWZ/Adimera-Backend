import { Request, Response } from "express";
import { showSingle } from "../../utils/db_functions/partner.db";
export const deleteImage = async (req:Request, res:Response) => {
    //Destruct the data sent from req.body 
    // const uploader = async (path) => await uploads(path, "Images")
    const { partnerId, id} = req.params
    try {

        if (req.method === 'DELETE') {
           
            //we use uuidv4 to generate a random and unique id for the newss
            const verifyItem = await showSingle(partnerId); 
            if(!verifyItem){
                return res.status(404).json({
                    message: "partner not found", 
                    status: false
                })
            }
            const filesarray = verifyItem.files
            const newfilesarray = filesarray.filter((image)=>
                image.id !== "Images/" + id
            )
            verifyItem.files = newfilesarray
            verifyItem.save()
            return res.status(201).json({
                success: true,
                message: "image deleted sucessfully",
            })
        } else {
            return res.status(405).json({
                err: `${req.method} method not allowed`
            })
        }

    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error
        })
    }

}
