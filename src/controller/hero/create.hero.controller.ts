//Importing the hero model to the controller
import HeroModel from "../../model/hero.model";
import { Request, Response } from "express";
import {  loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { title, link } = req.body;

  try {
    if (req.method === "POST") {
      if (req.files) {
        const files = req.files;
        console.log("files", files)
        const urls = await loop(files);
        const hero = await new HeroModel({
          title: title,
          link: link,
          files: urls,
        });

        hero.save();
        return res.status(201).json({
          success: true,
          message: "hero created sucessfully",
          data: hero,
        });
      } else {
        const hero = await new HeroModel({
          title: title,
          link: link,
        });

        hero.save();
        return res.status(201).json({
          success: true,
          message: "hero created sucessfully",
          data: hero,
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
