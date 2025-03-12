export default function CourseOverview({ course }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
        {course.objectives?.map((objective, index) => (
          <li key={index} className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{objective}</span>
          </li>
        ))}
      </ul>
      
      <h2 className="text-xl font-bold mb-4">Requirements</h2>
      <ul className="list-disc pl-5 mb-8 space-y-2">
        {course.requirements?.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
      
      <h2 className="text-xl font-bold mb-4">Description</h2>
      <div className="prose max-w-none">
        <p className="mb-4">{course.description}</p>
      </div>
    </div>
  );
}