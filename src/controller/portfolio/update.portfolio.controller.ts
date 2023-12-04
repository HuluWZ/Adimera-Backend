//Importing the product model to the controller
import PortfolioModel from "../../model/portfolio.model";

import { Request, Response } from "express";


export const update = async (req:Request, res:Response) => {
  const { title, description, body, links } = req.body
  const updateData = {
    title,
    description,
    body,
    links,
  }
  //Destructing the id from req.params
  const { id } = req.params;
  //assigning the specfic product to variable called product
  const portfolio = await PortfolioModel.findOne({ _id: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!portfolio) {
      return res.status(400).json({
        success: false,
        message: "portfolio not found",
      });
    }
    portfolio.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update portfolio with id=${id}. Maybe resturants was not found!`,
        });
      } else
        return res
          .status(201)
          .json({ message: "portfolio updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
