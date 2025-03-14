"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { exampleCourses } from "../data/courses";
import CourseFilters from "../components/courses/CourseFilters";
import CourseGrid from "../components/courses/CourseGrid";
import CoursePagination from "../components/courses/CoursePagination";
import CourseSorting from "../components/courses/CourseSorting";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [useExampleData, setUseExampleData] = useState(true);
  const coursesPerPage = 9;

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses(exampleCourses);
      setFilteredCourses(exampleCourses);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;

    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
    setCurrentPage(1);
  };

  const toggleExampleData = () => {
    setUseExampleData(!useExampleData);
    if (!useExampleData) {
      setCourses(exampleCourses);
      setFilteredCourses(exampleCourses);
    } else {
      // Here you would typically fetch real data
      // For now, we'll just use the example data
      setCourses(exampleCourses);
      setFilteredCourses(exampleCourses);
    }
    setCurrentPage(1);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    const sorted = [...filteredCourses].sort((a, b) => {
      if (order === "desc") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
    setFilteredCourses(sorted);
    setCurrentPage(1);
  };

  useEffect(() => {
    // Paginate the filtered courses
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    setDisplayedCourses(
      filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)
    );
  }, [filteredCourses, currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Online Courses</h1>
          <p className="text-gray-600">
            Expand your skills with our expert-led courses
          </p>
        </div>

        {/* Search Section */}
        <div className="mt-10 mb-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for courses..."
              className="border p-2 rounded-md flex-grow"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </form>
        </div>

        {/* Filter Section */}
        <div className="mt-4 mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            Courses {useExampleData && "(Example Data)"}
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleExampleData}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              {useExampleData ? "Load Real Data" : "Show Examples"}
            </button>
            <select
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
              className="border p-2 rounded-md"
            >
              <option value="desc">Newest First</option>
              <option value="asc">Oldest First</option>
            </select>
          </div>
        </div>

        {/* <CourseFilters
          categories={[
            "All",
            ...new Set(courses.map((course) => course.category)),
          ]}
          levels={["All", "Beginner", "Intermediate", "Advanced"]}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        /> */}

        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"} found
          </p>
          <CourseSorting sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <CourseGrid courses={displayedCourses} isLoading={isLoading} />

        {!isLoading && totalPages > 1 && (
          <div className="mt-8">
            <CoursePagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </>
  );
}
