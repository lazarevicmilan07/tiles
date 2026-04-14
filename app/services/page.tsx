import type { Metadata } from "next";
import { business } from "@/data/business";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Naše usluge",
  description: `Profesionalne usluge za kupatila u ${business.location}: ugradnja pločica, popravke, vodovod, hidroizolacija i kompletne renovacije kupatila.`,
  openGraph: {
    title: `Usluge | ${business.name}`,
    description: `Istražite sve usluge koje nudi ${business.name} u ${business.location}.`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Naše usluge</h1>
            <p className="text-blue-100 text-lg">
              Sve što vam je potrebno za savršeno kupatilo — na jednom mestu, u izvođenju jednog pouzdanog tima.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} compact={false} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Niste sigurni koja usluga vam je potrebna?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Kontaktirajte nas za besplatnu procenu. Dijagnostikujemo problem i preporučimo najisplativije rešenje.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Besplatna ponuda
          </Button>
        </div>
      </section>
    </>
  );
}
