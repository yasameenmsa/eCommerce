import Link from "next/link";

export default function RelatedCourses({ courses }) {
  if (!courses || courses.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Related Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((relatedCourse) => (
          <Link
            key={relatedCourse.id}
            href={`/courses/${relatedCourse.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={relatedCourse.image}
                alt={relatedCourse.title}
                className="w-full h-40 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/240x135?text=Course+Image";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-medium">
                  {relatedCourse.title}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">
                  {relatedCourse.instructor}
                </span>
                <span className="flex items-center text-sm">
                  <span className="text-yellow-500 mr-1">★</span>
                  {relatedCourse.rating.toFixed(1)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-purple-600">
                  ${relatedCourse.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-600">
                  {relatedCourse.duration}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
