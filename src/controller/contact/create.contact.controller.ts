//Importing the contact model to the controller
import ContactModel from "../../model/contact.model";
import { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  // Destruct the data sent from req.body
  const { fullName, subject, message, email, phoneNumber } = req.body;

  // Try to create a new contact
  try {
    const Contact = await new ContactModel({
      fullName,
      subject,
      message,
      email,
      phoneNumber,
    });

    // Save the contact
    Contact.save();

    // Return a 201 Created response with a success message
    return res.status(201).json({
      success: true,
      message: "message sent successfully",
    });
  } catch (error) {
    // Catch any errors that occur and return a 412 Precondition Failed response
    return res.status(412).json({
      success: false,
      message: error,
    });
  }
};
