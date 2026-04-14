import type { Metadata } from "next";
import { business } from "@/data/business";
import { pricingCategories, pricingNotes } from "@/data/pricing";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Cenovnik",
  description: `Transparentne cene za ugradnju pločica, popravke kupatila i vodovod u izvođenju ${business.name} u ${business.location}.`,
  openGraph: {
    title: `Cenovnik | ${business.name}`,
    description: `Jasne, unapred poznate cene za sve usluge kupatila. Bez skrivenih naknada.`,
  },
};

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Transparentne cene</h1>
            <p className="text-blue-100 text-lg">
              Jasne cene, bez skrivenih troškova. Dobijte preciznu ponudu za vaš projekat — kontaktirajte nas u bilo koje vreme.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {pricingCategories.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1.5 h-7 bg-blue-600 rounded-full inline-block" />
                {category.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item) => (
                  <PricingCard key={item.service} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="bg-white dark:bg-gray-900 py-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-4">Važne napomene</h3>
            <ul className="space-y-2">
              {pricingNotes.map((note) => (
                <li key={note} className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-300">
                  <svg className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Želite tačnu cenu za vaš projekat?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Pošaljite nam detalje i mi ćemo vam dati preciznu ponudu bez obaveza u roku od 24 sata.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Zatražite besplatnu ponudu
          </Button>
        </div>
      </section>
    </>
  );
}
