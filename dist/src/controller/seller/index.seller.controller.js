"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getSeller = exports.getAllSeller = exports.create = void 0;
const create_seller_controller_1 = require("./create.seller.controller");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return create_seller_controller_1.create; } });
const get_seller_controller_1 = require("./get.seller.controller");
Object.defineProperty(exports, "getAllSeller", { enumerable: true, get: function () { return get_seller_controller_1.getAllSeller; } });
Object.defineProperty(exports, "getSeller", { enumerable: true, get: function () { return get_seller_controller_1.getSeller; } });
const update_seller_controller_1 = require("./update.seller.controller");
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return update_seller_controller_1.update; } });
const delete_seller_controller_1 = require("./delete.seller.controller");
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return delete_seller_controller_1.remove; } });
//# sourceMappingURL=index.seller.controller.js.map