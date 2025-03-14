"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import { exampleServices } from "../data/services";

export default function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [useExampleData, setUseExampleData] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setServices(exampleServices);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter services based on search term
    const filteredServices = exampleServices.filter((service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setServices(filteredServices);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    const sortedServices = [...services].sort((a, b) => {
      if (value === "desc") {
        return new Date(b.date) - new Date(a.date);
      }
      return new Date(a.date) - new Date(b.date);
    });
    setServices(sortedServices);
  };

  const toggleExampleData = () => {
    setUseExampleData(!useExampleData);
    // Here you would typically fetch real data or use example data
    setServices(useExampleData ? [] : exampleServices);
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        {/* Search Section */}
        <div className="mt-10 mb-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for services..."
              className="border p-2 rounded-md flex-grow"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Filter Section */}
        <div className="mt-4 mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Services {useExampleData && "(Example Data)"}
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleExampleData}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {useExampleData ? "Load Real Data" : "Show Examples"}
            </button>
            <select
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border p-2 rounded-md"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </>
  );
}
