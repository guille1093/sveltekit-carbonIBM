import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//     host: 'localhost',
//     port: 1025,
//     auth: {
//         user: 'randomuser',
//         pass: 'randompassword'
//     }
// });

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'irving.greenfelder8@ethereal.email',
        pass: '26Vp7uNvJC4Y662w19'
    }
});

export default transporter;