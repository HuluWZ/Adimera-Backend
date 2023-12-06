"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyProfile = exports.getuser = exports.getUsers = void 0;
//Importing the express-async-handler package
const user_db_1 = require("../../../utils/db_functions/user.db");
//Importing the uuidv4 package to generate userId
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get all users from the database using the getAllUsers function
    const users = yield (0, user_db_1.getAllUsers)();
    // Send a success response to the client with the users data
    res.status(200).json(users);
});
exports.getUsers = getUsers;
const getuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Define an async function called getuser that takes two parameters:
    // req: A Request object representing the incoming HTTP request
    // res: A Response object representing the outgoing HTTP response
    // Get the user ID from the request parameters
    const { id } = req.params;
    // Get the user with the specified ID from the database using the showUsersbyId function
    const user = yield (0, user_db_1.showUsersbyId)(id);
    // If the user is not found, return a 404 Not Found response to the client
    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }
    // Send a success response to the client with the user data
    res.status(200).send(user);
});
exports.getuser = getuser;
const MyProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Define an async function called getuser that takes two parameters:
    // req: A Request object representing the incoming HTTP request
    // res: A Response object representing the outgoing HTTP response
    const { userId } = req.userData;
    // Get the user with the specified ID from the database using the showUsersbyId function
    const user = yield (0, user_db_1.showUsersbyId)(userId);
    // If the user is not found, return a 404 Not Found response to the client
    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }
    // Send a success response to the client with the user data
    res.status(200).send(user);
});
exports.MyProfile = MyProfile;
//# sourceMappingURL=get.auth.controller.js.map