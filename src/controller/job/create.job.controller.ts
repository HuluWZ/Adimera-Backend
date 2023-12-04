//Importing the job model to the controller
import JobModel from "../../model/job.model";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
    //Destruct the data sent from req.body
    const {
        title,
        description,
        company,
        location,
        salary,
        skills,
        link,
        jobType,
        jobCategory, } = req.body;

    try {
        if (req.method === "POST") {
            const job = await new JobModel({
                title: title,
                description: description,
                company: company,
                location: location,
                salary: salary,
                skills: skills,
                link: link,
                jobType: jobType,
                jobCategory: jobCategory,
            });

            job.save();
            return res.status(201).json({
                success: true,
                message: "job created sucessfully",
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
