import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, subject, message } = req.body || {};

  if (!name || !subject || !message) {
    return res.status(400).json({ error: "Missing fields." });
  }

  // anti-spam básico
  if (message.length > 5000) {
    return res.status(400).json({ error: "Message too long." });
  }

  try {
    await resend.emails.send({
      from: "Rita Silva <contact@contact.ritasilva.online>", 
      to: process.env.CONTACT_TO_EMAIL, // ritasilvabooking@gmail.com
      reply_to: process.env.CONTACT_REPLY_TO,
      subject: `[Site] ${subject}`,
      text: `Name: ${name}\nSubject: ${subject}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send email." });
  }
}
