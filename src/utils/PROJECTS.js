export const PROJECTS = [
  {
    id: "project-1",
    date: "May 2025",
    imageLink: ["nb1", "nb2", "nb3"],
    name: "Disease Classification Web App",
    description:
      "Built a Naive Bayes model to predict a user's disease from given symptoms. Preprocessed data using one-hot encoding to align with Naive Bayes requirements. Designed the frontend to extract symptom categories, matching them to likely disease outcomes. Deployed on Heroku with Flask backend, model embedded directly in the project.",
    techStack: ["Next.js (React)", "Flask (REST API & Model)", "Heroku"],
    projectDemoLink: "https://my-diagnose-frontend.vercel.app/",
    sourceCode: "https://github.com/Nakkasenp65/my-diagnose-backend.git",
  },
  {
    id: "project-2",
    date: "August 2024",
    imageLink: ["burger1", "burger2", "burger3"],
    name: "Restaurant Info App via LINE OA",
    description:
      "Developed a LINE-integrated web app for a restaurant, allowing users to view the menu and location. Integrated LINE Frontend Framework (LIFF) with a custom frontend using Next.js. The team handled rich menu configuration. Deployed on Netlify. Check out the line official account through the QRCode or try the demo link.",
    techStack: ["Next.js (React)", "LIFF", "Netlify"],
    projectDemoLink: "https://effortless-donut-fe1b72.netlify.app/",
    sourceCode: "https://github.com/Nakkasenp65/next-liff-burger-shop.git",
  },
  {
    id: "project-3",
    date: "May 2024",
    imageLink: [],
    name: "Blog CRUD Web App",
    description:
      "Created a simple web blog as a class project to demonstrate CRUD operations. Implemented with Next.js and MongoDB, focusing on backend interaction and UI state handling. Not deployed publicly.",
    techStack: ["Next.js (React)", "MongoDB"],
    projectDemoLink: "",
    sourceCode: "https://github.com/Nakkasenp65/nextjs-web-blog",
  },
  {
    id: "project-4",
    date: "April 2024",
    imageLink: [],
    name: "Face Recognition Attendance System",
    description:
      "Built a face recognition system in Python to manage class attendance. Integrated with Firebase Firestore to handle real-time data syncing. Project was experimental and not actively deployed.",
    techStack: ["Python", "OpenCV", "Firebase Firestore"],
    projectDemoLink: "",
    sourceCode:
      "https://github.com/Nakkasenp65/face-recognition-attendance.git",
  },
  {
    id: "project-5",
    date: "July 2024",
    imageLink: ["reactCalculator"],
    name: "React Investment Calculator (Udemy Course)",
    description:
      "This is a react project from Udemy course. Implement react createContext instead of state lifting in the Udemy section.",
    techStack: ["React"],
    projectDemoLink: "",
    sourceCode: "https://github.com/Nakkasenp65/react-investment-calculator",
  },
];
