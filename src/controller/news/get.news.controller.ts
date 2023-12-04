import { getAll, showSingle } from "../../utils/db_functions/news.db";
import { Request, Response } from "express";

// This is a controller function for getting all news items
export const getnewss = async (req: Request, res: Response) => {
  // Fetching all news items from the database and assigning them to 'newss'
  const newss = await getAll();
  // Responding with the data to any request made, with the latest data at the top (reverse order)
  return res.status(200).json(newss.reverse());
};

// This is a controller function for getting a single news item
export const shownewss = async (req: Request, res: Response) => {
  // Destructure the 'id' from req.params
  const { id } = req.params;

  // Fetching a single news item using the 'id' from req.params from the database and assigning it to 'news'
  const news = await showSingle(id);

  try {
    if (news) {
      // If the news item is found, respond with the data
      return res.status(200).json(news);
    }
  } catch (error) {
    // Handle any errors that occur during the process
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
