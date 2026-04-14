import { contact } from "@/data/contact";

interface MapEmbedProps {
  className?: string;
  height?: string;
}

export default function MapEmbed({ className = "", height = "400px" }: MapEmbedProps) {
  return (
    <div
      className={`w-full rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm ${className}`}
      style={{ height }}
    >
      <iframe
        src={contact.mapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${contact.address.full}`}
      />
    </div>
  );
}
