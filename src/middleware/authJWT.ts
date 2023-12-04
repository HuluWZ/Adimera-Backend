import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

//Creating interface for request with JWT Authentication header within them
export interface IncomingMessage extends Request {
  userData?: UserDataType | jwt.JwtPayload | string;
}

//creating and exporting the userdatatype which is signed by the JWT SCECRET
export interface UserDataType {
  accessToken: string;
  userId: string;
}


//validating the accesstoken 
export const AdminauthJWT = (
  req: IncomingMessage,
  res: Response,
  next: NextFunction
) => {
  try {
    // extracting the token from the request header
    const token = req.headers.authorization?.replace("Bearer ", "");
    //verify the accesstoken is signed by the project jWT_SECRET
    const decoded = jwt.verify(
      token ? token : "",
      process.env.JWT_SECRET as string
    );

    //Setting to the userData
    req.userData = decoded;

    next();
  } catch (err) {
    return res.status(403).json({
      message: "unauthorized crediential",
    });
  }
};


//validating the accesstoken 
export const UserAuthJWT = (
  req: IncomingMessage,
  res: Response,
  next: NextFunction
) => {
  try {
    // extracting the token from the request header
    const token = req.headers.authorization?.replace("Bearer ", "");
    //verify the accesstoken is signed by the project jWT_SECRET
    const decoded = jwt.verify(
      token,
      process.env.JWTU_SECRET as string
    );
    //Setting to the userData
    req.userData = decoded;

    next();
  } catch (err) {
    return res.status(403).json({
      message: "unauthorized crediential",
    });
  }
};