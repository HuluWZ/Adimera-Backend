// Import the register function from the register.auth.controller file
import { register } from "./register.auth.controller";

// Import the getUsers and getuser functions from the get.auth.controller file
import { getUsers, getuser, MyProfile} from "./get.auth.controller";

// Import the login function from the login.auth.controller file
import { login } from "./login.auth.controller";

// Import the changePassword function from the change.auth.controller file
import { changePassword } from "./change.auth.controller";

// Import the resetPassword function from the forget.auth.controller file
import { resetPassword } from "./forget.auth.controller";

import { deactivate } from "./dectavite.auth.controller"

import { addImage} from "./addImage.auth.controller"

import { remove} from "./delete.auth.controller"

// Export the register, changePassword, getuser, resetPassword, getUsers, and login functions
export { register, changePassword, getuser, resetPassword, getUsers, login, MyProfile, addImage, deactivate,remove};
