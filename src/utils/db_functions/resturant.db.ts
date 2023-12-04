import resturantModel from "../../model/resturant.model";

export async function getAll() {
  try {
    const items = await resturantModel.find();
    return items;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showSingle(id: string) {
  try {
    const items = await resturantModel.findOne({_id: id });
    return items;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}
