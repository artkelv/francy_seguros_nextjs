import nodemailer from "@/utils/nodeMailer"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, tellPhone, plan } = req.body;
    try {
      await nodemailer(name, email, tellPhone, plan);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).json({ error: 'Ocorreu um erro ao enviar o e-mail.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}