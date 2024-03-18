import nodemailer from "nodemailer";
const mailcrab = {
  host: "localhost",
  port: 1025
};
const transporter = nodemailer.createTransport(mailcrab);
export {
  transporter as t
};
