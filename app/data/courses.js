// Example courses data
const exampleCourses = [
  {
    id: "course-001",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    description:
      "Learn to build websites with HTML, CSS, JavaScript, React, Node and more!",
    price: 89.99,
    duration: "63 hours",
    level: "Beginner",
    category: "Web Development",
    image: "https://img-c.udemycdn.com/course/750x422/1565838_e54e_16.jpg",
    rating: 4.7,
    students: 245000,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "course-002",
    title: "Machine Learning A-Z: Hands-On Python & R",
    instructor: "Kirill Eremenko",
    description:
      "Learn to create Machine Learning Algorithms in Python and R from scratch!",
    price: 94.99,
    duration: "44 hours",
    level: "Intermediate",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg",
    rating: 4.5,
    students: 692000,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "course-003",
    title: "The Complete JavaScript Course 2023",
    instructor: "Jonas Schmedtmann",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.",
    price: 84.99,
    duration: "69 hours",
    level: "Beginner",
    category: "Web Development",
    image: "https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg",
    rating: 4.8,
    students: 158000,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "course-004",
    title: "React - The Complete Guide 2023",
    instructor: "Maximilian Schwarzmüller",
    description:
      "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js and more!",
    price: 84.99,
    duration: "48 hours",
    level: "All Levels",
    category: "Web Development",
    image: "https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg",
    rating: 4.8,
    students: 325000,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "course-005",
    title: "The Complete 2023 Flutter Development Bootcamp",
    instructor: "Angela Yu",
    description:
      "Become a Flutter developer by building real-world apps for iOS and Android",
    price: 89.99,
    duration: "28 hours",
    level: "Beginner",
    category: "Mobile Development",
    image: "https://img-c.udemycdn.com/course/750x422/2259120_305f_6.jpg",
    rating: 4.6,
    students: 185000,
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "course-006",
    title: "Python for Data Science and Machine Learning",
    instructor: "Jose Portilla",
    description:
      "Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, and more!",
    price: 94.99,
    duration: "25 hours",
    level: "Intermediate",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/course/750x422/903744_8eb2.jpg",
    rating: 4.6,
    students: 420000,
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "course-007",
    title: "AWS Certified Solutions Architect",
    instructor: "Stephane Maarek",
    description:
      "Pass the AWS Certified Solutions Architect Associate Certification SAA-C03!",
    price: 109.99,
    duration: "27 hours",
    level: "Advanced",
    category: "Cloud Computing",
    image: "https://img-c.udemycdn.com/course/750x422/362328_91f3_10.jpg",
    rating: 4.7,
    students: 520000,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Create a map of courses by ID for easy lookup
const coursesById = exampleCourses.reduce((acc, course) => {
  acc[course.id] = {
    ...course,
    curriculum: getCurriculumForCourse(course.id),
    requirements: getRequirementsForCourse(course.id),
    objectives: getObjectivesForCourse(course.id),
    instructorBio: getInstructorBioForCourse(course.id),
    instructorImage: getInstructorImageForCourse(course.id),
  };
  return acc;
}, {});

// Helper functions to get additional course details
function getCurriculumForCourse(courseId) {
  const curriculumData = {
    "course-001": [
      {
        section: "Introduction to Web Development",
        lessons: [
          { title: "Course Overview", duration: "10 min", preview: true },
          { title: "How the Internet Works", duration: "15 min" },
          {
            title: "Setting Up Your Development Environment",
            duration: "20 min",
          },
        ],
      },
      {
        section: "HTML Fundamentals",
        lessons: [
          { title: "HTML Document Structure", duration: "25 min" },
          { title: "HTML Tags and Elements", duration: "30 min" },
          { title: "Forms and Input Elements", duration: "35 min" },
          { title: "HTML5 Semantic Elements", duration: "25 min" },
        ],
      },
      {
        section: "CSS Styling",
        lessons: [
          { title: "CSS Selectors", duration: "20 min" },
          { title: "Box Model and Layout", duration: "30 min" },
          { title: "Flexbox and Grid", duration: "45 min" },
          { title: "Responsive Design", duration: "40 min" },
        ],
      },
    ],
    "course-002": [
      {
        section: "Data Preprocessing",
        lessons: [
          { title: "Importing Libraries", duration: "10 min", preview: true },
          { title: "Importing Datasets", duration: "15 min" },
          { title: "Handling Missing Data", duration: "20 min" },
        ],
      },
      {
        section: "Regression",
        lessons: [
          { title: "Simple Linear Regression", duration: "30 min" },
          { title: "Multiple Linear Regression", duration: "35 min" },
          { title: "Polynomial Regression", duration: "25 min" },
        ],
      },
      {
        section: "Classification",
        lessons: [
          { title: "Logistic Regression", duration: "30 min" },
          { title: "K-Nearest Neighbors", duration: "25 min" },
          { title: "Support Vector Machine", duration: "40 min" },
        ],
      },
    ],
  };

  return curriculumData[courseId] || [];
}

function getRequirementsForCourse(courseId) {
  const requirementsData = {
    "course-001": [
      "No programming experience needed - I'll teach you everything you need to know",
      "A computer with access to the internet",
      "No paid software required - all websites will be created with free tools",
    ],
    "course-002": [
      "Just some high school mathematics level",
      "Basic Python or R knowledge",
      "A computer with internet connection",
    ],
  };

  return requirementsData[courseId] || [];
}

function getObjectivesForCourse(courseId) {
  const objectivesData = {
    "course-001": [
      "Build 16 web development projects for your portfolio",
      "Learn the latest technologies, including Javascript, React, Node and more",
      "Build fully-fledged websites and web apps for your startup or business",
      "Master frontend development with React",
    ],
    "course-002": [
      "Master Machine Learning on Python & R",
      "Have a great intuition of many Machine Learning models",
      "Make accurate predictions",
      "Make robust Machine Learning models",
    ],
  };

  return objectivesData[courseId] || [];
}

function getInstructorBioForCourse(courseId) {
  const instructorBioData = {
    "course-001":
      "Dr. Angela Yu is a developer and lead instructor at the London App Brewery. She has taught over 1 million students how to code and many have gone on to change their lives by becoming professional developers or starting their own tech startup.",
    "course-002":
      "Kirill Eremenko is a Data Scientist and Forex Systems Expert. He has a background in mathematics and statistics and has been teaching data science to over 1 million students worldwide.",
  };

  return instructorBioData[courseId] || "";
}

function getInstructorImageForCourse(courseId) {
  const instructorImageData = {
    "course-001": "https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg",
    "course-002": "https://img-c.udemycdn.com/user/200_H/32164746_69b6_2.jpg",
  };

  return instructorImageData[courseId] || "";
}

export { exampleCourses, coursesById };
