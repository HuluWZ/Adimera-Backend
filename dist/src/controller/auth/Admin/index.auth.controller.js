"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.getUsers = exports.resetPassword = exports.getuser = exports.changePassword = exports.register = void 0;
// Import the register function from the register.auth.controller file
const register_auth_controller_1 = require("./register.auth.controller");
Object.defineProperty(exports, "register", { enumerable: true, get: function () { return register_auth_controller_1.register; } });
// Import the getUsers and getuser functions from the get.auth.controller file
const get_auth_controller_1 = require("./get.auth.controller");
Object.defineProperty(exports, "getUsers", { enumerable: true, get: function () { return get_auth_controller_1.getUsers; } });
Object.defineProperty(exports, "getuser", { enumerable: true, get: function () { return get_auth_controller_1.getuser; } });
// Import the login function from the login.auth.controller file
const login_auth_controller_1 = require("./login.auth.controller");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return login_auth_controller_1.login; } });
// Import the changePassword function from the change.auth.controller file
const change_auth_controller_1 = require("./change.auth.controller");
Object.defineProperty(exports, "changePassword", { enumerable: true, get: function () { return change_auth_controller_1.changePassword; } });
// Import the resetPassword function from the forget.auth.controller file
const forget_auth_controller_1 = require("./forget.auth.controller");
Object.defineProperty(exports, "resetPassword", { enumerable: true, get: function () { return forget_auth_controller_1.resetPassword; } });
//# sourceMappingURL=index.auth.controller.js.map