import Link from "next/link";
import Image from "next/image";

export default function RelatedServices({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-black">Related Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((relatedService) => (
          <Link
            key={relatedService.id}
            href={`/services/${relatedService.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <Image
                src={relatedService.image || "https://via.placeholder.com/400x200?text=Service+Image"}
                alt={relatedService.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-black mb-2">{relatedService.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-black">
                  {relatedService.designer}
                </span>
                <span className="flex items-center text-sm">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-black">{relatedService.rating.toFixed(1)}</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-purple-600">
                  ${relatedService.price.toFixed(2)}
                </span>
                <span className="text-sm text-black">
                  {relatedService.deliveryTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}