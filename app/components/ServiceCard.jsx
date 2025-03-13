import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/services/${service.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{service.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {service.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">
            ${service.price}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{service.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}