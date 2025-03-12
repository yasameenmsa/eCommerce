import Image from "next/image";

export default function ServiceDesigner({ service }) {
  if (!service || !service.designer) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="relative w-24 h-24">
          <Image
            src={service.designerImage || "https://via.placeholder.com/96x96?text=Designer"}
            alt={service.designer}
            fill
            className="rounded-full object-cover"
            sizes="96px"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-black">{service.designer}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★</span>
            <span className="text-black">{service.rating.toFixed(1)}</span>
            <span className="text-black">({service.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-black">Experience</p>
            <p className="font-semibold text-black">8+ years</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-black">Specialization</p>
            <p className="font-semibold text-black">{service.category}</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-black mb-2">About</h4>
          <p className="text-black">
            {service.designerBio || 
              `${service.designer} is a professional designer specializing in ${service.category.toLowerCase()} 
              with a track record of delivering high-quality design solutions to clients worldwide.`
            }
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-black mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {service.category && (
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {service.category}
              </span>
            )}
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              Design
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              Creative Direction
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-black mb-2">Service Stats</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-black">Delivery Time</p>
              <p className="font-semibold text-black">{service.deliveryTime}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-black">Revisions</p>
              <p className="font-semibold text-black">{service.revisions}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-black">Projects</p>
              <p className="font-semibold text-black">{service.reviews}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-sm text-black">Rating</p>
              <p className="font-semibold text-black">{service.rating.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}