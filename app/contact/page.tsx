import type { Metadata } from "next";
import { business } from "@/data/business";
import { contact } from "@/data/contact";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktirajte ${business.name} u ${business.location}. Pozovite, pišite imejl, WhatsApp ili posetite nas. Dostupne besplatne ponude.`,
  openGraph: {
    title: `Kontakt | ${business.name}`,
    description: `Kontaktirajte ${business.name} telefonom, imejlom ili WhatsApp-om. Besplatne ponude za sve usluge kupatila.`,
  },
};

const contactMethods = [
  {
    label: "Telefon",
    value: contact.phone,
    href: `tel:${contact.phoneRaw}`,
    description: "Pozovite nas direktno — brzo odgovaramo.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Imejl",
    value: contact.email,
    href: `mailto:${contact.email}`,
    description: "Odgovaramo u roku od jednog radnog dana.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: `+${contact.whatsapp}`,
    href: `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`,
    description: "Pošaljite poruku i dobijte ponudu brzo.",
    external: true,
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.47 2.04 7.77L.5 31.5l7.96-2.03A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.2 19.34c-.39-.2-2.32-1.14-2.68-1.27-.36-.13-.62-.2-.88.2-.26.39-1.01 1.27-1.24 1.53-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.14-1.94-1.16-1.04-1.94-2.32-2.17-2.71-.23-.39-.02-.6.17-.8.18-.17.39-.46.58-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.12-1.2-2.91-.32-.77-.64-.66-.88-.67H9.6c-.26 0-.68.1-1.04.49-.36.39-1.37 1.34-1.37 3.27s1.4 3.79 1.6 4.05c.2.26 2.76 4.21 6.68 5.91.93.4 1.66.64 2.23.82.94.3 1.79.26 2.46.16.75-.11 2.32-.95 2.65-1.87.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
      </svg>
    ),
  },
  {
    label: "Adresa",
    value: contact.address.full,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address.full)}`,
    description: "Posetite nas lično.",
    external: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Stupite u kontakt</h1>
            <p className="text-blue-100 text-lg">
              Kontaktirajte nas za besplatnu ponudu ili bilo kakva pitanja. Odgovaramo u roku od 24 sata.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards + Map */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Contact Methods */}
            <div className="space-y-5">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Kontakt detalji</h2>

              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  {...(method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-start gap-4 bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      {method.label}
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white text-base leading-snug">
                      {method.value}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{method.description}</p>
                  </div>
                </a>
              ))}

              {/* Working hours */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                      Radno vreme
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">{business.workingHours.weekdays}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">{business.workingHours.saturday}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{business.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Pronađite nas</h2>
              <MapEmbed height="480px" />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 text-center">{contact.address.full}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
