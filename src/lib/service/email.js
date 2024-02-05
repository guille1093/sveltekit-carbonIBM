import nodemailer from 'nodemailer';

//mailcrab
// const mailcrab = {
//     host: 'localhost',
//     port: 1025,
// }

//ethereal
const ethereal = {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'irving.greenfelder8@ethereal.email',
        pass: '26Vp7uNvJC4Y662w19'
    }
}

const transporter = nodemailer.createTransport(ethereal);

export default transporter;