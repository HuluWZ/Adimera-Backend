import { Request, Response } from "express";
import { getAll, showSingle } from "../../utils/db_functions/faq.db";

export const getItems = async (req: Request, res: Response) => {
  const Items = await getAll();
  res.status(200).send(Items);
};

export const getItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Item = await showSingle(id);
  res.status(200).send(Item);
};
