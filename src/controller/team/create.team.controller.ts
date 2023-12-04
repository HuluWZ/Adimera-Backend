//Importing the hero model to the controller
import TeamModel from "../../model/team.model";
import { Request, Response } from "express";
import {  loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { title, name } = req.body;

  try {
    if (req.method === "POST") {
      if (req.files) {
        const files = req.files;
        const urls = await loop(files);

        const team = await new TeamModel({
          title: title,
          name:name,
          files: urls,
        });

        team.save();
        return res.status(201).json({
          success: true,
          message: "team created sucessfully",
          data: team,
        });
      } else {
        const team = await new TeamModel({
          title: title,
          name:name
        });

        team.save();
        return res.status(201).json({
          success: true,
          message: "team created sucessfully",
          data: team,
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
