export default function ServiceDescription({ service }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Service Description</h2>
      <p className="text-gray-600 mb-6">{service.longDescription}</p>
      
      <h3 className="text-lg font-semibold mb-3">What's Included</h3>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}