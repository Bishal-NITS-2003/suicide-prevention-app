import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PWD,
  },
});

const sendEmail = (to: string, subject: string, text: string, html: any) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
    html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.error("Error sending email", error.message);
        reject(new Error("Error sending email to client"));
      } else {
        console.log("Email sent successfully", info.response);
        resolve(info.response);
      }
    });
  });
};

export default sendEmail;
