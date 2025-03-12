// Example design services data
const exampleServices = [
  {
    id: "service-001",
    title: "Logo Design",
    description: "Professional logo design to establish your brand identity",
    image: "/images/logo-design.jpg",
    price: 299.99,
    category: "Branding",
    deliveryTime: "3-5 days",
    revisions: 3,
    designer: "Sarah Johnson",
    rating: 4.8,
    reviews: 124,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    longDescription: "Our professional logo design service creates a unique visual identity that represents your brand's values and resonates with your target audience. We follow a comprehensive design process that includes research, concept development, and refinement to deliver a logo that stands out in your industry.",
    features: [
      "Custom-made, original design",
      "Multiple concept options",
      "Vector files for scalability",
      "Full copyright ownership",
      "Source files included",
      "Social media kit"
    ],
    process: [
      "Initial consultation and brief",
      "Research and concept development",
      "Presentation of initial concepts",
      "Revisions and refinement",
      "Finalization and delivery of files"
    ],
    portfolio: [
      "/images/portfolio1.jpg",
      "/images/portfolio2.jpg",
      "/images/portfolio3.jpg"
    ],
    designerBio: "Sarah Johnson is a senior graphic designer with over 8 years of experience in branding and identity design. She has worked with clients ranging from startups to Fortune 500 companies, helping them establish strong visual identities that drive brand recognition.",
    designerImage: "/images/designer1.jpg"
  },
  {
    id: "service-002",
    title: "Website UI/UX Design",
    description: "Custom website design focused on user experience and conversion",
    image: "/images/web-design.jpg",
    price: 899.99,
    category: "Web Design",
    deliveryTime: "7-10 days",
    revisions: 5,
    designer: "Michael Chen",
    rating: 4.9,
    reviews: 87,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    longDescription: "Our UI/UX design service creates intuitive, engaging, and conversion-focused websites that deliver exceptional user experiences. We combine aesthetic appeal with functional design to ensure your website not only looks great but also performs effectively to meet your business goals.",
    features: [
      "Custom responsive design",
      "User journey mapping",
      "Wireframing and prototyping",
      "Interactive elements",
      "Mobile-first approach",
      "Conversion optimization"
    ],
    process: [
      "Discovery and user research",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design and UI elements",
      "Feedback and iterations",
      "Handoff to development"
    ],
    portfolio: [
      "/images/portfolio4.jpg",
      "/images/portfolio5.jpg",
      "/images/portfolio6.jpg"
    ],
    designerBio: "Michael Chen is a UX/UI designer with a background in both design and front-end development. With over 10 years of experience, he specializes in creating user-centered digital experiences that balance business goals with user needs.",
    designerImage: "/images/designer2.jpg"
  },
  {
    id: "service-003",
    title: "Social Media Graphics",
    description: "Eye-catching graphics for your social media campaigns",
    image: "/images/social-media.jpg",
    price: 199.99,
    category: "Social Media",
    deliveryTime: "2-3 days",
    revisions: 2,
    designer: "Emma Rodriguez",
    rating: 4.7,
    reviews: 56,
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    longDescription: "Our social media graphics service provides eye-catching, on-brand visuals that help you stand out in crowded social feeds. We create engaging content that drives interaction, increases brand awareness, and helps you connect with your audience across all social platforms.",
    features: [
      "Platform-specific designs",
      "Consistent brand styling",
      "Engagement-optimized graphics",
      "Animated options available",
      "Caption suggestions",
      "Monthly packages available"
    ],
    process: [
      "Brand and audience analysis",
      "Content strategy planning",
      "Design creation",
      "Review and refinement",
      "Final delivery with usage guidelines"
    ],
    portfolio: [
      "/images/portfolio7.jpg",
      "/images/portfolio8.jpg",
      "/images/portfolio9.jpg"
    ],
    designerBio: "Emma Rodriguez is a creative designer specializing in social media and digital marketing visuals. With 6 years of experience working with brands across various industries, she knows how to create graphics that capture attention and drive engagement in the fast-paced world of social media.",
    designerImage: "/images/designer3.jpg"
  },
  {
    id: "service-004",
    title: "Brand Identity Package",
    description: "Complete brand identity design including logo, colors, and guidelines",
    image: "/images/brand-identity.jpg",
    price: 1499.99,
    category: "Branding",
    deliveryTime: "10-14 days",
    revisions: 5,
    designer: "Sarah Johnson",
    rating: 4.9,
    reviews: 42,
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    longDescription: "Our comprehensive brand identity package provides everything you need to establish a strong, cohesive brand presence. From logo design to color palettes, typography, and usage guidelines, we create a complete visual system that communicates your brand's values and personality consistently across all touchpoints.",
    features: [
      "Logo design (primary and variations)",
      "Color palette selection",
      "Typography system",
      "Brand patterns and elements",
      "Comprehensive brand guidelines",
      "Business card and stationery design"
    ],
    process: [
      "Discovery and brand strategy",
      "Research and mood boarding",
      "Concept development",
      "Design system creation",
      "Applications and mockups",
      "Guidelines compilation and delivery"
    ],
    portfolio: [
      "/images/portfolio10.jpg",
      "/images/portfolio11.jpg",
      "/images/portfolio12.jpg"
    ],
    designerBio: "Sarah Johnson is a senior graphic designer with over 8 years of experience in branding and identity design. She has worked with clients ranging from startups to Fortune 500 companies, helping them establish strong visual identities that drive brand recognition.",
    designerImage: "/images/designer1.jpg"
  }
];

export { exampleServices };