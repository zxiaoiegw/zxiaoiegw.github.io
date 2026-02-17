import {
    CSS3,
    Express,
    HTML5,
    Javascript,  
    protech,  
    LangChain,
    Sql,
    Nodejs,
    Figma,
    Python,
    Reactjs,
    Typescript,
    career,
    pillReminder,
    portfolio, 
    budgetTracker,
    health,
    // summarization,
  } from "./assets";
  
  export const tools = [
    {
      name: "Express",
      icon: Express,
    },
    {
      name: "React",
      icon: Reactjs,
    },
    {
      name: "NodeJs",
      icon: Nodejs,
    },
  ];
  
  export const skills = [
    {
      name: "ReactJs",
      value: 50,
      icon: Reactjs,
    },
    {
      name: "NodeJs",
      value: 50,
      icon: Nodejs,
    },
    {
      name: "SQL",
      value: 50,
      icon: Sql,
    },
    {
      name: "CSS3",
      value: 70,
      icon: CSS3,
    },
    {
      name: "HTML5",
      value: 76,
      icon: HTML5,
    },
    {
      name: "JavaScript",
      value: 60,
      icon: Javascript,
    },
    {
      name: "TypeScript",
      value: 55,
      icon: Typescript,
    },
    {
      name: "Python",
      value: 65,
      icon: Python,
    },
    {
      name: "LangChain",
      value: 50,
      icon: LangChain,
    },
    {
      name: "Figma",
      value: 80,
      icon: Figma,
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Pill Reminder Mobile App",
      cat: "Mobile APP",
      url: "https://pill-reminder-app-sage.vercel.app/",
      img: pillReminder,
      description: "Built with Next.js, and React with MongoDB for secure medication management and intake logging. Features AI-powered schedule optimization for recommendations. Google Cloud Vision API enables prescription scanning with automatic data extraction.",
      techStack: ["Next.js", "Tailwind CSS", "React", "MongoDB", "OpenAI", "Google Vision"],
    },
    {
      id: 2,
      title: "Health Agent",
      cat: "AI APP",
      url: "https://health-agent-hn6y.onrender.com",
      img: health,
      description: "AI-powered health analysis application allows users to upload blood test and medical report PDFs for instant AI-generated diagnosis. Personalized health insights with risk assessment and recommendations.",
      techStack: ["Python", "Streamlit", "Groq API", "Supabase", "Render"],
    }, 
    {
      id: 3,
      title: "Commercial Website",
      cat: "Full-Stack",
      url: "https://protech-wqk3.onrender.com/",
      img: protech,
      description: "Full-stack e-commerce application built with the MERN stack featuring user authentication, product management, shopping cart, PayPal payment integration, and an admin dashboard. Deployed to Render with MongoDB Atlas.",
      techStack: ["React", "Redux", "Bootstrap", "Express", "MongoDB", "JWT", "PayPal API", "Vite", "Render"],
    },   
    {
      id: 4,
      title: "Budget Tracker App",
      cat: "AI + Full-Stack",
      url: "https://capstone-budget-tracker.vercel.app/",
      img: budgetTracker,
      description: "Built with React, TypeScript, Node.js, and Express.js with PostgreSQL via Supabase for real-time budget tracking and AI-powered financial insights. OpenAI API for expense categorization and OCR for receipt scanning.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "React Context", "Node.js", "Express.js", "Supabase"],
    },
    {
      id: 5,
      title: "Portfolio Website",
      cat: "Web Design",
      url: "https://zxiaoiegw.github.io/",
      img: portfolio,
      description: "Responsive portfolio built with React, JavaScript, HTML, and CSS with Tailwind for mobile-first design and AOS for scroll animations. Developed with GitHub Copilot and deployed to GitHub Pages.",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "GitHub Copilot", "Vercel"],
    },
    {
      id: 6,
      title: "Career Digital Twin Agent",
      cat: "AI APP",
      url: "https://huggingface.co/spaces/kittyiegw2026/career_conversation",
      img: career,
      description: "AI conversational agent built with Python and OpenAI API, with REST API integration and Pushover for real-time notifications on user interactions. Deployed to Hugging Face Spaces with secure environment variable management.",
      techStack: ["Python", "OpenAI API", "LangChain", "Hugging Face Spaces"],
    },   
  ];
  
  export const softskills = [
    "Time management",
    "Communication",
    "Empathy",
    "Teamwork",
    "Helpfulness",
    "Creativity",
    "Self-learning",
    "Accountability",
    "Problem solving",
    "Open-mindedness",
  ];