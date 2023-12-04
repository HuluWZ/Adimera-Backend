import { Request, Response } from "express";
import { getAll } from "../../utils/db_functions/report.db";

export const dashboardReport = async (req: Request, res: Response) => {
  const items = await getAll();
  res.status(200).json({report:items,success: true});
};

