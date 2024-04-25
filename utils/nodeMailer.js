import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function sendMessageFrancy(name, email, tellPhone, plan){
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GOOGLE_USER,
      pass: process.env.GOOGLE_PASS,
    },tls: {
      rejectUnauthorized: false // não verificar o certificado
  }
  });

  const mailOptions = {
    from: '"Indicação Site" <kelvimarthur@gmail.com>',
    to: "francyseguro@gmail.com",
    subject: "Site Francy Seguros",
    text: "Mensagem do Site Francy Seguros",
    html: `
        <h1>Indicação do Site - Francy Seguros</h1>
        <h2>Os dados abaixo são de clientes, não compartilhe e nem use para fins mal intencionados.</h2>
        <p>Nome do Cliente: ${name}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${tellPhone}</p>
        <p>Plano Desejado: ${plan}</p>
        <h3>Obrigado por usar o nosso site.</h3>
      `,
  }

  const sendEmail = await transporter.sendMail(mailOptions)
  
  try {  
    if(sendEmail.response.includes("250 2.0.0 OK")){
      console.log("deu certo",sendEmail)
    }
  } catch (error) {
    console.log("deu errado", sendEmail)
  }
  
}
