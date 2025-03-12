import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <Link 
      href={`/courses/${course.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/240x135?text=Course+Image";
          }}
        />
        <div className="absolute top-2 right-2">
          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
            {course.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {course.instructor}
        </p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span>{course.rating.toFixed(1)}</span>
          <span className="text-gray-600 text-xs ml-1">
            ({course.students.toLocaleString()})
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-purple-600">${course.price.toFixed(2)}</span>
          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>
      </div>
    </Link>
  );
}