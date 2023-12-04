// Importing the product model to the controller
import AboutModel from "../../model/about.model";

// Importing the the cloudinary config
// import { uploads } from "../../config/cloudinary";

//Imporing file system library
// import fs from "fs";
import { Request, Response } from "express";

export const update = async (req: Request, res: Response) => {

  // Get the title and description from the request body
  const { title, description } = req.body;

  // Get the ID from the request params
  const { id } = req.params;

  // Create an object with the update data
  const updateData = {
    title,
    description,
  };

  // Find the about record with the specified ID
  const about = await AboutModel.findOne({ _id: id });

  // Check if the request method is PUT
  if (req.method !== "PUT") {
    // If the request method is not PUT, return a 405 Method Not Allowed response
    return res.status(405).json({
      err: `${req.method} method not allowed`,
    });
  }

  // Try to update the about record
  try {
    // If the about record is not found, return a 400 Bad Request response
    if (!about) {
      return res.status(400).json({
        success: false,
        message: "about not found",
      });
    }

    // Update the about record with the update data
    about.updateOne(updateData, { useFindAndModify: false }).then((data) => {
      // If the update was successful, return a 201 Created response
      if (data) {
        return res.status(201).json({ message: "about updated successfully." });
      } else {
        // If the update was not successful, return a 404 Not Found response
        res.status(404).send({
          message: `Cannot update about with id=${id}. Maybe about was not found!`,
        });
      }
    });
  } catch (error) {
    // If an error occurs, return a 412 Precondition Failed response
    return res.status(412).send({
      success: false,
      message: error.message,
    });
  }
};
