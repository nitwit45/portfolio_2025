import { Mail, User, Zap } from "lucide-react";
import {
  asanaIcon,
  athonLogo,
  client_1,
  client_2,
  client_3,
  client_4,
  discord,
  dribble,
  dribbleIcon,
  facebook,
  figmaIcon,
  framerIcon,
  graphicDesignIcon,
  instagramIcon,
  linkedInIcon,
  notionIcon,
  pinterest,
  pixelworksLogo,
  project_1,
  project_2,
  project_3,
  project_4,
  seoOptIcon,
  slackIcon,
  snapchat,
  spotify,
  vortexLogo,
  webDesignIcon,
  webDevIcon,
  webflowIcon,
  XLogo,
} from "@/app/assets/assets";
import { Github, Instagram } from 'lucide-react'

import { counterListsType, FAQ, FollowerData, myExperienceTypes, myServicesPlansTypes, myServicesTypes, myShowCasesTypes, myStackTypes, socialBrandsTypes, testimonialsTypes } from "@/types";
import { socialListsTypes } from '@/types'
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
    icon: <Zap />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'Instagram',
    icon: <Instagram size={22} />,
    link: 'https://www.instagram.com/'
  },
  {
    id: 2,
    title: 'Github',
    icon: <Github size={22} />,
    link: 'https://www.github.com/nitwit45'
  },
  {
    id: 3,
    title: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
      </svg>
    ),
    link: 'https://www.twitter.com/'
  }
]

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Discord",
    icon: discord,
    link: "https://discord.com/users/608566060962021386",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: dribble,
    link: "https://www.linkedin.com/in/nithila-ariyapperuma/",
  },
  {
    id: 3,
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/nithilanenuka3",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Happy Clients",
    value: 40,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 4,
  },
  {
    id: 3,
    title: "Completed Projects",
    value: 60,
  },
  {
    id: 4,
    title: "Awards Received",
    value: 3,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Freelance Software Engineer",
    company: "Self-Employed",
    label: "Freelance",
    description: "Developed multiple full-stack and backend solutions, delivering custom-built projects for niche client requirements while successfully completing research-based assignments.",
    link: "github.com/nitwit45",
    logo: vortexLogo
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "Software Engineering Intern",
    company: "IFS R & D International",
    label: "Tech Firm",
    description: "Contributed to 25-30 bug fixes, participated in new feature development, and assisted in testing processes to enhance product reliability.",
    link: "ifs.com",
    logo: pixelworksLogo
  },
  {
    id: 3,
    year: "2021 - 2021",
    title: "Intern",
    company: "Divor Automations",
    label: "IoT Startup",
    description: "Implemented a frontend for an IoT-based GrowPod Monitoring project and optimized project management using Jira, improving delivery timelines by 20%.",
    link: "divorautomations.com",
    logo: athonLogo
  }
];

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "Python",
    description: "Programming Language",
    logo: figmaIcon,
    link: "https://www.python.org",
  },
  {
    id: 2,
    title: "ReactJS",
    description: "Frontend JavaScript Library",
    logo: notionIcon,
    link: "https://react.dev",
  },
  {
    id: 3,
    title: "NodeJS",
    description: "Backend JavaScript Runtime",
    logo: webflowIcon,
    link: "https://nodejs.org",
  },
  {
    id: 4,
    title: "Django",
    description: "Framework for Python",
    logo: framerIcon,
    link: "https://www.djangoproject.com",
  },
  {
    id: 5,
    title: "MongoDB",
    description: "NoSQL Database System",
    logo: slackIcon,
    link: "https://www.mongodb.com",
  },
  {
    id: 6,
    title: "AWS",
    description: "Cloud Computing Services",
    logo: asanaIcon,
    link: "https://aws.amazon.com",
  }
]

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'AI & Machine Learning',
    description: 'Developing intelligent systems using deep learning, NLP, and computer vision.',
    icon: webDesignIcon,
    link: '/services'
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'Building robust and scalable applications using modern tech stacks.',
    icon: webDevIcon,
    link: '/services'
  },
  {
    id: 3,
    title: 'Data Science & Analytics',
    description: 'Extracting insights from data and building predictive models for decision-making.',
    icon: graphicDesignIcon,
    link: '/services'
  },
  {
    id: 4,
    title: 'Blockchain Development',
    description: 'Creating decentralized and secure applications using blockchain technology.',
    icon: seoOptIcon,
    link: '/services'
  }
]

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'Lesi Read',
    description: 'A web-based PDF tool enabling translation, summarization, and AI-powered Q&A from document content.',
    link: 'lesiread.com',
    type: 'AI-Powered PDF Tool',
    theme: 'Dark',
    pages: 5,
    image: project_1,
  },
  {
    id: 2,
    title: 'Euphoria',
    description: 'A music recommendation platform with real-time lyrics, live music visualizer, and authentication features.',
    link: 'euphoria.com',
    type: 'Music Streaming',
    theme: 'Light',
    pages: 4,
    image: project_2,
  },
  {
    id: 3,
    title: 'Smart Home',
    description: 'An IoT-based smart home management system with real-time device control and monitoring using ESP32 & MERN stack.',
    link: 'smarthome.com',
    type: 'IoT & Home Automation',
    theme: 'Dark',
    pages: 6,
    image: project_3,
  },
  {
    id: 4,
    title: 'Fusion Facet',
    description: 'A freelancing and IT solutions platform with project management, messaging, and secure payments for engineers.',
    link: 'fusionfacet.com',
    type: 'Freelancing Platform',
    theme: 'Dark',
    pages: 7,
    image: project_4,
  },
]

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    description: 'I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...',
    location: 'New York City, USA.',
    avatar: client_1,
  },
  {
    id: 2,
    name: 'John Anderson',
    description: 'Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.',
    location: 'Sydney, Australia.',
    avatar: client_2,
  },
  {
    id: 3,
    name: 'Mark Davis',
    description: 'Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.',
    location: 'London, UK.',
    avatar: client_3,
  },
  {
    id: 4,
    name: 'Laura Adams',
    description: 'Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.',
    location: 'Madrid, Spain.',
    avatar: client_4,
  }
]

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'AI & Machine Learning',
    price: '$30/hr',
    description: 'Developing AI models, including NLP, computer vision, and predictive analytics solutions.',
    completedWorks: '10+',
    experience: '1+',
    totalHoursWorked: '200+ hours',
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: 'Software Development',
    price: '$25/hr',
    description: 'Building scalable and efficient applications using Python, NodeJS, and Django.',
    completedWorks: '15+',
    experience: '2+',
    totalHoursWorked: '300+ hours',
    icon: webDevIcon,
  },
  {
    id: 3,
    service: 'Data Science & Analytics',
    price: '$28/hr',
    description: 'Extracting insights from structured and unstructured data using advanced analytics techniques.',
    completedWorks: '12+',
    experience: '2+',
    totalHoursWorked: '250+ hours',
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: 'Blockchain Development',
    price: '$35/hr',
    description: 'Creating decentralized applications and smart contracts with blockchain technology.',
    completedWorks: '8+',
    experience: '1+',
    totalHoursWorked: '180+ hours',
    icon: seoOptIcon,
  }
];

export const faqData: FAQ[] = [
  {
    question: "Are you open to remote job opportunities?",
    answer: "Yes! I am open to remote positions and have experience collaborating with teams across different time zones. I am comfortable using communication tools such as Slack, Zoom, and project management platforms to ensure smooth teamwork.",
  },
  {
    question: "What areas of AI and Data Science do you specialize in?",
    answer: "I specialize in machine learning, deep learning, natural language processing (NLP), and computer vision. I have experience working on projects involving AI-powered applications, predictive analytics, and automation.",
  },
  {
    question: "Do you have experience working with real-world datasets?",
    answer: "Yes, I have worked with real-world datasets in various projects, including image datasets for computer vision tasks, text data for NLP applications, and structured data for predictive modeling.",
  },
  {
    question: "Which programming languages and frameworks are you proficient in?",
    answer: "I am proficient in Python, JavaScript (ReactJS, NodeJS), and SQL. I have experience with frameworks such as TensorFlow, PyTorch, Django, and Flask for AI and backend development.",
  },
  {
    question: "Are you open to internships or entry-level roles?",
    answer: "Yes, I am actively looking for opportunities as an AI Engineer, Data Scientist, or Software Engineer, including full-time, part-time, and internship positions.",
  },
  {
    question: "Do you have experience with cloud technologies?",
    answer: "Yes, I have experience with AWS, including deploying models on cloud platforms, setting up APIs, and working with cloud storage solutions.",
  },
  {
    question: "Can you work in a team setting?",
    answer: "Absolutely! I have worked on multiple collaborative projects and enjoy working in a team environment. I am comfortable using Agile methodologies, Git for version control, and various collaboration tools.",
  },
  {
    question: "How do you stay updated with the latest advancements in AI?",
    answer: "I regularly follow AI research papers, contribute to open-source projects, and explore emerging trends by participating in online courses, forums, and conferences.",
  },
  {
    question: "What kind of projects have you worked on?",
    answer: "I have worked on projects such as AI-powered PDF summarization tools, smart home automation systems, music recommendation platforms, and blockchain-based voting systems.",
  },
  {
    question: "Where can I see your projects and portfolio?",
    answer: "You can check out my GitHub and LinkedIn profiles to see my latest projects, research, and contributions.",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "twitter",
    followers: "12.6K",
    url: "https://twitter.com/",
    icon: XLogo,
  },
  {
    platform: "Instagram",
    followers: "8.3K",
    url: "https://www.instagram.com/",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "2.5K",
    url: "https://www.linkedin.com/",
    icon: linkedInIcon,
  },
  {
    platform: "Dribbble",
    followers: "3.2K",
    url: "https://dribbble.com/",
    icon: dribbleIcon,
  },
];