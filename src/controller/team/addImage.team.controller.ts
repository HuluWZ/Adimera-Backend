
import { Request, Response } from "express";
import {  loop } from "../../utils/db_functions/help";
import TeamModel from "../../model/team.model";

export const addImage = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { id } = req.params;
  try {
    if (req.method === "POST") {
      if (req.files) {
        const files = req.files;
        const urls = await loop(files);

        //we use uuidv4 to generate a random and unique id for the heros
        const verifyTeam = await TeamModel.findOne({ _id: id });
        if (!verifyTeam) {
          return res.status(404).json({
            message: "team not found",
            status: false,
          });
        }
        const filesarray = verifyTeam.files;
        filesarray.push(urls);
        verifyTeam.save();
        return res.status(201).json({
          success: true,
          message: "image added sucessfully",
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
