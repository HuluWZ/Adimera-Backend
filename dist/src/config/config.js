"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_DB_CONNECTION = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.MONGO_DB_CONNECTION = process.env.REMOTE_MONGO_DB_CONNECTION;
//# sourceMappingURL=config.js.map