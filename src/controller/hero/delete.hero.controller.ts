import { Request, Response } from "express";
import HeroModel from "../../model/hero.model";
// import  user from "../../model/user"
export const deleteHero = async (req:Request, res:Response) => {
  const { id } = req.params;
  try {
    const removed = await HeroModel.findByIdAndDelete(id);
    if (!removed) throw Error("Something went wrong ");
    res
      .status(200)
      .json({ message: "hero deleted successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "server error", success: false });
  }
};
