import { Request, Response } from "express";
import {
  getAll,
  showSingle,
} from "../../utils/db_functions/portfolio.db";

export const getPortfolios = async (req: Request, res: Response) => {
  const portfolios = await getAll();
  res.status(200).send(portfolios.reverse());
};

export const getPortfolio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const portfolio = await showSingle(id);
  try {
    if (portfolio) {
      //Responding the data to any request made
      return res.status(200).json(portfolio)
    }
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
