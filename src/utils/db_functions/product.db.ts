import ProductModel from "../../model/product.model";

export async function getAll() {
  try {
    const items = await ProductModel.find().populate("category").populate("uploadedBy").sort({_id:-1}) ;
    return items;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showSingle(id: string) {
  try {
    const item = await ProductModel.findById(id).populate("category").populate("uploadedBy");
    return item;
  } catch (error) {
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}



