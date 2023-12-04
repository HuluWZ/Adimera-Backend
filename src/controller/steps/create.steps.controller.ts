//Importing the hero model to the controller
import StepModel from "../../model/step.model";
import { Request, Response } from "express";
// import { Mloop, loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { title, description } = req.body;

  try {
    if (req.method === "POST") {
        const step = await new StepModel({
          title: title,
          description:description,
        });

        step.save();
        return res.status(201).json({
          success: true,
          message: "step created sucessfully",
          data: step,
        }); 
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
