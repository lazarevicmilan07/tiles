export const contact = {
  phone: "+31 20 123 4567",
  phoneRaw: "+31201234567",
  email: "info@protileservices.nl",
  /** Digits only — used in https://wa.me/<whatsapp> */
  whatsapp: "31201234567",
  whatsappMessage: "Zdravo! Želeo bih da zatražim besplatnu ponudu.",
  address: {
    street: "Save Šumanovića 56",
    city: "Novi Slankamen",
    postcode: "",
    country: "Srbija",
    full: "Novi Slankamen, Save Šumanovića 56, Srbija",
  },
  /**
   * Google Maps embed URL — replace with your own from:
   * https://www.google.com/maps/embed → Share → Embed a map → copy src=""
   */
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2815.1763381743162!2d20.23704594118499!3d45.122762311729595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475af064cb3b870f%3A0x47a003a49eeda57b!2z0KHQsNCy0LUg0KjRg9C80LDQvdC-0LLQuNGb0LAgNTYsINCd0L7QstC4INCh0LvQsNC90LrQsNC80LXQvQ!5e0!3m2!1ssr!2srs!4v1776152315802!5m2!1ssr!2srs",
  social: {
    facebook: "https://facebook.com/protileservices",
    instagram: "https://instagram.com/protileservices",
  },
} as const;
