"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

const ThankYou = (): React.ReactElement => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <CheckCircle className="mx-auto text-green-400 w-16 h-16 mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Thank You!</h1>
        <p className="text-gray-300 mb-6">
          Your message has been sent successfully. I will get back to you as
          soon as possible.
        </p>
        <Link
          href="/"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
