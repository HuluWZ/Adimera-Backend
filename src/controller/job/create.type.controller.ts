//Importing the job model to the controller
import JobModel from "../../model/jobtype.model";
import { Request, Response } from "express";

export const createType = async (req: Request, res: Response) => {
    //Destruct the data sent from req.body
    const {
        name,
        } = req.body;

    try {
        if (req.method === "POST") {
            const job = await new JobModel({
                name: name,
                
            });

            job.save();
            return res.status(201).json({
                success: true,
                message: "job type created sucessfully",
            });
        } else {
            return res.status(405).json({
                err: `${req.method} method not allowed`,
            });
        }
    } catch (error) {
        return res.status(412).json({
            success: false,
            message: error,
        });
    }
};


export const deletejobtype = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
      const removed = await JobModel.findByIdAndDelete(id);
      if (!removed) throw Error("Something went wrong ");
      res
        .status(200)
        .json({ message: "job deleted successfully", success: true });
    } catch (error) {
      res.status(500).json({ message: "server error", success: false });
    }
  };