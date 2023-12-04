import { create } from "./create.news.controller"
import { addImage } from "./addImage.news.controller"
import { update  } from "./update.news.controller"
import {  getnewss, shownewss, toogle} from "./get.news.controller"
import { deletenews } from "./delete.news.controller"
import { deleteImage } from "./deleteImage.news.controller"
import { Image } from "./image.news.controller"
// Exporting various controller functions for news-related operations
export {
    create,       // Create a new news item
    update,       // Update a news item
    getnewss,     // Get a list of news items
    shownewss,    // Get a single news item
    deletenews,   // Delete a news item
    addImage,     // Add an image to a news item
    deleteImage,   // Delete an image associated with a news item
    Image, 
    toogle
}
