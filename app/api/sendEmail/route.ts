import { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      port: Number(process.env.SMTP_PORT) || 465, // 465 for SSL, 587 for TLS
      secure: process.env.SMTP_SECURE === 'true', // true for 465 (SSL)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Sending to yourself or an admin email
      replyTo: email,
      subject: 'General Form Enquiry',
      text: `
        New contact form submission:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
      `,
      html: htmlContent,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error sending email:', error)

    // Log the error response from the SMTP server
    if (error) {
      console.error('SMTP response:', error)
    }

    return new Response(JSON.stringify({ error: 'Error sending email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
