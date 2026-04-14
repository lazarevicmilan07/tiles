import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/business";
import { contact } from "@/data/contact";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: business.seo.title,
  description: business.seo.description,
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
  },
};

const stats = [
  { label: "Završenih projekata", value: business.projectsCompleted },
  { label: "Godina iskustva", value: business.yearsExperience },
  { label: "Zadovoljnih klijenata", value: business.satisfiedClients },
  { label: "Garancija", value: "5 godina" },
];

export default function HomePage() {
  const previewServices = services.slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 bg-blue-600/50 text-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-500/40">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {business.location}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              {business.tagline}
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {business.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Besplatna ponuda
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Naše usluge
              </Button>
              <a
                href={`tel:${contact.phoneRaw}`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-base transition-colors self-center"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" className="fill-gray-50 dark:fill-gray-900" />
          </svg>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Preview ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Šta radimo
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
              Od jedne naprsle pločice do kompletne renovacije kupatila — sve to radimo mi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {previewServices.map((service) => (
              <ServiceCard key={service.id} service={service} compact />
            ))}
          </div>

          <div className="text-center">
            <Button href="/services" variant="primary" size="md">
              Pogledajte sve usluge
            </Button>
          </div>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Zašto izabrati {business.name}?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {business.values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 border border-gray-100 dark:border-gray-600 hover:border-blue-100 dark:hover:border-blue-700 hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Spremni da transformišete vaše kupatilo?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Kontaktirajte nas danas za besplatnu ponudu bez obaveza. Odgovaramo u roku od 24 sata.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Besplatna ponuda
            </Button>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-sm"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 32 32">
                <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.82.74 5.47 2.04 7.77L.5 31.5l7.96-2.03A15.44 15.44 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm7.2 19.34c-.39-.2-2.32-1.14-2.68-1.27-.36-.13-.62-.2-.88.2-.26.39-1.01 1.27-1.24 1.53-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.14-1.94-1.16-1.04-1.94-2.32-2.17-2.71-.23-.39-.02-.6.17-.8.18-.17.39-.46.58-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.12-1.2-2.91-.32-.77-.64-.66-.88-.67H9.6c-.26 0-.68.1-1.04.49-.36.39-1.37 1.34-1.37 3.27s1.4 3.79 1.6 4.05c.2.26 2.76 4.21 6.68 5.91.93.4 1.66.64 2.23.82.94.3 1.79.26 2.46.16.75-.11 2.32-.95 2.65-1.87.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
