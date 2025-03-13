import Image from "next/image";

export default function ServicePortfolio({ service }) {
  if (!service) return null;

  // Example portfolio items - in a real app, this would come from the service data
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Complete brand identity including logo, color palette, and typography",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
      client: "TechStart Inc.",
      completedDate: "2023"
    },
    {
      id: 2,
      title: "Product Packaging Design",
      description: "Premium packaging design for consumer products",
      image: "https://images.unsplash.com/photo-1636955779321-819753cd1741?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      client: "Organic Foods Co.",
      completedDate: "2023"
    },
    {
      id: 3,
      title: "Website Design",
      description: "Modern and responsive website design",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      client: "Digital Solutions Ltd.",
      completedDate: "2023"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-black">Portfolio</h3>
        <span className="text-sm text-black">{portfolioItems.length} Projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-black mb-2">{item.title}</h4>
              <p className="text-sm text-black mb-3">{item.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-purple-600">{item.client}</span>
                <span className="text-black">{item.completedDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mt-8">
        <h4 className="font-semibold text-black mb-4">Portfolio Highlights</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-purple-600">100+</p>
            <p className="text-sm text-black">Projects Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">95%</p>
            <p className="text-sm text-black">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">12+</p>
            <p className="text-sm text-black">Industries Served</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">8+</p>
            <p className="text-sm text-black">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}