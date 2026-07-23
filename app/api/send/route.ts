import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resendApiKey = process.env.RESEND_API_KEY as string;
const myEmail = process.env.MY_EMAIL as string;

const resend = new Resend(resendApiKey || "re_dummy");

export async function POST(req: NextRequest) {
  try {
    const { senderEmail, message } = await req.json();
    const subject = "Message from contact form";

    if (!resendApiKey || !myEmail) {
      return NextResponse.json(
        { message: "Message received (API key not configured)" },
        { status: 200 }
      );
    }

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

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Something went wrong, please try again." },
      { status: 500 }
    );
  }
}
