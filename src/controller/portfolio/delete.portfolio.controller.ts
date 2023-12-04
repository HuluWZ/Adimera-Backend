//Importing the resturant model to the controller
import PortfolioModel from "../../model/portfolio.model";
import { Request, Response } from "express";

//Delete a single resturant
export const deleteportfolio = async (req:Request, res:Response) => {
  //Destructing id from req.params
  const { id } = req.params;

  try {
    //Fetching single resturant using the id in the req.params from the database and assigning it to resturant
    await PortfolioModel.deleteOne({ _id: id });

    //Since there is no data to be responde we simple send a message
    return res.status(200).json({
      success: true,
      message: "portfolio deleted sucessfully",
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
