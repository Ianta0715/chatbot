import { createProvider } from "@builderbot/bot";
import { config } from "../config";
import { MetaProvider as Provider } from "@builderbot/provider-meta";

      


export const provider = createProvider(Provider, {
    jwtToken: config.jwToken,
    numberId: config.numberId,
    verifyToken: config.verifyToken,
    version: config.version
});