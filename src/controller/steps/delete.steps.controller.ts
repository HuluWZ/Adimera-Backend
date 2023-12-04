import { Request, Response } from "express";
import StepModel from "../../model/step.model";
// import  user from "../../model/user"
export const deleteItem = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const removed = await StepModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "step deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
};
