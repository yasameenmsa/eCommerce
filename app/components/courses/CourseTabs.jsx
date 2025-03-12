export default function CourseTabs({ activeTab, setActiveTab }) {
  return (
    <div className="border-b">
      <nav className="flex">
        <button
          onClick={() => setActiveTab('curriculum')}
          className={`px-6 py-4 text-sm font-medium ${
            activeTab === 'curriculum'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          Curriculum
        </button>
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-6 py-4 text-sm font-medium ${
            activeTab === 'overview'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('instructor')}
          className={`px-6 py-4 text-sm font-medium ${
            activeTab === 'instructor'
              ? 'border-b-2 border-purple-600 text-purple-600'
              : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          Instructor
        </button>
      </nav>
    </div>
  );
}