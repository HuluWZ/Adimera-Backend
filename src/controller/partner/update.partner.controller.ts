import partnerModel from "../../model/partner.mode";
//Imporing file system library
import { Request, Response } from "express";


export const update = async (req: Request, res: Response) => {

  const { name } = req.body
  //Destructing the id from req.params
  const updateData = {
    name,
  }
  const { id } = req.params;
  //assigning the specfic hero to variable called hero
  const item = await partnerModel.findOne({ _id: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }
  try {
    if (!item) {
      return res.status(400).json({
        success: false,
        message: "partner not found",
      });
    }
    item.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update partner with id=${id}. Maybe partner was not found!`,
        });
      } else
        return res.status(201).json({ message: "partner updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
