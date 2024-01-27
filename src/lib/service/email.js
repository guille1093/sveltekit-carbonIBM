import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'irving.greenfelder8@ethereal.email',
        pass: '26Vp7uNvJC4Y662w19'
    }
});

export default transporter;