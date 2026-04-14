import { PricingItem } from "@/data/pricing";

interface PricingCardProps {
  item: PricingItem;
}

export default function PricingCard({ item }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border p-6 flex flex-col gap-3 transition-all duration-200 ${
        item.highlight
          ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/40"
          : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-800 dark:text-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      {item.highlight && (
        <span className="absolute -top-3 left-6 bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full">
          Popularno
        </span>
      )}

      <p
        className={`font-semibold text-base leading-snug ${
          item.highlight ? "text-blue-100" : "text-gray-900 dark:text-white"
        }`}
      >
        {item.service}
      </p>

      <div className="flex items-baseline gap-1">
        <span className={`text-3xl font-extrabold ${item.highlight ? "text-white" : "text-blue-600 dark:text-blue-400"}`}>
          {item.price.startsWith("Od") ? item.price : `€${item.price}`}
        </span>
        {!item.price.startsWith("Od") && (
          <span className={`text-sm font-medium ${item.highlight ? "text-blue-200" : "text-gray-400 dark:text-gray-500"}`}>
            {item.unit}
          </span>
        )}
        {item.price.startsWith("Od") && (
          <span className={`text-sm font-medium ${item.highlight ? "text-blue-200" : "text-gray-400 dark:text-gray-500"}`}>
            {item.unit}
          </span>
        )}
      </div>

      <p className={`text-sm leading-relaxed ${item.highlight ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`}>
        {item.description}
      </p>
    </div>
  );
}
