"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInfo = exports.update = exports.createInfo = exports.getContactInfo = exports.getContactInfos = exports.getContact = exports.getContacts = exports.create = void 0;
const create_contact_controller_1 = require("./create.contact.controller");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return create_contact_controller_1.create; } });
const get_contact_controller_1 = require("./get.contact.controller");
Object.defineProperty(exports, "getContact", { enumerable: true, get: function () { return get_contact_controller_1.getContact; } });
Object.defineProperty(exports, "getContacts", { enumerable: true, get: function () { return get_contact_controller_1.getContacts; } });
const getInfo_contact_controller_1 = require("./getInfo.contact.controller");
Object.defineProperty(exports, "getContactInfos", { enumerable: true, get: function () { return getInfo_contact_controller_1.getContactInfos; } });
Object.defineProperty(exports, "getContactInfo", { enumerable: true, get: function () { return getInfo_contact_controller_1.getContactInfo; } });
const createContactInfo_controller_1 = require("./createContactInfo.controller");
Object.defineProperty(exports, "createInfo", { enumerable: true, get: function () { return createContactInfo_controller_1.createInfo; } });
const updateContactInfo_controller_1 = require("./updateContactInfo.controller");
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return updateContactInfo_controller_1.update; } });
const deleteInfo_controller_1 = require("./deleteInfo.controller");
Object.defineProperty(exports, "deleteInfo", { enumerable: true, get: function () { return deleteInfo_controller_1.deleteInfo; } });
//# sourceMappingURL=index.contact.controller.js.map