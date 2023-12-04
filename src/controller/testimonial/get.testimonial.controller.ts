import { Request, Response } from "express";
import { getAll, showSingle, verified } from "../../utils/db_functions/testimonial.db";

export const getItems = async (req: Request, res: Response) => {
  const Items = await getAll();
  res.status(200).send(Items);
};

export const Verified = async (req: Request, res: Response) => {
  const Items = await verified();
  res.status(200).send(Items);
};

export const getItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Item = await showSingle(id);
  res.status(200).send(Item);
};

