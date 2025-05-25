Passo a passo — SMTP Hostinger no Nodemailer
1️⃣ Primeiro: pegue as credenciais no Hostinger
E-mail: contato@gmdcorretora.com.br (ou similar)

Senha: a senha da conta de e-mail (ou senha de app, se usar 2FA)

Servidor SMTP: geralmente é:

smtp.hostinger.com (ou mail.gmdcorretora.com.br)

Porta SMTP:

587 (STARTTLS) → mais comum

465 (SSL/TLS) → se preferir criptografia direta

2️⃣ Configure no .env.local:
env
Copiar
Editar
EMAIL_USER=contato@gmdcorretora.com.br
EMAIL_PASSWORD=sua_senha_aqui
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
3️⃣ Seu route.ts atualizado (simples e direto):
typescript
Copiar
Editar
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
try {
const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!) || 587,
      secure: false, // STARTTLS (587)
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASSWORD!,
      },
    });

    const htmlBody = `
      <h2>Formulário: ${data.tipo}</h2>
      <ul>
        ${Object.entries(data)
          .filter(([key]) => key !== 'tipo')
          .map(([key, value]) => {
            const label = key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
            return `<li><strong>${label}:</strong> ${Array.isArray(value) ? value.join(', ') : value}</li>`;
          })
          .join('')}
      </ul>
    `;

    const mailOptions = {
      from: `"Formulário do Site" <${process.env.EMAIL_USER}>`,
      to: 'raphaelvitorlopes@icloud.com', // <- destino dos formulários
      replyTo: data.email || undefined,
      subject: `Novo formulário: ${data.tipo}`,
      html: htmlBody,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('E-mail enviado com sucesso:', info.messageId);

    return NextResponse.json({ message: 'Enviado com sucesso' }, { status: 200 });

} catch (error) {
console.error('Erro ao enviar e-mail:', error);
return NextResponse.json({ message: 'Erro ao enviar e-mail', error: String(error) }, { status: 500 });
}
}
✅ Resumo:
Item O que muda
Sem service: 'gmail' Agora usa host: smtp.hostinger.com
Autenticação por user/pass Simples e direto
Porta 587 (STARTTLS) Seguro, padrão
.env.local com user, pass, host e port ✅
Email bonito montado via HTML no backend ✅

✅ Pronto!
Vercel: OK (executa API route sem problema)

Hostinger SMTP: OK (envia e-mail via user/pass)

Sem OAuth2, sem complicação.
