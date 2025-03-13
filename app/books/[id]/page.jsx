"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { useParams } from "next/navigation";

// Example books for fallback
const exampleBooks = {
  OL82563W: {
    key: "/works/OL82563W",
    title: "Harry Potter and the Philosopher's Stone",
    author_name: ["J.K. Rowling"],
    cover_i: 10521270,
    first_publish_year: 1997,
    publisher: ["Bloomsbury"],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  OL27448W: {
    key: "/works/OL27448W",
    title: "The Lord of the Rings",
    author_name: ["J.R.R. Tolkien"],
    cover_i: 8743856,
    first_publish_year: 1954,
    publisher: ["Allen & Unwin"],
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
};

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setIsLoading(true);
        setError("");

        // Check if book exists in example data first
        if (exampleBooks[id]) {
          setBook(exampleBooks[id]);
          setIsLoading(false);
          return;
        }

        // If not in example data, fetch from API
        const response = await fetch(
          `https://openlibrary.org/works/${id}.json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }

        const data = await response.json();

        // Format the book data
        const bookData = {
          key: data.key,
          title: data.title,
          author_name: [], // Initialize empty array
          cover_i: data.covers ? data.covers[0] : null,
          first_publish_year:
            data.first_publish_year || data.first_publish_date,
          publisher: data.publishers || [],
          createdAt: new Date().toISOString(),
        };

        // Fetch author names if authors exist
        if (data.authors) {
          const authorNames = await fetchAuthors(
            data.authors.map((author) => author.author.key)
          );
          bookData.author_name = authorNames;
        }

        setBook(bookData);
      } catch (err) {
        console.error("Error fetching book details:", err);
        setError("Failed to load book details. Please try again later.");

        // Fallback to example data if available
        if (exampleBooks[id]) {
          setBook(exampleBooks[id]);
          setError("");
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBookDetails();
    }
  }, [id]);

  const fetchAuthors = async (authorKeys) => {
    try {
      const authorNames = [];

      for (const key of authorKeys) {
        const cleanKey = key.replace("/authors/", "");
        const response = await fetch(
          `https://openlibrary.org/authors/${cleanKey}.json`
        );

        if (response.ok) {
          const authorData = await response.json();
          if (authorData.name) {
            authorNames.push(authorData.name);
          }
        }
      }

      return authorNames;
    } catch (error) {
      console.error("Error fetching authors:", error);
      return [];
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center min-h-[50vh] flex flex-col justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center min-h-[50vh] flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
        <p className="mb-6">{error || "Book not found"}</p>
        <Link
          href="/books"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition inline-block"
        >
          Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link
        href="/books"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Books
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          {book.author_name &&
            book.author_name.map((author, index) => (
              <span key={index} className="text-blue-600">
                {author}
              </span>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
                className="w-full rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No cover available</span>
              </div>
            )}
          </div>

          <div>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Publication Details
                </h2>
                <p>First published: {book.first_publish_year || "Unknown"}</p>
                <p>
                  Publishers:{" "}
                  {book.publisher && book.publisher.length > 0
                    ? book.publisher.join(", ")
                    : "Unknown"}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  About this Edition
                </h2>
                <p>
                  Added to catalog:{" "}
                  {format(new Date(book.createdAt), "MMMM d, yyyy")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
