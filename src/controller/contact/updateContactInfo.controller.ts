import ContactInfoModel from "../../model/contactInfo.model";
import { Request, Response } from "express";

export const update = async (req:Request, res:Response) => {
  const { id } = req.params;
  //assigning the specfic news to variable called news
  const contactInfo = await ContactInfoModel.findOne({ _id: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!contactInfo) {
      return res.status(400).json({
        success: false,
        message: "contact info not found",
      });
    }

    contactInfo.updateOne(req.body, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot contact info  with id=${id}. Maybe contact info was not found!`,
        });
      } else
        return res.status(201).json({ message: "contact info updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
