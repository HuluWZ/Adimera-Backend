import FAQModel from "../../model/faq.model";

export async function getAll() {
  try {
    const items = await FAQModel.find();
    return items;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showSingle(id: string) {
  try {
    const items = await FAQModel.findById(id);
    return items;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}


