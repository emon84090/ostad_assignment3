import nodemailer from "nodemailer";
export async function SendEmail(EmailTo, EmailText, EmailSubject) {
  const Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.SMTPEMAIL,
      pass: process.env.SMTPASSWORD,
    },
  });

  let MailOption = {
    from: "Next JS News Portal <info@teamrabbil.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };
  return await Transporter.sendMail(MailOption);
}
