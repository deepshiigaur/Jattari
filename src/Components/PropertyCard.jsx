import { ArrowUpRight, MapPin } from "lucide-react";

function PropertyCard({
  image,
  title,
  location,
  type,
}) {
  return (
    <div className="group overflow-hidden rounded-4x1 border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-orange-500 shadow-md">
          {type}
        </div>

        <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={19} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-black text-gray-950">
          {title}
        </h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={17} className="shrink-0 text-orange-500" />
          <span>{location}</span>
        </div>

        <div className="mt-5 border-t border-gray-100 pt-5">
          <span className="text-sm font-bold text-orange-500">
            View Property →
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;