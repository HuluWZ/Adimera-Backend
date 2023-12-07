import { create } from "./create.product.controller"
import {
  getAllProduct,
  getProduct,
  getRelatedProduct,
  getProductCategory
} from "./get.product.controller";
import { remove } from "./delete.product.controller"
import { update } from "./update.product.controller"

// Exporting various controller functions for news-related operations
export {
    create,
    getAllProduct,
    getProduct,
    getRelatedProduct,
    getProductCategory,
    remove,
    update
  }
