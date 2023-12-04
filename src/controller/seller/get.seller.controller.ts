import { Request, Response } from "express";
import { getAll, showSingle } from "../../utils/db_functions/seller.db";

export const getAllSeller = async (req: Request, res: Response) => {
  const Items = await getAll();
  res.status(200).send(Items);
};

export const getSeller = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Item = await showSingle(id);
  res.status(200).send(Item);
};
