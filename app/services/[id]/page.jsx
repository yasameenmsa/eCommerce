"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";

// Import components (we'll create these next)
import ServiceHeader from "@/components/services/ServiceHeader";
import ServiceTabContent from "@/components/services/ServiceTabContent";
import RelatedServices from "@/components/services/RelatedServices";
import LoadingState from "@/components/services/LoadingState";
import ErrorState from "@/components/services/ErrorState";

// This would normally be imported from a data file
const exampleServices = [
  {
    id: "service-001",
    title: "Logo Design",
    description: "Professional logo design to establish your brand identity",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    price: 299.99,
    category: "Branding",
    deliveryTime: "3-5 days",
    revisions: 3,
    designer: "Sarah Johnson",
    rating: 4.8,
    reviews: 124,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    longDescription: "Our professional logo design service creates a unique visual identity that represents your brand's values and resonates with your target audience. We follow a comprehensive design process that includes research, concept development, and refinement to deliver a logo that stands out in your industry.",
    features: [
      "Custom-made, original design",
      "Multiple concept options",
      "Vector files for scalability",
      "Full copyright ownership",
      "Source files included",
      "Social media kit"
    ],
    process: [
      "Initial consultation and brief",
      "Research and concept development",
      "Presentation of initial concepts",
      "Revisions and refinement",
      "Finalization and delivery of files"
    ],
    portfolio: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
      "https://images.unsplash.com/photo-1636467204130-edf8ee206dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    ],
    designerBio: "Sarah Johnson is a senior graphic designer with over 8 years of experience in branding and identity design. She has worked with clients ranging from startups to Fortune 500 companies, helping them establish strong visual identities that drive brand recognition.",
    designerImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  // Add more services here...
];

// Create a lookup object for services by ID
const servicesById = exampleServices.reduce((acc, service) => {
  acc[service.id] = service;
  return acc;
}, {});

export default function ServiceDetails() {
  const params = useParams();
  const serviceId = params.id;
  
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const fetchServiceDetails = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // For this example, we'll use our example data
        // In a real app, you would fetch from an API
        if (servicesById[serviceId]) {
          setService(servicesById[serviceId]);
          
          // Get related services from the same category
          const related = exampleServices
            .filter(s => s.id !== serviceId && s.category === servicesById[serviceId].category)
            .slice(0, 3);
          
          setRelatedServices(related);
        } else {
          throw new Error('Service not found');
        }
      } catch (err) {
        console.error('Error fetching service details:', err);
        setError('Failed to load service details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchServiceDetails();
  }, [serviceId]);

  if (isLoading) {
    return (
      <>
        <Header />
        <LoadingState />
      </>
    );
  }

  if (error || !service) {
    return (
      <>
        <Header />
        <ErrorState error={error} />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <Link 
          href="/services" 
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Services
        </Link>
        
        <ServiceHeader service={service} />
        <ServiceTabContent service={service} activeTab={activeTab} setActiveTab={setActiveTab} />
        <RelatedServices services={relatedServices} />
      </div>
    </>
  );
}