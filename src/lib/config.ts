import dotenv from "dotenv";

dotenv.config();

export interface ApiConfig {
   clientKey: string;
   privateKey: string;
   apiHost: string;

}

export const toucanConfig = {
   clientKey: process.env.CLIENT_KEY,
   privateKey: process.env.PRIVATE_KEY,
   apiHost: process.env.API_HOST,
} as ApiConfig;

if(!toucanConfig.clientKey || 
   !toucanConfig.privateKey || 
   !toucanConfig.apiHost) {
    console.log("please set CLIENT_KEY, PRIVATE_KEY and API_HOST as environment vars");
    process.exit();
}


