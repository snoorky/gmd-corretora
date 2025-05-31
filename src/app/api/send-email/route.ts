import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log(data);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
      logger: true,
      debug: true,
    });

    const mailOptions = {
      from: `"Formulário do Site" <${process.env.EMAIL_USER}>`,
      to: "corretora@gmdbus.com.br",
      replyTo: data.email,
      subject: `Novo formulário: ${data.tipo}`,
      html: generateEmailHtml(data),
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

function generateEmailHtml(data: Record<string, string>) {
  const isWhatsApp = (key: string): boolean =>
    key.toLowerCase().includes("telefone") ||
    key.toLowerCase().includes("whatsapp");

  const isEmail = (key: string): boolean => key.toLowerCase().includes("email");

  const renderValue = (key: string, value: string): string => {
    if (isWhatsApp(key)) {
      const phone = value.replace(/\D/g, "");
      return `<a href="https://api.whatsapp.com/send?phone=55${phone}" style="color:#ce5c3c; text-decoration:none">
        ${value} (WhatsApp)
      </a>`;
    }

    if (isEmail(key)) {
      return `<a href="mailto:${value}" style="color:#ce5c3c; text-decoration:none">${value}</a>`;
    }

    return value;
  };

  const rows = Object.entries(data)
    .filter(([key]) => key.toLowerCase() !== "tipo")
    .map(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .replace(/^./, (str) => str.toUpperCase());

      return `
        <tr>
          <td style="font-weight:bold; border-bottom: 1px solid #3f3f3f5a; background:#f0f0f0; color:#1e3759; border-left: 1px solid #3f3f3f5a;">
            ${label}
          </td>
          <td style="border-bottom:1px solid #3f3f3f5a; border-right: 1px solid #3f3f3f5a;">
            ${renderValue(key, value)}
          </td>
        </tr>
      `;
    })
    .join("");

  const tipo = data.tipo || "Formulário";

  return `
    <body style="margin:0 auto; padding:2rem; background-color: #ffffff; color:#3f3f3f">
      <table role="presentation" cellspacing="0" cellpadding="16" border="0" width="700" align="center" style="max-width:inherit; background-color:#ffffff; border-radius:16px 16px 0 0;">
        <thead>
          <tr>
            <th colspan="2" style="background:#ce5c3c; color:#ffffff; font-size:1.5rem; padding:1rem">
              Formulário: ${tipo}
            </th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </body>
  `;
}
