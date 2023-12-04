//Importing the hero model to the controller
import PartnerModel from "../../model/partner.mode";
import { Request, Response } from "express";
import {  loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { name } = req.body;

  try {
    if (req.method === "POST") {
      if (req.files) {
        const files = req.files;
        const urls = await loop(files);
        const partner = await new PartnerModel({
          name: name,
          files: urls
        });

        partner.save();
        return res.status(201).json({
          success: true,
          message: "partner created sucessfully",
          data: partner,
        });
      } else {
        const partner = await new PartnerModel({
          name: name,
        });

        partner.save();
        return res.status(201).json({
          success: true,
          message: "partner created sucessfully",
          data: partner,
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
