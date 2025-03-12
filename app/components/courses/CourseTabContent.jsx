import CourseTabs from "./CourseTabs";
import CourseCurriculum from "./CourseCurriculum";
import CourseOverview from "./CourseOverview";
import CourseInstructor from "./CourseInstructor";

export default function CourseTabContent({ course, activeTab, setActiveTab }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="p-6">
        {activeTab === 'curriculum' && <CourseCurriculum course={course} />}
        {activeTab === 'overview' && <CourseOverview course={course} />}
        {activeTab === 'instructor' && <CourseInstructor course={course} />}
      </div>
    </div>
  );
}