import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";

import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Rita Silva</title>
        <meta
          name="description"
          content="Contact Rita Silva for bookings, collaborations, and workshop inquiries."
        />
        <meta property="og:title" content="Contact Rita Silva" />
        <meta
          property="og:description"
          content="Bookings and contact information for electronic music artist Rita Silva."
        />
        <meta property="og:image" content="/assets/og.jpg" />
        <meta
          property="og:url"
          content="https://www.ritasilva.online/contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen w-screen">
      <Navbar />
      <Contact />
    </div>
    </>
  );
}