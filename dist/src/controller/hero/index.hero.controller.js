"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.addImage = exports.getLanding = exports.update = exports.deleteHero = exports.getHeros = exports.getHero = exports.create = void 0;
const create_hero_controller_1 = require("./create.hero.controller");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return create_hero_controller_1.create; } });
const get_hero_controller_1 = require("./get.hero.controller");
Object.defineProperty(exports, "getHero", { enumerable: true, get: function () { return get_hero_controller_1.getHero; } });
Object.defineProperty(exports, "getHeros", { enumerable: true, get: function () { return get_hero_controller_1.getHeros; } });
Object.defineProperty(exports, "getLanding", { enumerable: true, get: function () { return get_hero_controller_1.getLanding; } });
const delete_hero_controller_1 = require("./delete.hero.controller");
Object.defineProperty(exports, "deleteHero", { enumerable: true, get: function () { return delete_hero_controller_1.deleteHero; } });
const update_hero_controller_1 = require("./update.hero.controller");
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return update_hero_controller_1.update; } });
const addImage_hero_controller_1 = require("./addImage.hero.controller");
Object.defineProperty(exports, "addImage", { enumerable: true, get: function () { return addImage_hero_controller_1.addImage; } });
const deleteImage_hero_controller_1 = require("./deleteImage.hero.controller");
Object.defineProperty(exports, "deleteImage", { enumerable: true, get: function () { return deleteImage_hero_controller_1.deleteImage; } });
//# sourceMappingURL=index.hero.controller.js.map