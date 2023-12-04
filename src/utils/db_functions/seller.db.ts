import SellerModel from "../../model/seller.model";

export async function getAll() {
  try {
    const items = await SellerModel.find().sort({_id:-1}) ;
    return items;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showSingle(id: string) {
  try {
    const item = await SellerModel.findById(id);
    return item;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}



