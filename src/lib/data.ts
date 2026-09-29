export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export const courseTabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

export interface Course {
  title: string;
  author: string;
  img: string;
  rating: number;
  price: number;
  level: string;
}

export const courses: Course[] = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    img: "/images/course-1.png",
    rating: 4.5,
    price: 25,
    level: "Beginner",
  },
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    img: "/images/course-2.png",
    rating: 4.5,
    price: 25,
    level: "Beginner",
  },
  {
    title: "the Power of Big Data",
    author: "purepearl studio",
    img: "/images/course-3.png",
    rating: 4.5,
    price: 25,
    level: "Beginner",
  },
  {
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    img: "/images/course-4.png",
    rating: 4.5,
    price: 25,
    level: "Beginner",
  },
  {
    title: "Mastering Money Management",
    author: "purepearl studio",
    img: "/images/course-5.png",
    rating: 4.5,
    price: 25,
    level: "Beginner",
  },
  {
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    img: "/images/course-6.png",
    rating: 4.5,
    price: 25,
    level: "Beginner",
  },
];

export const categories = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
];

export const partnerLogos = [
  "/images/Logoipsum-1.png",
  "/images/Logoipsum-2.png",
  "/images/Logoipsum-3.png",
  "/images/Logoipsum-4.png",
  "/images/Logoipsum-5.png",
];

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    img: "/images/avatar-8.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    img: "/images/avatar-9.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    img: "/images/avatar-10.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerColumns = [
  {
    title: "Browse",
    links: [
      "Featured Courses",
      "Featured Categories",
      "Business",
      "IT",
      "Design",
    ],
  },
  {
    title: "",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    title: "Platform",
    links: [
      "Become a Creator",
      "Affiliate Program",
      "Contact",
      "Help",
      "About",
    ],
  },
];
