import type { TResumeSchema } from "./resume.schema";

export const resumeData: TResumeSchema = {
  meta: {
    theme: "jsonresume-theme-stackoverflow",
  },
  basics: {
    name: "Keshav Kumar",
    label: "Software Engineer",
    email: "keshavkumarXXXX@gmail.com",
    phone: "+91 785798XXXX",
    url: "https://keshavop.vercel.app",
    profiles: [
      {
        network: "GitHub",
        username: "keshavop",
        url: "https://github.com/keshavop",
      },
      {
        network: "Portfolio",
        username: "keshavop",
        url: "https://keshavop.vercel.app",
      }
    ],
  },
  work: [
    {
      name: "Jupiter Money, Amica Financial Technologies Private Limited",
      position: "SDE Backend Intern",
      startDate: "2023-11-01",
      location: "India",
      highlights: [
        "Tech Stack: Java, Kotlin, Spring Boot, Kafka, PostgreSQL",
        "Contributed to the development of Loan against Mutual Funds (LAMF) project, gaining valuable experience in lending and mutual funds.",
        "Worked on the development of Gold V2 API with MMTC as a partner, reduce latency and enhanced user experience in the Gold product.",
        "Implemented key metrics and made Grafana dashboards for monitoring investment services, and enabled Prometheus based alerting system for proactive issue identification, enhancing service reliability.",
        "Created OneView internal dashboard for Magic Spends and LAMF to streamline handling of customer support tickets, significantly boosting overall team efficiency by 30%."
      ],
    }
  ],
  education: [
    {
      institution: "Lovely Professional University",
      area: "Computer Science and Engineering",
      studyType: "Bachelor of Technology",
      startDate: "2020-01-01",
      endDate: "2024-05-01",
      score: "CGPA: 8.49"
    }
  ],
  certificates: [
    {
      name: "META Front-end Professional Certification",
      issuer: "META"
    },
    {
      name: "META Back-end Professional Certification",
      issuer: "META"
    },
    {
      name: "Server side JavaScript with Node.js",
      issuer: "NIIT University Coursera"
    },
    {
      name: "Database Management System",
      issuer: "Infosys Springboard"
    },
    {
      name: "DSA Self Placed",
      issuer: "GeeksForGeeks"
    }
  ],
  skills: [
    {
      name: "Programming Languages",
      keywords: [
        "C++",
        "JAVA",
        "Kotlin",
        "JavaScript",
        "TypeScript",
        "SQL"
      ],
    },
    {
      name: "Frameworks & Databases",
      keywords: [
        "ReactJS",
        "NodeJS",
        "NextJS",
        "TailwindCSS",
        "Spring Boot",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "MongoDB"
      ],
    },
    {
      name: "Developer Tools",
      keywords: [
        "AWS",
        "GCP",
        "Docker",
        "Git",
        "GitHub",
        "Linux",
        "Postman",
        "Figma"
      ],
    }
  ],
  projects: [
    {
      name: "CodeSync IDE",
      description: "Collaborative IDE using React, Node.js, Rapid API, and Socket.IO for seamless real-time communication.",
      startDate: "2023-09-01",
      highlights: [
        "Implemented a live chat feature using Socket.IO, enabling users to discuss code, share insights, and brainstorm ideas within the platform.",
        "Implemented Codemirror to create modern UI like IDE, integrated Rapid API to compile and execute code in popular languages, including C, C++, JAVA, JavaScript, etc."
      ],
      url: "https://codesync-ide.vercel.app",
      keywords: ["React", "Node.js", "Socket.IO"]
    },
    {
      name: "Employee Navigator",
      description: "Employee management system with RESTful APIs for CRUD operations using Java Spring Boot and MySQL.",
      startDate: "2024-05-01",
      highlights: [
        "Implemented RESTful APIs for employee CRUD operations and used MySQL database Hibernate ORM, enabling efficient data persistence and retrieval.",
        "Designed and developed user authentication and authorization using JWT authentication token, ensuring secure access to the system.",
        "Enhanced application logging and monitoring using Spring Boot Actuator and configured deployment using Docker."
      ],
      url: "https://employee-navigator.vercel.app",
      keywords: ["Java", "Spring Boot", "MySQL"]
    }
  ],
  references: [],
  awards: [
    {
      title: "Leetcode Rating",
      date: "2023",
      awarder: "Leetcode",
      summary: "Rated 1430 at Leetcode and solved 500+ problems on Leetcode & Codestudio"
    },
    {
      title: "Hacktoberfest Contributor",
      date: "2023",
      awarder: "Hacktoberfest",
      summary: "Contributed to Hacktoberfest in 2021, 2022 and 2023"
    },
    {
      title: "Google Cloud Programs",
      date: "2022",
      awarder: "Google",
      summary: "Participated in Google Cloud Facilitator Program & Google Cloud Ready Program & earned badges"
    },
    {
      title: "LinkedIn Recognition",
      date: "2023",
      awarder: "LinkedIn",
      summary: "Selected as Top 5% in Web Development Space as a valuable contributor to LinkedIn Blog Space"
    }
  ]
};
