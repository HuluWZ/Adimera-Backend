// Importing the contact info model to the controller
import ContactInfoModel from "../../model/contactInfo.model";

// Export the createInfo function
export const createInfo = async (req, res) => {
  // Destruct the data sent from req.body
  const { name, value, type } = req.body;

  // Try to create a new contact info
  try {
    const ContactInfo = await new ContactInfoModel({
      name,
      value,
      type,
    });

    // Save the contact info
    await ContactInfo.save();

    // Return a 201 Created response with a success message
    res.status(201).json({
      success: true,
      message: "contact info created successfully",
    });
  } catch (error) {
    // Catch any errors that occur and return a 412 Precondition Failed response
    res.status(412).json({
      success: false,
      message: error,
    });
  }
};
