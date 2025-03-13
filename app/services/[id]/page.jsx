"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { servicesById } from "../../data/services";

export default function ServiceDetails() {
  const params = useParams();
  const serviceId = params.id;
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const fetchServiceDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        const foundService = servicesById[serviceId];
        if (foundService) {
          setService(foundService);
        } else {
          throw new Error("Service not found");
        }
      } catch (err) {
        setError("Failed to load service details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceDetails();
  }, [serviceId]);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-lg mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {error || "Service not found"}
          </h2>
          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link
        href="/services"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        ← Back to Services
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Tabs */}
            <div className="border-b">
              <nav className="flex">
                {["description", "features", "process", "faq"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-sm font-medium ${
                      activeTab === tab
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "description" && (
                <div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )}

              {activeTab === "features" && (
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "process" && (
                <ol className="space-y-4">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm mr-3">
                        {index + 1}
                      </span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              )}

              {activeTab === "faq" && (
                <div className="space-y-6">
                  {service.faq.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-medium text-gray-900 mb-2">
                        {item.question}
                      </h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              ${service.price}
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-600">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Delivery: {service.deliveryTime}
              </div>
              <div className="flex items-center text-gray-600">
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                {service.revisions} Revisions
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
              Get Started
            </button>
          </div>

          {/* Designer Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 mr-4">
                <Image
                  src={service.designer.image}
                  alt={service.designer.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  {service.designer.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.designer.specialization}
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{service.designer.bio}</p>
            <div className="text-sm text-gray-600">
              Experience: {service.designer.experience}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
