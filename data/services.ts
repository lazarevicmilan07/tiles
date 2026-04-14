export type ServiceIcon = "grid" | "wrench" | "droplets" | "hammer" | "shield" | "sparkles";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: string;
  icon: ServiceIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: "tile-installation",
    title: "Ugradnja pločica",
    shortDescription:
      "Precizno polaganje pločica za podove, zidove, tuševe i mokre prostorije korišćenjem premium materijala.",
    longDescription:
      "Od malih podova kupatila do kompletnih zidnih sistema mokrih prostorija, naša usluga ugradnje pločica pokriva svaku površinu. Bavimo se pripremom površine, hidroizolacionim membranama, nanošenjem lepka, fugovanjem i završnom obradom — sve po najvišim standardima.",
    price: "Od €45/m²",
    icon: "grid",
    features: [
      "Podne i zidne pločice",
      "Tuš kabine i mokre prostorije",
      "Mozaik i pločice velikog formata",
      "Hidroizolacija i priprema podloge",
      "Fugovanje i zaptivanje",
      "5-godišnja garancija na rad",
    ],
  },
  {
    id: "bathroom-repairs",
    title: "Popravke kupatila",
    shortDescription:
      "Brze, profesionalne popravke naprsnutih pločica, fuga, silikona i oštećenih površina.",
    longDescription:
      "Naprsle pločice, propala fuga i plesnjivi silikon nisu samo ružni — mogu dovesti do ozbiljnih vodenih oštećenja. Naši stručnjaci za popravke dijagnostikuju koren problema, ispravno ga otklone i vrate vaše kupatilo u stanje kao novo.",
    price: "Od €80 fiksno",
    icon: "wrench",
    features: [
      "Zamena naprsnutih i odbitih pločica",
      "Popravka i čišćenje fuga",
      "Zamena silikona",
      "Praćenje curenja i hidroizolaciona popravka",
      "Obnova površina",
      "Dostupni termini iste nedelje",
    ],
  },
  {
    id: "plumbing",
    title: "Vodovodne usluge",
    shortDescription:
      "Sertifikovana instalacija i popravka vodovoda za tuševe, kade, toalete i cevovod.",
    longDescription:
      "Naši sertifikovani vodoinstalateri rešavaju sve od ugradnje novih armatúra do kompletnog preusmeravanja cevi. Bilo da postavljate novi tuš kabinu, menjate toalet ili se bavite skrivenim curenjem, obavljamo posao bezbedno i po propisima.",
    price: "Od €95/sat",
    icon: "droplets",
    features: [
      "Ugradnja tuša i kade",
      "Montaža toaleta i lavaboa",
      "Popravka i zamena cevi",
      "Priključci bojlera",
      "Detekcija i popravka curenja",
      "Sertifikovani radovi",
    ],
  },
  {
    id: "full-renovation",
    title: "Kompletna renovacija kupatila",
    shortDescription:
      "Potpuna transformacija kupatila — dizajn, rušenje, pločice, vodovod i završna obrada.",
    longDescription:
      "Jedna tačka kontakta za ceo projekat vašeg kupatila. Upravljamo kompletnom renovacijom od uklanjanja starog kupatila do predaje gotovog, besprekorno čistog prostora. Postavljanje pločica, vodovod, koordinacija elektroinstalacija i montaža — sve u izvođenju našeg tima.",
    price: "Od €2.500",
    icon: "sparkles",
    features: [
      "Potpuno uklanjanje i odlaganje otpada",
      "Strukturalna hidroizolacija",
      "Ugradnja pločica i vodovoda",
      "Montaža sanitarija",
      "Upravljanje projektom uključeno",
      "Dostupni ugovori sa fiksnom cenom",
    ],
  },
  {
    id: "grout-sealing",
    title: "Fugovanje i zaptivanje",
    shortDescription:
      "Profesionalno refugovanje i silikonsko zaptivanje za sprečavanje curenja i plesni.",
    longDescription:
      "Stara, raspadnuta fuga i propali silikon su glavni uzrok skrivenih vodenih oštećenja u kupatilima. Potpuno uklanjamo staru fugu i silikon, tretiramo eventualne plesni i nanosimo svežu, bojom usklađenu fugu i anti-plesni silikon.",
    price: "Od €120 fiksno",
    icon: "shield",
    features: [
      "Potpuno uklanjanje i ponovna primena fuge",
      "Anti-plesni silikonsko zaptivanje",
      "Usklađivanje boja",
      "Tretman plesni",
      "Rezultati isti dan",
      "Pristupačna opcija održavanja",
    ],
  },
  {
    id: "waterproofing",
    title: "Hidroizolacija",
    shortDescription:
      "Sistemi tankovanja i membrane koji štite vašu konstrukciju od prodiranja vode.",
    longDescription:
      "Pravilna hidroizolacija je osnova svakog dugotrajnog kupatila. Nanosimo sertifikovane sisteme tankovanja i lepljive membrane na podove i zidove pre početka polaganja pločica, obezbeđujući potpunu zaštitu od curenja.",
    price: "Od €30/m²",
    icon: "hammer",
    features: [
      "Sertifikovani sistemi tankovanja",
      "Primena lepljive membrane",
      "Pokrivenost poda i zidova",
      "Hidroizolacija tuš-kade",
      "Pregled pre ugradnje pločica",
      "10-godišnja garancija hidroizolacije",
    ],
  },
];
