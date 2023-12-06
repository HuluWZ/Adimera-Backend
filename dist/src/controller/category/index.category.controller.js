"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getCategory = exports.getAllCategory = exports.create = void 0;
const create_category_controller_1 = require("./create.category.controller");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return create_category_controller_1.create; } });
const get_category_controller_1 = require("./get.category.controller");
Object.defineProperty(exports, "getAllCategory", { enumerable: true, get: function () { return get_category_controller_1.getAllCategory; } });
Object.defineProperty(exports, "getCategory", { enumerable: true, get: function () { return get_category_controller_1.getCategory; } });
const update_category_controller_1 = require("./update.category.controller");
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return update_category_controller_1.update; } });
const delete_category_controller_1 = require("./delete.category.controller");
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return delete_category_controller_1.remove; } });
//# sourceMappingURL=index.category.controller.js.map