"use client";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import Link from "next/link";
import Header from "../components/Header";

// Example data for initial render or fallback
const exampleBooks = [
  {
    key: "/works/OL82563W",
    title: "Harry Potter and the Philosopher's Stone",
    author_name: ["J.K. Rowling"],
    cover_i: 10521270,
    first_publish_year: 1997,
    publisher: ["Bloomsbury"],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    key: "/works/OL27448W",
    title: "The Lord of the Rings",
    author_name: ["J.R.R. Tolkien"],
    cover_i: 8743856,
    first_publish_year: 1954,
    publisher: ["Allen & Unwin"],
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    key: "/works/OL262758W",
    title: "The Great Gatsby",
    author_name: ["F. Scott Fitzgerald"],
    cover_i: 8805349,
    first_publish_year: 1925,
    publisher: ["Charles Scribner's Sons"],
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    key: "/works/OL14933414W",
    title: "To Kill a Mockingbird",
    author_name: ["Harper Lee"],
    cover_i: 12368385,
    first_publish_year: 1960,
    publisher: ["J. B. Lippincott & Co."],
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    key: "/works/OL2163649W",
    title: "1984",
    author_name: ["George Orwell"],
    cover_i: 8575544,
    first_publish_year: 1949,
    publisher: ["Secker & Warburg"],
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    key: "/works/OL1168083W",
    title: "Pride and Prejudice",
    author_name: ["Jane Austen"],
    cover_i: 12577160,
    first_publish_year: 1813,
    publisher: ["T. Egerton"],
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

const BOOKS_PER_PAGE = 6;

export default function Books() {
  const [books, setBooks] = useState(exampleBooks);
  const [filteredBooks, setFilteredBooks] = useState(exampleBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchTerm, setSearchTerm] = useState("fantasy");
  const [isLoading, setIsLoading] = useState(false);
  const [useExampleData, setUseExampleData] = useState(true);

  useEffect(() => {
    fetchBooks(searchTerm);
  }, [searchTerm]);

  const fetchBooks = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=30`
      );
      const data = await response.json();

      // Transform the data
      const booksWithDate = data.docs.map((book) => ({
        key: book.key,
        title: book.title,
        author_name: book.author_name,
        cover_i: book.cover_i,
        first_publish_year: book.first_publish_year,
        publisher: book.publisher,
        // Simulate creation dates for sorting
        createdAt: new Date(
          Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
        ).toISOString(),
      }));

      if (booksWithDate.length > 0) {
        setBooks(booksWithDate);
        setFilteredBooks(sortBooks(booksWithDate, sortOrder));
        setUseExampleData(false);
      } else {
        // If no results, keep using example data
        setUseExampleData(true);
      }
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching books:", error);
      // Fallback to example data on error
      setUseExampleData(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Sorting logic
  const sortBooks = (items, order) => {
    return [...items].sort((a, b) =>
      order === "asc"
        ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  };

  // Handle sorting
  const handleSortChange = (order) => {
    setSortOrder(order);
    setFilteredBooks(sortBooks(filteredBooks, order));
    setCurrentPage(1);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(searchTerm);
  };

  // Toggle between API and example data
  const toggleExampleData = () => {
    if (useExampleData) {
      fetchBooks(searchTerm);
    } else {
      setUseExampleData(true);
      setBooks(exampleBooks);
      setFilteredBooks(sortBooks(exampleBooks, sortOrder));
      setCurrentPage(1);
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * BOOKS_PER_PAGE,
    currentPage * BOOKS_PER_PAGE
  );

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <section className="bg-gray-100 py-16 text-center rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Discover Amazing Books</h1>
          <p className="text-gray-600 mb-6">
            Explore our collection of books from various genres and authors.
          </p>
          <a
            href="#books"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Browse Books
          </a>
        </section>

        {/* Search Section */}
        <div className="mt-10 mb-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for books..."
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
            Books {useExampleData && "(Example Data)"}
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

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Books Grid */}
        <div
          id="books"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {paginatedBooks.map((book) => (
            <Link
              key={book.key}
              href={`/books/${book.key.replace("/works/", "")}`}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {book.cover_i ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt={book.title}
                    className="h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400">No Cover Available</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 truncate">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {book.author_name ? book.author_name[0] : "Unknown Author"}
                </p>
                {book.first_publish_year && (
                  <p className="text-gray-500 text-xs mb-2">
                    Published: {book.first_publish_year}
                  </p>
                )}
                <p className="text-gray-500 text-xs">
                  Added: {format(new Date(book.createdAt), "MMM dd, yyyy")}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredBooks.length === 0 && !isLoading && (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No books found. Try a different search term.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredBooks.length > 0 && (
          <div className="flex justify-center mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-4 py-2 border rounded-md mx-1 disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-4 py-2">
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 border rounded-md mx-1 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
