import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import { SendMailData } from '../adapters/mail-adapter'

const email = process.env.MAILADRESS
const emailPass = process.env.MAILPASS

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass: emailPass,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

const mailer = ({ senderMail, name, text }: SendMailData) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`

  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text,
    replyTo: from,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info),
    )
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { senderMail, name, content } = req.body

  if (!senderMail || !name || !content) {
    return res.status(403).json({ message: 'Bad request' })
  }

  const mailerRes = await mailer({ senderMail, name, text: content })
  res.send(mailerRes)
}

export default handler
