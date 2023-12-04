//Importing the product model to the controller
import PortfolioModel from "../../model/portfolio.model";

// Importing the the cloudinary config
import { Request, Response } from "express";
import { Mloop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { title, description, links, body } = req.body;

  try {
    if (req.method === "POST") {
      if (req.files) {
        const files = req.files;
        const urls = await Mloop(files);

        //creating the resturant
        const portfolio = await new PortfolioModel({
          title: title,
          description: description,
          body: body,
          links:links,
          files: urls,
        });

        portfolio.save();
        return res.status(201).json({
          success: true,
          message: "portfolio created sucessfully",
        });
      } else {
        //creating the resturant
        const portfolio = await new PortfolioModel({
          title: title,
          description: description,
          body: body,
        });

        portfolio.save();
        return res.status(201).json({
          success: true,
          message: "portfolio created sucessfully",
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
