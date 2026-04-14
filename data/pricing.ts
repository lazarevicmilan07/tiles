export interface PricingItem {
  service: string;
  price: string;
  unit: string;
  description: string;
  highlight?: boolean;
}

export interface PricingCategory {
  category: string;
  items: PricingItem[];
}

export const pricingCategories: PricingCategory[] = [
  {
    category: "Ugradnja pločica",
    items: [
      {
        service: "Standardne podne pločice",
        price: "45",
        unit: "€/m²",
        description: "Keramičke ili porcelanske pločice do 60×60 cm, priprema podloge uključena.",
      },
      {
        service: "Podne pločice velikog formata",
        price: "65",
        unit: "€/m²",
        description: "Pločice veće od 60×60 cm koje zahtevaju sistem za nivelaciju.",
      },
      {
        service: "Zidne pločice",
        price: "50",
        unit: "€/m²",
        description: "Cela zidna površina uključujući lepak i fugovanje.",
      },
      {
        service: "Mozaik pločice",
        price: "85",
        unit: "€/m²",
        description: "Mrežasto montirani mozaik listovi, složeni uzorci.",
        highlight: true,
      },
      {
        service: "Tuš kabina",
        price: "550",
        unit: "€ fiksno",
        description: "Kompletni zidovi i pod tuša, hidroizolacija + pločice (do 4 m²).",
      },
    ],
  },
  {
    category: "Popravke kupatila",
    items: [
      {
        service: "Zamena jedne pločice",
        price: "80",
        unit: "€ fiksno",
        description: "Uklanjanje i zamena jedne oštećene pločice, fuga usklađena po boji.",
      },
      {
        service: "Refugovanje (po prostoriji)",
        price: "120",
        unit: "€ fiksno",
        description: "Uklanjanje stare fuge i nanošenje nove bojom usklađene fuge.",
        highlight: true,
      },
      {
        service: "Zamena silikonskog zaptivača",
        price: "90",
        unit: "€ fiksno",
        description: "Uklanjanje starog silikona, tretman plesni, nanošenje anti-plesni silikona.",
      },
      {
        service: "Popravka vodenog oštećenja",
        price: "Od 200",
        unit: "€ fiksno",
        description: "Procena, sušenje, popravka podloge i ponovna ugradnja pločica na pogođenom mestu.",
      },
    ],
  },
  {
    category: "Vodovodne instalacije",
    items: [
      {
        service: "Satnica rada",
        price: "95",
        unit: "€/sat",
        description: "Standardna satnica (minimum 1 sat). Materijal se naplaćuje posebno.",
      },
      {
        service: "Ugradnja tuša",
        price: "350",
        unit: "€ fiksno",
        description: "Isporuka i ugradnja mešalice za tuš, kadice, zaslona (pločice nisu uključene).",
        highlight: true,
      },
      {
        service: "Ugradnja toaleta",
        price: "180",
        unit: "€ fiksno",
        description: "Uklanjanje starog toaleta, isporuka i ugradnja standardnog ili zidnog modela.",
      },
      {
        service: "Ugradnja lavaboa i slavine",
        price: "150",
        unit: "€ fiksno",
        description: "Podni ili ugradbeni lavabo sa mešalicom, sifonom i odvodom.",
      },
      {
        service: "Popravka curenja",
        price: "Od 120",
        unit: "€ fiksno",
        description: "Lociranje i popravka curenja cevi ili spoja. Uključuje test pritiska.",
      },
    ],
  },
  {
    category: "Hidroizolacija",
    items: [
      {
        service: "Sistem tankovanja",
        price: "30",
        unit: "€/m²",
        description: "Potpuna tečna membranska hidroizolacija, BBA-sertifikovani proizvod.",
        highlight: true,
      },
      {
        service: "Hidroizolacija tuš-kade",
        price: "150",
        unit: "€ fiksno",
        description: "Sistem lepljive membrane za oblast tuš-kade.",
      },
    ],
  },
];

export const pricingNotes = [
  "Sve cene ne uključuju PDV (21% NL)",
  "Besplatne ponude na licu mesta za projekte iznad €500",
  "Troškovi materijala nisu uključeni osim ako nije navedeno",
  "Hitni poziv: +€75 doplatak",
  "Cene važe od 2024. — kontaktirajte nas za najnovije cene",
];
