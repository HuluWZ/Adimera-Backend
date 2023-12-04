/* eslint-disable no-const-assign */
import { uploads } from "../../config/cloudinary";
import fs from "fs"
export async function loop(Ifiles) {
  const uploader = async (path) => await uploads(path, "Images");

  try {
    let urls;
    const { path } = Ifiles[0];
    const newPath = await uploader(path);
    urls = newPath;
    // fs.unlinkSync(path);
    return urls
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}

export async function Mloop(Ifiles) {
  const uploader = async (path) => await uploads(path, "Images");

  try {
    const urls = []
    for (const file of Ifiles) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath)
      // fs.unlinkSync(path)
    }
    return urls
  } catch (error) {
    // Handle error
    console.error("Error retrieving folders:", error);
    throw error;
  }
}





