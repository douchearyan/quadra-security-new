"use client";

import ContactForm from "@/components/ContactForm";
import Canonical from "@/utils/Canonical";
import Head from "next/head";

export default function ContactUsPage() {
  return (
    <>
   
      <Head>
        <title>Contact Us | Quadra Security</title>
        <meta
          name="description"
          content="Contact us to better understand your security needs Or visit us in Gurugram at our store . "
        />
      </Head>
         <Canonical />
      <main className="min-h-screen bg-gray-300">
        <ContactForm />
      </main>
    </>
  );
}
