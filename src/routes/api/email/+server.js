import nodemailer from 'nodemailer';


export async function POST() {

    console.log("llega a la api de email")
    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
            user: 'guille121093@gmail.com',
            pass: 'xsmtpsib-7f8ac9150a955665c752df920f930677aa6152e43101d2383ac6fba5b960ef00-3a5DTmP1kzG6rhWM'
        }
    });

    const options = {
        from: 'you@example.com',
        to: 'user@gmail.com',
        subject: 'hello world',
        html: '<h1>hello world</h1>'
    };

    const info = await transporter.sendMail(options);

    return new Response(info.response)
};