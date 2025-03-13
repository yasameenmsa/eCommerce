import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { exampleCourses } from "./data/courses";
import { exampleServices } from "./data/services";

export default function Home() {
  // Get featured courses and services
  const featuredCourses = exampleCourses.slice(0, 3);
  const featuredServices = exampleServices.slice(0, 3);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Quality Products & Services
              </h1>
              <p className="text-xl mb-8">
                Find the best courses, services, and products all in one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  Explore Courses
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-medium transition duration-300"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
                  alt="E-commerce Platform"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expand your knowledge and skills with our top-rated online courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{course.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {course.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">
                      ${course.price}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                  <Link
                    href={`/courses/${course.id}`}
                    className="text-blue-600 font-medium hover:text-blue-800 transition"
                  >
                    View Course →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality design and development services for your business
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
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
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                  <Link
                    href={`/services/${service.id}`}
                    className="text-blue-600 font-medium hover:text-blue-800 transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            skills and businesses with our products and services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-4 rounded-md text-lg transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
