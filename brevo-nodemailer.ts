const dotenv = require('dotenv');
dotenv.config()

import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

const server  = nodemailer.createTransport({
    "host": process.env.BREVO_HOST,
    "port": process.env.BREVO_PORT,
    "secure": false,
    "auth":{
        "user": process.env.BREVO_USER,
        "pass": process.env.BREVO_PASS
    }
} as SMTPTransport.Options )

const mail={
    from: process.env.SEND_FROM,
    to:process.env.SEND_TO,
    subject:'Brevo nodemailer test',
    text: 'Hello'
}

server.sendMail(mail, function (error: any, info: any){
    if (error) {
        console.log(error)
    }
    else {
        console.log(info)
    }
})