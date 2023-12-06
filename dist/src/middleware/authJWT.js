"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuthJWT = exports.AdminauthJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//validating the accesstoken 
const AdminauthJWT = (req, res, next) => {
    var _a;
    try {
        // extracting the token from the request header
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        //verify the accesstoken is signed by the project jWT_SECRET
        const decoded = jsonwebtoken_1.default.verify(token ? token : "", process.env.JWT_SECRET);
        //Setting to the userData
        req.userData = decoded;
        next();
    }
    catch (err) {
        return res.status(403).json({
            message: "unauthorized crediential",
        });
    }
};
exports.AdminauthJWT = AdminauthJWT;
//validating the accesstoken 
const UserAuthJWT = (req, res, next) => {
    var _a;
    try {
        // extracting the token from the request header
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        //verify the accesstoken is signed by the project jWT_SECRET
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWTU_SECRET);
        //Setting to the userData
        req.userData = decoded;
        next();
    }
    catch (err) {
        return res.status(403).json({
            message: "unauthorized crediential",
        });
    }
};
exports.UserAuthJWT = UserAuthJWT;
//# sourceMappingURL=authJWT.js.map