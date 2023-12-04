import { Request, Response } from "express";
import { getAll, showSingle} from "../../utils/db_functions/hero.db";
import NewsModel from "../../model/news.model"
import JobModel from "../../model/job.model"
import BussinessModel from "../../model/bussiness.model"
import ResturantModel from "../../model/resturant.model"
import CarModel from "../../model/car.model"
import AdModel from "../../model/ad.model"



export const getHeros = async (req: Request, res: Response) => {
  const folders = await getAll();
  res.status(200).send(folders);
};

export const getHero = async (req: Request, res: Response) => {
  const { id } = req.params;
  const folder = await showSingle(id);
  res.status(200).send(folder);
};


export const getLanding = async (req:Request, res:Response) => {
    const heros = await getAll();
    const news = await NewsModel.find()
    const cars = await CarModel.find()
    const job = await JobModel.find()
    const business = await BussinessModel.find()
    const resturant = await ResturantModel.find()
    const ad = await AdModel.find()

    const responseData = {
      hero: heros,
      car: cars,
      news: news,
      job: job,
      business: business, 
      restuarant: resturant,
      ad: ad
    };

    return res.status(200).json(responseData)
}
