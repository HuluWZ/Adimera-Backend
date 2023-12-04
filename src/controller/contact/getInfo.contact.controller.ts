import { Request, Response } from "express";
import { getAll, showSingle } from "../../utils/db_functions/contactInfo.db";

export const getContactInfos = async (req: Request, res: Response) => {
  const contacts = await getAll();
  res.status(200).send(contacts);
};

export const getContactInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const contact = await showSingle(id);
  res.status(200).send(contact);
};
