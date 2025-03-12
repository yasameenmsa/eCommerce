"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { exampleServices, servicesById } from "@/data/services";

// The servicesById is already imported from data/services.js

export default function Services() {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setServices(exampleServices);
      setFilteredServices(exampleServices);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    // Filter services based on selected filters and search query
    let result = [...services];
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(service => service.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        service => 
          service.title.toLowerCase().includes(query) || 
          service.description.toLowerCase().includes(query) ||
          service.designer.toLowerCase().includes(query)
      );
    }
    
    // Sort services
    result = sortServices(result, sortBy);
    
    setFilteredServices(result);
  }, [selectedCategory, searchQuery, services, sortBy]);

  // Sort services based on selected option
  const sortServices = (servicesToSort, sortOption) => {
    switch (sortOption) {
      case "price-low":
        return [...servicesToSort].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...servicesToSort].sort((a, b) => b.price - a.price);
      case "rating":
        return [...servicesToSort].sort((a, b) => b.rating - a.rating);
      case "newest":
        return [...servicesToSort].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case "popular":
      default:
        return [...servicesToSort].sort((a, b) => b.reviews - a.reviews);
    }
  };

  // Get unique categories
  const categories = ["All", ...new Set(services.map(service => service.category))];

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-8 rounded-lg mb-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Professional Design Services</h1>
            <p className="text-xl mb-8">
              Elevate your brand with our premium design solutions
            </p>
            <a
              href="#services"
              className="bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-gray-100 transition font-medium"
            >
              Explore Services
            </a>
          </div>
        </section>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Services
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                placeholder="Search by title, description, or designer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'} found
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* Services Grid */}
        <div
          id="services"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200?text=Service+Image";
                  }}
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-1">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center mb-3">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{service.rating.toFixed(1)}</span>
                  <span className="text-gray-600 text-xs ml-1">
                    ({service.reviews} reviews)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-purple-600">${service.price.toFixed(2)}</span>
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    Delivery: {service.deliveryTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && !isLoading && (
          <div className="text-center py-10 bg-white rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setSortBy("popular");
              }}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}