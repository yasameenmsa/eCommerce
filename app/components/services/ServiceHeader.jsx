import { useState } from "react";

export default function ServiceHeader({ service }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-2/3 p-8">
          <div className="mb-2">
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
              {service.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{service.rating.toFixed(1)}</span>
            <span className="text-gray-600 text-sm ml-1">
              ({service.reviews} reviews)
            </span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-gray-600 text-sm">
              Delivery: {service.deliveryTime}
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            {showFullDescription 
              ? service.description 
              : `${service.description.substring(0, 150)}${service.description.length > 150 ? '...' : ''}`}
            {service.description.length > 150 && (
              <button 
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-purple-600 hover:text-purple-800 ml-1 font-medium"
              >
                {showFullDescription ? 'Show less' : 'Show more'}
              </button>
            )}
          </p>
          <div className="flex items-center">
            <img 
              src={service.designerImage} 
              alt={service.designer}
              className="w-10 h-10 rounded-full mr-3 object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40x40?text=Designer";
              }}
            />
            <div>
              <p className="font-medium">Designed by</p>
              <p className="text-gray-600 text-sm">{service.designer}</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="h-64 md:h-full bg-gray-200">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x300?text=Service+Image";
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-6 border-t">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-3xl font-bold text-purple-600">${service.price.toFixed(2)}</p>
            <p className="text-gray-600 text-sm">Includes {service.revisions} revisions</p>
          </div>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}