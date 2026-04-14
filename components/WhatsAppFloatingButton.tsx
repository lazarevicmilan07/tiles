"use client";

import { contact } from "@/data/contact";

export default function WhatsAppFloatingButton() {
  const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Razgovarajte sa nama na WhatsApp-u"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg shadow-green-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* WhatsApp SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-white shrink-0"
      >
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.47 2.04 7.77L.5 31.5l7.96-2.03A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.18a13.1 13.1 0 01-6.68-1.83l-.48-.28-4.72 1.2 1.23-4.6-.31-.5A13.14 13.14 0 1116 28.68zm7.2-9.84c-.39-.2-2.32-1.14-2.68-1.27-.36-.13-.62-.2-.88.2-.26.39-1.01 1.27-1.24 1.53-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.14-1.94-1.16-1.04-1.94-2.32-2.17-2.71-.23-.39-.02-.6.17-.8.18-.17.39-.46.58-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.12-1.2-2.91-.32-.77-.64-.66-.88-.67H9.6c-.26 0-.68.1-1.04.49-.36.39-1.37 1.34-1.37 3.27s1.4 3.79 1.6 4.05c.2.26 2.76 4.21 6.68 5.91.93.4 1.66.64 2.23.82.94.3 1.79.26 2.46.16.75-.11 2.32-.95 2.65-1.87.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
      </svg>
      <span className="hidden sm:inline text-sm">WhatsApp</span>
    </a>
  );
}
