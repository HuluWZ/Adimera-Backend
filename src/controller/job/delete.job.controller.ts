import { Request, Response } from "express";
import jobModel from "../../model/job.model";
// import  user from "../../model/user"
export const deletejob = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const removed = await jobModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "job deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
};
