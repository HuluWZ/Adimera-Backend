import CarModel from "../../model/car.model";

export async function getAll() {
  try {
    const house = await CarModel.find();
    return house;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showSingle(id: string) {
  try {
    const house = await CarModel.findById(id);
    return house;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}
