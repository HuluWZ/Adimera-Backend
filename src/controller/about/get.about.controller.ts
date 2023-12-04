import { Request, Response } from "express";
import { getAll, showSingle } from "../../utils/db_functions/about.db";

export const getAbouts = async (req: Request, res: Response) => {
  // Get all about records from the database
  const folders = await getAll();

  // Send the about records to the client with a status code of 200 OK
  res.status(200).send(folders);
};

export const getAbout = async (req: Request, res: Response) => {
  // Get the ID of the about record from the request parameters
  const { id } = req.params;

  // Get the about record with the specified ID from the database
  const folder = await showSingle(id);

  // Send the about record to the client with a status code of 200 OK
  res.status(200).send(folder);
};
