import Link from "next/link";

export default function ErrorState({ error }) {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center min-h-[50vh] flex flex-col justify-center">
      <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
      <p className="mb-6">{error || 'Course not found'}</p>
      <Link 
        href="/courses" 
        className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition inline-block"
      >
        Back to Courses
      </Link>
    </div>
  );
}