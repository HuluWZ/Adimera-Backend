import { Request, Response } from "express";
import { getAll, showSingle } from "../../utils/db_functions/ad.db";
export const getads = async (req: Request, res: Response) => {
  // Get all ad records from the database
  const folders = await getAll();

  // Send a success response to the client with the ad records
  res.status(200).send(folders);
};

export const getad = async (req: Request, res: Response) => {
  // Get the ID of the ad to be retrieved from the request params
  const { id } = req.params;

  // Get the ad record with the specified ID from the database
  const folder = await showSingle(id);

  // Send a success response to the client with the ad record
  res.status(200).send(folder);
};
