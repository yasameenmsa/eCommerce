"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Header with Navigation */}
      <header className="bg-white shadow-md py-4 mb-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600">Ecommerce</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className={`font-medium transition ${
                    isActive("/")
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`font-medium transition ${
                    isActive("/services")
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className={`font-medium transition ${
                    isActive("/books")
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className={`font-medium transition ${
                    isActive("/courses")
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  Courses
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
