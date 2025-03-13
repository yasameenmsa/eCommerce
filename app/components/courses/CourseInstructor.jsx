export default function CourseInstructor({ course }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Instructor</h2>

      <div className="flex items-start mb-6">
        <img
          src={course.instructorImage || "/images/default-instructor.png"}
          alt={course.instructor}
          className="w-16 h-16 rounded-full mr-4 object-cover"
          onError={(e) => {
            e.target.src = "/images/default-instructor.png";
          }}
        />
        <div>
          <h3 className="font-bold text-lg">{course.instructor}</h3>
          <p className="text-gray-600 text-sm mb-2">
            {course.category} Instructor
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <p>{course.instructorBio}</p>
      </div>
    </div>
  );
}
