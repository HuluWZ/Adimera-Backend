import ProductModel from "../../model/product.model";
import CategoryModel from "../../model/category.model";
import UserModel from "../../model/user.model";
import SellerModel from "../../model/seller.model";

export async function getAll() {
  try {
    const product = await ProductModel.find();
    const category = await CategoryModel.find();
    const user = await UserModel.find();
    const seller = await SellerModel.find();
    return {
      product:product.length,
      category:category.length,
      user:user.length,
      seller:seller.length
    };
  } catch (error) {
    console.error("Error retrieving folders:", error);
    throw error;
  }
}




