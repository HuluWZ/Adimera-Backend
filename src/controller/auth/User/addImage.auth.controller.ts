import { Request, Response } from "express";
//Imporing file system library
import { Mloop, loop } from "../../../utils/db_functions/help";
import UserModel from "../../../model/user.model";
import { IncomingMessage, UserDataType } from "../../../middleware/authJWT"

export const addImage = async (req: IncomingMessage, res: Response) => {
    //Destruct the data sent from req.params
    const { userId } = req.userData as UserDataType

    //Start a try block to handle any errors that may occur
    try {

        //Check if the req.method is equal to POST. If it is not, then returns a 405 Method Not Allowed response with an error message
        if (req.method === "POST") {

            //Check if the req.files object is not null. If it is, then returns a 400 Bad Request response with an error message
            if (!req.files) {
                return res.status(401).json({
                    message: "file not found",
                    sucess: false
                })
            }
            //Assign the req.files object to the files variable
            const files = req.files;
            //Call the Mloop() function to upload the files to a cloud storage provider. The urls variable is assigned the array of URLs of the uploaded files
            const url = await loop(files);

            //Find the car with the specified id and assign it to the verifyItem variable
            const verifyItem = await UserModel.findOne({ _id: userId });

            //Check if the verifyItem variable is not null. If it is, then returns a 404 Not Found response with an error message
            if (!verifyItem) {
                return res.status(404).json({
                    message: "user not found",
                    status: false,
                });
            }
            //Create a new object called url and assign it the first element of the urls array
            // let url = {}
            // urls.forEach((u) => {
            //     url = u
            // });


            //Assign the verifyItem.files array to the filesarray variable
            // verifyItem.files[0] = url

            //Push the url object to the filesarray array
            // filesarray = url

            //Save the verifyItem car
            verifyItem.save();

            //Returns a 201 Created response with a success message
            return res.status(201).json({
                success: true,
                message: "image added sucessfully",
            });
        } else {
            //Returns a 405 Method Not Allowed response with an error message
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    } catch (error) {
        //Catches any errors that occur in the try block and returns a 412 Precondition Failed response with an error message
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};
