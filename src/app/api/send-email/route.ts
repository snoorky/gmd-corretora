import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER!,
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN!,
      },
    });

    const mailOptions = {
      from: `"Formulário do Site" <${process.env.EMAIL_USER}>`,
      to: "raphaelvitorlopes@icloud.com",
      replyTo: data.email,
      subject: `Novo formulário: ${data.tipo}`,
      html: `
        <h2>Formulário: ${data.tipo}</h2>
        <ul>
          <li><strong>Nome:</strong> ${data.nome_completo}</li>
          <li><strong>Telefone:</strong> ${data.telefone}</li>
          <li><strong>E-mail:</strong> ${data.email}</li>
          <li><strong>Serviço:</strong> ${data.servico}</li>
          <li><strong>Mensagem:</strong> ${data.mensagem}</li>
        </ul>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("E-mail enviado com sucesso:", info.messageId);

    return NextResponse.json(
      { message: "Enviado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { message: "Erro ao enviar e-mail", error: String(error) },
      { status: 500 }
    );
  }
}
