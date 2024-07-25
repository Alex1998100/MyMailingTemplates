"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require('dotenv');
dotenv.config();
const nodemailer_1 = __importDefault(require("nodemailer"));
const server = nodemailer_1.default.createTransport({
    "host": process.env.BREVO_HOST,
    "port": process.env.BREVO_PORT,
    "secure": false,
    "auth": {
        "user": process.env.BREVO_USER,
        "pass": process.env.BREVO_PASS
    }
});
const mail = {
    from: process.env.SEND_FROM,
    to: process.env.SEND_TO,
    subject: 'Brevo nodemailer test',
    text: 'Hello'
};
server.sendMail(mail, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(info);
    }
});
