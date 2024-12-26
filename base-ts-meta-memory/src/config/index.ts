import { verify } from "crypto";
import "dotenv/config";

export const config = {
    PORT:process.env.PORT ?? 3008,
    //Meta
    jwToken: process.env.jwToken,
    numberId: process.env.numberId,
    verifyToken: process.env.verifyToken,
    version: "v20.0"
}