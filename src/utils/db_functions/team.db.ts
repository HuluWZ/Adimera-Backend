import TeamModel from "../../model/team.model";

export async function getAll() {
  try {
    const teams = await TeamModel.find();
    return teams;
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function showSingle(id: string) {
  try {
    const teams = await TeamModel.findById(id);
    return teams;
  } catch (error) {
    // Handle error
    console.error("Error retrieving MenuType:", error);
    throw error;
  }
}



