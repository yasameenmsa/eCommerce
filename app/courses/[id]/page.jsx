"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import { coursesById, exampleCourses } from "../../data/courses";

// Import components
import CourseHeader from "../../components/courses/CourseHeader";
import CourseTabContent from "../../components/courses/CourseTabContent";
import RelatedCourses from "../../components/courses/RelatedCourses";
import LoadingState from "../../components/courses/LoadingState";
import ErrorState from "../../components/courses/ErrorState";

export default function CourseDetails() {
  const params = useParams();
  const courseId = params.id;

  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [activeTab, setActiveTab] = useState("curriculum");

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // For this example, we'll use our example data
        // In a real app, you would fetch from an API
        if (coursesById[courseId]) {
          setCourse(coursesById[courseId]);

          // Get related courses from the same category
          const related = exampleCourses
            .filter(
              (c) =>
                c.id !== courseId &&
                c.category === coursesById[courseId].category
            )
            .slice(0, 3);

          setRelatedCourses(related);
        } else {
          throw new Error("Course not found");
        }
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError("Failed to load course details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (isLoading) {
    return (
      <>
        <Header />
        <LoadingState />
      </>
    );
  }

  if (error || !course) {
    return (
      <>
        <Header />
        <ErrorState error={error} />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <Link
          href="/courses"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Courses
        </Link>

        <CourseHeader course={course} />
        <CourseTabContent
          course={course}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <RelatedCourses courses={relatedCourses} />
      </div>
    </>
  );
}
