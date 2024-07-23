import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY as string;
const myEmail = process.env.MY_EMAIL as string;

const resend = new Resend(resendApiKey);

export async function POST(req: NextRequest) {
  const { senderEmail, message } = await req.json();
  const subject = "Message from contact form";
  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: myEmail,
      subject: subject,
      reply_to: senderEmail,
      html: `
        <h1>${subject}</h1>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "An error occurred" });
  }
}
