import { getAll, showSingle } from "../../utils/db_functions/business.db";
import { Request, Response } from "express";

//Get all businesss async function
export const getbusinesss = async (req:Request, res:Response) => {
  // Fetching all businesss from the database and assigning it to businesss
  const businesss = await getAll();
  // Responding the data to any request made
  return res.status(200).json(businesss.reverse())
  // I use .reverse() function to get the latest datas at first
};

//Get Single business
export const showbusinesss = async (req:Request, res:Response) => {
  // Destructing id from req.params
  const { id } = req.params;

  // Fetching single business using the id in the req.params from the database and assigning it to business
  const business = await showSingle(id);

  try {
    if (business) {
      // Responding the data to any request made
      return res.status(200).json(business)
    }
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
