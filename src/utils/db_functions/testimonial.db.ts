import TestimonialModel from "../../model/testimonial.model";
export async function getAll() {
    try {
      const items = await TestimonialModel.find();
      return items;
    } catch (error) {
      // Handle error
      console.error("Error retrieving folders:", error);
      throw error;
    }
  }

  export async function verified() {
    try {
      const items = await TestimonialModel.find({ status: "VERIFIED"});
      return items;
    } catch (error) {
      // Handle error
      console.error("Error retrieving folders:", error);
      throw error;
    }
  }
  
  export async function showSingle(id: string) {
    try {
      const items = await TestimonialModel.findById(id);
      return items;
    } catch (error) {
      // Handle error
      console.error("Error retrieving MenuType:", error);
      throw error;
    }
  }
  
  
  