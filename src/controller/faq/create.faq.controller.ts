//Importing the hero model to the controller
import FAQModel from "../../model/faq.model";
import { Request, Response } from "express";
// import {  loop } from "../../utils/db_functions/help";

export const create = async (req: Request, res: Response) => {
  //Destruct the data sent from req.body
  const { question, answer } = req.body;

  try {
    if (req.method === "POST") {
      if (req.files) {
        const files = req.files;
        console.log("files", files)
        // const urls = await loop(files);
        const faq = await new FAQModel({
          question: question,
          answer:answer,
        });

        faq.save();
        return res.status(201).json({
          success: true,
          message: "faq created sucessfully",
          data: faq,
        });
      } else {
        const faq = await new FAQModel({
          question: question,
          answer:answer
        });

        faq.save();
        return res.status(201).json({
          success: true,
          message: "faq created sucessfully",
          data: faq,
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
