import { Request, Response } from "express";
import testimonialModel from "../../model/testimonial.model";
// import  user from "../../model/user"
export const deleteItem = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const removed = await testimonialModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "testimonial deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
};
