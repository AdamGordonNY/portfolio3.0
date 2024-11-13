import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-300 dark:text-gray-800">
      <small className="mb-2 block text-xs">&copy; 2024, Adam Gordon</small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        Next.js 14, TypeScript, Tailwind CSS, Framer Motion, React Email &
        Resend, Vercel hosting.
      </p>
    </footer>
  );
}
