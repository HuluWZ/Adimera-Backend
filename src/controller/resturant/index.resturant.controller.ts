import { create } from "./create.resturant.controller";
import { getresturant, getresturants } from "./get.resturant.controller";
import { deleterestaurant  } from "./delete.resturant.controller";
import { addImage } from "./addImage.resturant.controller"
import { deleteImage } from "./deleteImage.resturant.controller"
import { update } from "./update.resturant.controller";
import { rateRestaurant } from "./rate.resturant.controller"
// Exporting various controller functions for restaurant-related operations
export {
    create,             // Create a new restaurant
    getresturant,       // Get a single restaurant
    getresturants,      // Get a list of all restaurants
    deleterestaurant,   // Delete a restaurant
    addImage,           // Add an image to a restaurant
    deleteImage,        // Delete an image associated with a restaurant
    update,          // Update a restaurant
    rateRestaurant
};
