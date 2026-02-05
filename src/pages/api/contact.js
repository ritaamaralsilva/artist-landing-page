import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, name, subject, message } = req.body || {};

  if (!email || !name || !subject || !message) {
    return res.status(400).json({ error: "Missing fields." });
  }

  // anti-spam (avoid messages that are TOO long)
  if (message.length > 5000) {
    return res.status(400).json({ error: "Message too long." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  try {
    await resend.emails.send({
      from: "Rita Silva <contact@contact.ritasilva.online>", 
      to: process.env.CONTACT_TO_EMAIL, // ritasilvabooking@gmail.com
      reply_to: email, // this needs to have user email 
      subject: `[Site] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send email." });
  }
}
