import PartnerModel from "../../model/partner.mode";

export async function getAll() {
  try {
    const items = await PartnerModel.find();
    return items;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showSingle(id: string) {
  try {
    const items = await PartnerModel.findById(id);
    return items;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}




