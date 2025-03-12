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
  const coursesPerPage = 9;

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCourses(exampleCourses);
      setFilteredCourses(exampleCourses);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    // Filter courses based on selected filters and search query
    let result = [...courses];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((course) => course.category === selectedCategory);
    }

    // Filter by level
    if (selectedLevel !== "All") {
      result = result.filter((course) => course.level === selectedLevel);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query)
      );
    }

    // Sort courses
    result = sortCourses(result, sortBy);

    setFilteredCourses(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, selectedLevel, searchQuery, courses, sortBy]);

  useEffect(() => {
    // Paginate the filtered courses
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    setDisplayedCourses(
      filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)
    );
  }, [filteredCourses, currentPage]);

  // Sort courses based on selected option
  const sortCourses = (coursesToSort, sortOption) => {
    switch (sortOption) {
      case "price-low":
        return [...coursesToSort].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...coursesToSort].sort((a, b) => b.price - a.price);
      case "rating":
        return [...coursesToSort].sort((a, b) => b.rating - a.rating);
      case "newest":
        return [...coursesToSort].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "popularity":
      default:
        return [...coursesToSort].sort((a, b) => b.students - a.students);
    }
  };

  // Get unique categories
  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

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

        <CourseFilters
          categories={categories}
          levels={levels}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

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
