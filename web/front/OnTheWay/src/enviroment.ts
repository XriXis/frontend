// import dotenv from 'dotenv';
//
// dotenv.config();
// import {load} from 'ts-dotenv';
//
// export const env = load({
//         BOT_TOKEN: String,
//         BASE_WEBAPP_URL: String
//     },
//     "../../../.env"
// );

const env = {
    BASE_WEBAPP_URL: "https://a692-88-210-37-44.ngrok-free.app",
}

export const url: string = env.BASE_WEBAPP_URL;

declare global {
    interface Window {
        Telegram: {
            WebApp: any;
        }
    }
}
