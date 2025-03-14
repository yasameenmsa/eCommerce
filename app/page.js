import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { exampleCourses } from "./data/courses";
import { exampleServices } from "./data/services";

export default function Home() {
  // Get featured courses and services
  const featuredCourses = exampleCourses.slice(0, 3);
  const featuredServices = exampleServices.slice(0, 3);

  return (
    <main className="min-h-screen">
      <Header />
    </main>
  );
}
