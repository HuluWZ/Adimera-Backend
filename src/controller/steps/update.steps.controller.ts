import StepModel from "../../model/step.model";
//Imporing file system library
import { Request, Response } from "express";


export const update = async (req: Request, res: Response) => {

  const { title, description } = req.body
  //Destructing the id from req.params
  const updateData = {
    title,
    description,

  }
  const { id } = req.params;
  //assigning the specfic hero to variable called hero
  const item = await StepModel.findOne({ _id: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }
  try {
    if (!item) {
      return res.status(400).json({
        success: false,
        message: "step not found",
      });
    }
    item.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update step with id=${id}. Maybe step was not found!`,
        });
      } else
        return res.status(201).json({ message: "step updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
