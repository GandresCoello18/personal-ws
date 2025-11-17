import nodemailer from "nodemailer"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, asunto, mensaje } = body

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.GMAIL_RECIPIENT) {
      console.error("[v0] Variables de entorno faltantes para Gmail")
      return NextResponse.json(
        { error: "Configuración de email no disponible. Contacta al administrador." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    const mailOptionsUser = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Confirmación: ${asunto}`,
      html: `
        <h2>Hola ${nombre},</h2>
        <p>Gracias por tu mensaje. He recibido tu solicitud con el siguiente contenido:</p>
        <hr />
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br />")}</p>
        <hr />
        <p>Te responderé en máximo 24 horas.</p>
        <p>Saludos,<br />Andrés Coello</p>
      `,
    }

    const mailOptionsAdmin = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_RECIPIENT,
      subject: `Nuevo Contacto: ${asunto}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br />")}</p>
      `,
    }

    await transporter.sendMail(mailOptionsUser)
    await transporter.sendMail(mailOptionsAdmin)

    return NextResponse.json({ success: true, message: "Email enviado exitosamente" })
  } catch (error) {
    console.error("[v0] Error al enviar email:", error)
    return NextResponse.json(
      { error: "Error al enviar el email. Por favor intenta de nuevo." },
      { status: 500 }
    )
  }
}
