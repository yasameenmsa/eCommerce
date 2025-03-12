"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { useParams } from "next/navigation";

// Import Book interface
import { Book } from "../../../types/Book";

// Example books for fallback
const exampleBooks: Record<string, Book> = {
  "OL82563W": {
    key: "/works/OL82563W",
    title: "Harry Potter and the Philosopher's Stone",
    author_name: ["J.K. Rowling"],
    cover_i: 10521270,
    first_publish_year: 1997,
    publisher: ["Bloomsbury"],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  "OL27448W": {
    key: "/works/OL27448W",
    title: "The Lord of the Rings",
    author_name: ["J.R.R. Tolkien"],
    cover_i: 8743856,
    first_publish_year: 1954,
    publisher: ["Allen & Unwin"],
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
};

export default function BookDetails() {
  const params = useParams();
  const bookId = params.id as string;
  
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedBooks, setRelatedBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Check if we have this book in our example data first
        if (exampleBooks[bookId]) {
          setBook(exampleBooks[bookId]);
          setIsLoading(false);
          
          // Fetch related books (simulated)
          fetchRelatedBooks(exampleBooks[bookId].title);
          return;
        }
        
        // Otherwise fetch from API
        const response = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        
        const data = await response.json();
        
        // Get author information
        let authorNames: string[] = [];
        if (data.authors) {
          const authorKeys = data.authors.map((author: any) => 
            author.author?.key || author.key
          ).filter(Boolean);
          
          if (authorKeys.length > 0) {
            authorNames = await fetchAuthors(authorKeys);
          }
        }
        
        // Transform API data to our Book interface
        const bookData: Book = {
          key: data.key,
          title: data.title,
          author_name: authorNames.length > 0 ? authorNames : undefined,
          cover_i: data.covers ? data.covers[0] : undefined,
          first_publish_year: data.first_publish_date ? 
            new Date(data.first_publish_date).getFullYear() : undefined,
          publisher: data.publishers,
          createdAt: new Date().toISOString(),
        };
        
        setBook(bookData);
        
        // Fetch related books
        fetchRelatedBooks(data.title);
      } catch (err) {
        console.error('Error fetching book details:', err);
        setError('Failed to load book details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBookDetails();
  }, [bookId]);
  
  const fetchAuthors = async (authorKeys: string[]): Promise<string[]> => {
    try {
      const authorNames: string[] = [];
      
      for (const key of authorKeys) {
        const cleanKey = key.replace('/authors/', '');
        const response = await fetch(`https://openlibrary.org/authors/${cleanKey}.json`);
        
        if (response.ok) {
          const authorData = await response.json();
          if (authorData.name) {
            authorNames.push(authorData.name);
          }
        }
      }
      
      return authorNames;
    } catch (error) {
      console.error('Error fetching authors:', error);
      return [];
    }
  };
  
  const fetchRelatedBooks = async (title: string) => {
    try {
      // Extract main keywords from title for search
      const searchTerms = title.split(' ')
        .filter(word => word.length > 3)
        .slice(0, 2)
        .join(' ');
      
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchTerms)}&limit=4`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch related books');
      }
      
      const data = await response.json();
      
      // Transform the data and filter out the current book
      const relatedBooksData = data.docs
        .filter((relatedBook: any) => relatedBook.key !== `/works/${bookId}`)
        .slice(0, 3)
        .map((book: any) => ({
          key: book.key,
          title: book.title,
          author_name: book.author_name,
          cover_i: book.cover_i,
          first_publish_year: book.first_publish_year,
          publisher: book.publisher,
          createdAt: new Date().toISOString(),
        }));
      
      setRelatedBooks(relatedBooksData);
    } catch (error) {
      console.error('Error fetching related books:', error);
      // Fallback to example related books
      setRelatedBooks(Object.values(exampleBooks).filter(b => b.key !== `/works/${bookId}`));
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-6 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center min-h-[50vh] flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
        <p className="mb-6">{error || 'Book not found'}</p>
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Books
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-4 flex justify-center">
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
                className="max-h-96 object-contain"
              />
            ) : (
              <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">No Cover Available</span>
              </div>
            )}
          </div>
          
          <div className="md:w-2/3 p-6">
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            
            {book.author_name && (
              <p className="text-xl text-gray-600 mb-4">
                by {book.author_name.join(', ')}
              </p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {book.first_publish_year && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">First Published</h3>
                  <p>{book.first_publish_year}</p>
                </div>
              )}
              
              {book.publisher && book.publisher.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">Publisher</h3>
                  <p>{book.publisher[0]}</p>
                </div>
              )}
              
              <div>
                <h3 className="text-sm font-semibold text-gray-500">Added to Library</h3>
                <p>{format(new Date(book.createdAt), "MMMM dd, yyyy")}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition inline-block mr-4"
              >
                View on Open Library
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Books Section */}
      {relatedBooks.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedBooks.map((relatedBook) => (
              <Link
                key={relatedBook.key}
                href={`/books/${relatedBook.key.replace('/works/', '')}`}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {relatedBook.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${relatedBook.cover_i}-M.jpg`}
                      alt={relatedBook.title}
                      className="h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400">No Cover Available</div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 truncate">{relatedBook.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {relatedBook.author_name ? relatedBook.author_name[0] : "Unknown Author"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}