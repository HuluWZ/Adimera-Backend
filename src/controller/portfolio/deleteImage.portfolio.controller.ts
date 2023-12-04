import { Request, Response } from "express";
import { showSingle } from "../../utils/db_functions/portfolio.db";
export const deleteImage = async (req:Request, res:Response) => {
    //Destruct the data sent from req.body 
    // const uploader = async (path) => await uploads(path, "Images")
    const { portfolioId, id} = req.params
    try {

        if (req.method === 'POST') {
           
            //we use uuidv4 to generate a random and unique id for the portfolios
            const verifyportfolio = await showSingle(portfolioId); 
            if(!verifyportfolio){
                return res.status(404).json({
                    message: "portfolio not found", 
                    status: false
                })
            }
            const filesarray = verifyportfolio.files
            const newfilesarray = filesarray.filter((image)=>
                image.id !== "Images/" + id
            )
            verifyportfolio.files = newfilesarray
            verifyportfolio.save()
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
