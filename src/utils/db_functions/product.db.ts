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

export async function showRelated(id: string,category:string) {
  try {
    const item = await ProductModel.find({
      $and: [{ _id: { $ne: id } }, { category: category }],
    })
      .populate("category")
      .populate("uploadedBy")
      .sort({ _id: -1 });
    if(item.length >0){

      return item;
    }else{
      const items = await ProductModel.find({_id: { $ne: id }}).populate("category").populate("uploadedBy").sort({_id:-1});
      return items;
    }  
  } catch (error) {
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}

export async function getCategoryProduct(id: string) {
  try {
    const item = await ProductModel.find({category:id})
      .populate("category")
      .populate("uploadedBy");
    return item;
  } catch (error) {
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}



