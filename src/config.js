import { config } from 'dotenv';

config();

//    export const PORT = process.env.DB_HOST || 4038;
    export const DB_PORT = process.env.DB_PORT || 4038;
    export const DB_HOST = process.env.DB_HOST || '191.101.235.205';
    export const DB_DATABASE = process.env.DB_DATABASE || 'concon';
    export const DB_USER = process.env.DB_USER || 'alebig';
    export const DB_PASSWORD = process.env.DB_PASSWORD || 'jab3655';


//console.log(configu);

/* export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
}; */