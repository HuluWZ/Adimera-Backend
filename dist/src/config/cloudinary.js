"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploads = void 0;
const cloudinary_1 = require("cloudinary");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
cloudinary_1.v2.config({
    // eslint-disable-next-line no-undef
    cloud_name: process.env.CLOUD_NAME,
    // eslint-disable-next-line no-undef
    api_key: process.env.CLOUDINARY_API_KEY,
    // eslint-disable-next-line no-undef
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploads = (file, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary_1.v2.uploader
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
exports.uploads = uploads;
//# sourceMappingURL=cloudinary.js.map