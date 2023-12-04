//Importing the product model to the controller
import jobModel from "../../model/job.model";
import { Request, Response } from "express";
export const update = async (req: Request, res: Response) => {

  const { title,
    description,
    company,
    location,
    salary,
    skills,
    link,
    jobType,
    jobCategory, } = req.body
  //Destructing the id from req.params
  const updateData = {
    title,
    description,
    company,
    location,
    salary,
    skills,
    link,
    jobType,
    jobCategory,

  }
  const { id } = req.params;
  //assigning the specfic job to variable called job
  const job = await jobModel.findOne({ _id: id });

  if (req.method !== "PUT") {
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  try {
    if (!job) {
      return res.status(400).json({
        success: false,
        message: "job not found",
      });
    }


    job.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update job with id=${id}. Maybe job was not found!`,
        });
      } else
        return res.status(201).json({ message: "job updated successfully." });
    });
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
