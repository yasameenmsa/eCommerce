import { format } from "date-fns";

export default function CourseHeader({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:w-2/3 p-8">
          <div className="mb-2">
            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
              {course.category}
            </span>
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded ml-2">
              {course.level}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          
          <p className="text-gray-700 mb-4">{course.description}</p>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <span className="text-yellow-500 mr-1">★</span>
              <span>{course.rating.toFixed(1)}</span>
            </div>
            <span className="text-gray-600 text-sm">
              ({course.students.toLocaleString()} students)
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">
            Created by <span className="font-medium">{course.instructor}</span>
          </p>
          
          <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6">
            <div className="flex items-center mr-4 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {course.duration} total
            </div>
            <div className="flex items-center mr-4 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              {course.curriculum?.reduce((acc, section) => acc + section.lessons.length, 0) || 0} lessons
            </div>
            <div className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated {format(new Date(course.createdAt), "MMMM yyyy")}
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3 bg-gray-50 p-8">
          <div className="mb-6">
            <img
              src={course.image}
              alt={course.title}
              className="w-full rounded-lg shadow-md"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/240x135?text=Course+Image";
              }}
            />
          </div>
          
          <div className="text-center mb-6">
            <span className="text-3xl font-bold text-purple-600">${course.price.toFixed(2)}</span>
          </div>
          
          <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition mb-4">
            Enroll Now
          </button>
          
          <button className="w-full border border-purple-600 text-purple-600 py-3 px-4 rounded-md hover:bg-purple-50 transition">
            Add to Wishlist
          </button>
          
          <div className="mt-6 text-sm text-gray-600">
            <p className="mb-2">This course includes:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Full lifetime access</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Access on mobile and TV</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Certificate of completion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}