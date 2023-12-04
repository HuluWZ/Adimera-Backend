import ADModel from "../../model/ad.model";
import { Request, Response } from "express";
export const update = async (req: Request, res: Response) => {

  const { title, description, adType} = req.body
  //Destructing the id from req.params
  const updateData = {
    title,
    description,
    adType
  }
  const { id } = req.params;
  //assigning the specfic hero to variable called hero
  const ad = await ADModel.findOne({ _id: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!ad) {
      return res.status(400).json({
        success: false,
        message: "ad not found",
      });
    }


    ad.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update ad with id=${id}. Maybe ad was not found!`,
        });
      } else
        return res.status(201).json({ message: "ad updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
