//Importing the hero model to the controller
import TestimonialModel from "../../model/testimonial.model";
import { Request, Response } from "express";
// import { Mloop, loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { name, message } = req.body;

  try {
    if (req.method === "POST") {
        const testimonial = await new TestimonialModel({
          name: name,
          message:message,
        });

        testimonial.save();
        return res.status(201).json({
          success: true,
          message: "testimonial created sucessfully",
          data: testimonial,
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
