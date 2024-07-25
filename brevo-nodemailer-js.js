const {createTransport}= require('nodemailer');

const server = createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: 'xxxxxxxxx@smtp-brevo.com',
        pass: 'xsmtpsib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx'
    }
});
const mail = {
    from: 'bxxxxxxxx@gmail.com',
    to: 'vxxxxxxxxxxxxx@gmail.com',
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
