export default function CourseCurriculum({ course }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Course Content</h2>
      <div className="text-sm text-gray-600 mb-6">
        <span>{course.curriculum?.reduce((acc, section) => acc + section.lessons.length, 0) || 0} lessons</span>
        <span className="mx-2">•</span>
        <span>{course.duration} total</span>
      </div>
      
      <div className="space-y-4">
        {course.curriculum?.map((section, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <h3 className="font-medium">{section.section}</h3>
              <span className="text-sm text-gray-600">{section.lessons.length} lessons</span>
            </div>
            <div className="divide-y">
              {section.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="px-4 py-3 flex justify-between items-center">
                  <div className="flex items-center">
                    {lesson.preview ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                    <span className={lesson.preview ? 'text-purple-600' : ''}>
                      {lesson.title}
                      {lesson.preview && <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Preview</span>}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{lesson.duration}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}