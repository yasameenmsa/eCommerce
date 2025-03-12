    import Link from "next/link";
    export default function Header() {
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
                  className="text-blue-600 font-medium hover:text-blue-800 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/books" 
                  className="text-gray-600 font-medium hover:text-blue-600 transition"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses" 
                  className="text-gray-600 font-medium hover:text-blue-600 transition"
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