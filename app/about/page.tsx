import type { Metadata } from "next";
import { business } from "@/data/business";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "O nama",
  description: `Saznajte više o ${business.name} — ${business.yearsExperience} godina profesionalnih usluga za kupatila u ${business.location}.`,
  openGraph: {
    title: `O nama | ${business.name}`,
    description: business.longDescription,
  },
};

const stats = [
  { value: business.projectsCompleted, label: "Završenih projekata" },
  { value: business.yearsExperience, label: "Godina iskustva" },
  { value: business.satisfiedClients, label: "Zadovoljnih klijenata" },
  { value: business.founded, label: "Godina osnivanja" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">O {business.name}</h1>
            <p className="text-blue-100 text-lg">{business.tagline}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Naša priča</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {business.longDescription}
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Smešteni u {business.location}, opslužujemo vlasnike kuća, stanodavce i komercijalne klijente u celom regionu. Svaki projekat — veliki ili mali — dobija isti nivo pažnje, preciznosti i profesionalizma.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40 rounded-2xl p-6 text-center"
                >
                  <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Naše vrednosti</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Ovo su principi koji vode svaki projekat koji preuzmemo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {business.values.map((value, i) => (
              <div key={value.title} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">Radno vreme</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 space-y-3">
              {Object.values(business.workingHours).map((hours) => (
                <p key={hours} className="text-gray-700 dark:text-gray-200 font-medium">
                  {hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Spremni da radite sa nama?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Stupite u kontakt danas i pustite nas da vam pomognemo da napravite kupatilo o kakvom ste oduvek sanjali.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              Kontaktirajte nas
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Naše usluge
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
