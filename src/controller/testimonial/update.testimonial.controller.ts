import testimonialModel from "../../model/testimonial.model";
//Imporing file system library
import { Request, Response } from "express";


export const update = async (req: Request, res: Response) => {

  const { name, message } = req.body
  //Destructing the id from req.params
  const updateData = {
    name,
    message,

  }
  const { id } = req.params;
  //assigning the specfic hero to variable called hero
  const item = await testimonialModel.findOne({ _id: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }
  try {
    if (!item) {
      return res.status(400).json({
        success: false,
        message: "testimonial not found",
      });
    }
    item.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update testimonial with id=${id}. Maybe testimonial was not found!`,
        });
      } else
        return res.status(201).json({ message: "testimonial updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
