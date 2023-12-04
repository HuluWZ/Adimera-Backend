//Importing the product model to the controller
import PortfolioModel from "../../model/portfolio.model";

// Importing the the cloudinary config
import { Request, Response } from "express";
//Imporing file system library
import {  loop } from "../../utils/db_functions/help";

export const addImage = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { id } = req.params;
  try {
    if (req.method === "POST") {
      if (req.files) {
        const files = req.files;
        const urls = await loop(files);

        //we use uuidv4 to generate a random and unique id for the portfolios
        const verifyportfolio = await PortfolioModel.findOne({ _id: id });
        if (!verifyportfolio) {
          return res.status(404).json({
            message: "portfolio not found",
            status: false,
          });
        }
        // let url = {}
        // urls.forEach((u) => {
        //   url = u
        // });
        const filesarray = verifyportfolio.files;
        filesarray.push(urls);
        verifyportfolio.save();
        return res.status(201).json({
          success: true,
          message: "image added sucessfully",
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
