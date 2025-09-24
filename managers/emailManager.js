const nodemailer = require("nodemailer");

const emailManager = async (to, text, subject) => {

    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "85febdbd0571ad",
            pass: "3796f300132056"
        }
    });

    await transport.sendMail({
        to: to,
        from: "info@expensetracker.com",
        text: text,
        subject: subject
    })
};

module.exports = emailManager;