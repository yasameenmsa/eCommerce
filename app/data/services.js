// Example design services data
export const exampleServices = [
  {
    id: "service-001",
    title: "Logo Design",
    description: "Professional logo design to establish your brand identity",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    price: 299.99,
    category: "Branding",
    deliveryTime: "3-5 days",
    revisions: 3,
    designer: {
      name: "Sarah Johnson",
      experience: "8+ years",
      specialization: "Brand Identity Design",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      bio: "Award-winning designer with expertise in creating memorable brand identities for startups and enterprises alike.",
      portfolio: [
        "https://images.unsplash.com/photo-1626785774573-4b799315345d",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d",
      ],
    },
    rating: 4.8,
    reviews: 124,
    features: [
      "Custom Vector Design",
      "Multiple File Formats (AI, EPS, PDF, PNG, JPG)",
      "Brand Color Palette",
      "Typography Selection",
      "Unlimited Revisions",
      "Copyright Transfer",
      "Brand Guidelines Document",
    ],
    process: [
      "Initial Consultation & Brief",
      "Research & Concept Development",
      "Initial Design Concepts (3-4 options)",
      "Revisions & Refinement",
      "Final Design & Delivery",
    ],
    faq: [
      {
        question: "What files will I receive?",
        answer:
          "You'll receive AI, EPS, PDF, PNG, and JPG files of your final logo design.",
      },
      {
        question: "How many revisions do I get?",
        answer:
          "The package includes 3 rounds of revisions after initial concepts.",
      },
      {
        question: "Do I own the copyright?",
        answer:
          "Yes, full copyright ownership is transferred to you upon final payment.",
      },
    ],
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "service-002",
    title: "Website UI Design",
    description: "Custom website interface design with modern aesthetics",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 599.99,
    category: "Web Design",
    deliveryTime: "7-10 days",
    revisions: 5,
    designer: {
      name: "Michael Chen",
      experience: "10+ years",
      specialization: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Passionate UI/UX designer focused on creating intuitive and beautiful web experiences.",
      portfolio: [
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      ],
    },
    rating: 4.9,
    reviews: 89,
    features: [
      "Responsive Design for All Devices",
      "Interactive Prototypes",
      "Custom UI Elements",
      "Design System",
      "User Flow Diagrams",
      "Figma/Sketch Source Files",
      "Design Handoff Documentation",
    ],
    process: [
      "Discovery & Requirements",
      "Wireframing",
      "Visual Design",
      "Interactive Prototyping",
      "Design System Creation",
      "Handoff & Documentation",
    ],
    faq: [
      {
        question: "What design tools do you use?",
        answer: "We primarily work with Figma and Sketch.",
      },
      {
        question: "Can you also implement the design?",
        answer:
          "We focus on design only, but can recommend trusted development partners.",
      },
      {
        question: "Do you provide responsive designs?",
        answer:
          "Yes, all designs are created for mobile, tablet, and desktop views.",
      },
    ],
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "service-003",
    title: "Social Media Kit",
    description: "Complete social media branding package",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 199.99,
    category: "Social Media",
    deliveryTime: "2-4 days",
    revisions: 2,
    designer: {
      name: "Emma Wilson",
      experience: "6+ years",
      specialization: "Social Media Design",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      bio: "Social media design expert specializing in engaging and shareable content.",
      portfolio: [
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
        "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
      ],
    },
    rating: 4.7,
    reviews: 156,
    features: [
      "Profile Pictures & Banners",
      "Post Templates (10 designs)",
      "Story Templates (5 designs)",
      "Highlight Cover Icons",
      "Brand Style Guide",
      "Source Files",
      "Ready-to-use Templates",
    ],
    process: [
      "Brand Analysis",
      "Style Development",
      "Template Creation",
      "Asset Package",
      "Usage Guidelines",
    ],
    faq: [
      {
        question: "Which social platforms are covered?",
        answer:
          "We create designs for Instagram, Facebook, Twitter, and LinkedIn.",
      },
      {
        question: "Can I edit the templates myself?",
        answer:
          "Yes, we provide editable templates in Canva and Photoshop formats.",
      },
      {
        question: "How many different designs do I get?",
        answer: "The package includes 10 post templates and 5 story templates.",
      },
    ],
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "service-004",
    title: "App Interface Design",
    description: "Mobile app UI/UX design with user-centric approach",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 799.99,
    category: "Mobile Design",
    deliveryTime: "10-14 days",
    revisions: 4,
    designer: {
      name: "David Park",
      experience: "12+ years",
      specialization: "Mobile App Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Experienced mobile app designer with a focus on creating engaging and intuitive user experiences.",
      portfolio: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      ],
    },
    rating: 4.9,
    reviews: 78,
    features: [
      "Native iOS & Android Designs",
      "Custom UI Components",
      "Interaction Design",
      "User Flow Mapping",
      "Prototype & Animations",
      "Design System",
      "Developer Handoff",
    ],
    process: [
      "User Research",
      "Information Architecture",
      "Wireframing",
      "UI Design",
      "Prototyping",
      "Testing & Refinement",
    ],
    faq: [
      {
        question: "Do you design for both iOS and Android?",
        answer:
          "Yes, we create designs following platform-specific guidelines.",
      },
      {
        question: "What deliverables are included?",
        answer:
          "You'll receive Figma/Sketch files, prototype links, and complete design documentation.",
      },
      {
        question: "Do you offer app icon design?",
        answer: "Yes, app icon design is included in the package.",
      },
    ],
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "service-005",
    title: "Brand Identity Package",
    description:
      "Complete brand identity design including logo, colors, and guidelines",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    price: 899.99,
    category: "Branding",
    deliveryTime: "14-21 days",
    revisions: 6,
    designer: {
      name: "Sophie Martinez",
      experience: "15+ years",
      specialization: "Brand Strategy & Design",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      bio: "Strategic brand designer helping businesses build memorable and impactful brand identities.",
      portfolio: [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      ],
    },
    rating: 5.0,
    reviews: 92,
    features: [
      "Brand Strategy Workshop",
      "Logo Design (All Formats)",
      "Color Palette & Typography",
      "Brand Guidelines Manual",
      "Stationery Design",
      "Social Media Templates",
      "Brand Voice & Messaging",
    ],
    process: [
      "Brand Discovery",
      "Strategy Development",
      "Visual Identity Design",
      "Guidelines Creation",
      "Asset Development",
      "Implementation Support",
    ],
    faq: [
      {
        question: "What's included in the brand guidelines?",
        answer:
          "Logo usage, color codes, typography, imagery style, and application examples.",
      },
      {
        question: "Do you provide brand strategy?",
        answer:
          "Yes, we include a brand strategy workshop to define your positioning and values.",
      },
      {
        question: "What file formats do I receive?",
        answer:
          "All assets in vector and raster formats, plus editable source files.",
      },
    ],
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const servicesById = exampleServices.reduce((acc, service) => {
  acc[service.id] = service;
  return acc;
}, {});
