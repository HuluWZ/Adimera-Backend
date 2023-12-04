import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
config();

cloudinary.config({
  // eslint-disable-next-line no-undef
  cloud_name: process.env.CLOUD_NAME,
  // eslint-disable-next-line no-undef
  api_key: process.env.CLOUDINARY_API_KEY,
  // eslint-disable-next-line no-undef
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploads = (file, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(file, {
        resource_type: "auto",
        folder: folder,
      })
      .then((result) => {
        resolve({
          url: result.url,
          id: result.public_id,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
