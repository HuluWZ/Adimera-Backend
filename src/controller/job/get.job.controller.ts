import { Request, Response } from "express";
import { getAll, showSingle } from "../../utils/db_functions/job.db";
import JobModel from  "../../model/jobtype.model"
export const getJobs = async (req: Request, res: Response) => {
  const items = await getAll();
  res.status(200).send(items);
};

export const showJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const items = await showSingle(id);
  res.status(200).send(items);
};


export const getJobType = async (req: Request, res: Response) => {
  const items = await JobModel.find();
  res.status(200).send(items);
};