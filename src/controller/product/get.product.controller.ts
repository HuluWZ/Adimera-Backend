import { Request, Response } from "express";
import {
  getAll,
  showSingle,
  showRelated,
  getCategoryProduct,
} from "../../utils/db_functions/product.db";

export const getAllProduct = async (req: Request, res: Response) => {
  const Items = await getAll();
  res.status(200).send(Items);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Item = await showSingle(id);
  res.status(200).send(Item);
};


export const getRelatedProduct = async (req: Request, res: Response) => {
  const { id, category } = req.params;
  const Item = await showRelated(id,category);
  res.status(200).send(Item);
};

export const getProductCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const Item = await getCategoryProduct(id);
  res.status(200).send(Item);
};
