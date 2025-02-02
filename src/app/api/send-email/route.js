import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, body } = await req.json(); // Get data from the request body

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
    port: 587,
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password (or app password)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: body,
    };

    await transporter.sendMail(mailOptions); // Send the email
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error }),
      { status: 500 }
    );
  }
}
