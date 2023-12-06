"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.remove = exports.getProduct = exports.getAllProduct = exports.create = void 0;
const create_product_controller_1 = require("./create.product.controller");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return create_product_controller_1.create; } });
const get_product_controller_1 = require("./get.product.controller");
Object.defineProperty(exports, "getAllProduct", { enumerable: true, get: function () { return get_product_controller_1.getAllProduct; } });
Object.defineProperty(exports, "getProduct", { enumerable: true, get: function () { return get_product_controller_1.getProduct; } });
const delete_product_controller_1 = require("./delete.product.controller");
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return delete_product_controller_1.remove; } });
const update_product_controller_1 = require("./update.product.controller");
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return update_product_controller_1.update; } });
//# sourceMappingURL=index.product.controller.js.map