import* as dotenv from 'dotenv';
dotenv.config();
const config =  {
    NODE_ENV: process.env.NODE_ENV? process.env.NODE_ENV: "dev",
    PORT: process.env.PORT||isNaN(Number(process.env.PORT))? 9999: Number(process.env.PORT),
    APP_NAME: process.env.APP_NAME? process.env.APP_NAME: "phone-api-server"
};
export {config}