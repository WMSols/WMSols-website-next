export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  skills?: string[];
  perks?: string[];
}

export const positions: Job[] = [
  {
    id: "0",
    title: "Business Development Manager (5+ Years Experience Required)",
    location: "On-site / Remote",
    type: "Full-time",
    category: "Business Development",
    description:
      "We are looking for a highly driven and strategic Business Development Manager with a minimum of 5+ years of proven experience in business development, sales, or strategic partnerships. This role is ideal for a professional who has consistently delivered revenue growth, built strong client relationships, and identified new market opportunities.",
    overview:
      "We are looking for a highly driven and strategic Business Development Manager with a minimum of 5+ years of proven experience in business development, sales, or strategic partnerships. This role is ideal for a professional who has consistently delivered revenue growth, built strong client relationships, and identified new market opportunities.",
    responsibilities: [
      "Identify, evaluate, and secure new business opportunities to drive revenue growth",
      "Develop and execute strategic business development plans aligned with company objectives",
      "Build and maintain long-term relationships with key clients and stakeholders",
      "Lead end-to-end sales cycles from prospecting and pitching to negotiation and closing",
      "Conduct market research, competitor analysis, and identify emerging trends",
      "Prepare proposals, presentations, and commercial agreements",
      "Collaborate with internal teams (marketing, operations, finance) to ensure seamless execution",
      "Achieve and exceed revenue and growth targets",
    ],
    requirements: [
      "Minimum 5+ years of hands-on experience in Business Development, B2B Sales, or Strategic Growth roles",
      "Demonstrated track record of closing high-value deals and meeting/exceeding targets",
      "Strong understanding of sales funnels, pipeline management, and CRM tools",
      "Excellent negotiation, presentation, and stakeholder management skills",
      "Ability to develop long-term growth strategies and execute independently",
      "Strong analytical skills with a data-driven approach to decision-making",
      "Bachelor's degree in Business, Marketing, or related field (MBA is a plus)",
    ],
    skills: ["B2B Sales", "Business Development", "Pipeline Management", "CRM", "Negotiation", "Strategic Planning","Apollo","Upwork"],
    perks: [
      "Competitive salary with attractive performance incentives",
      "Leadership visibility and growth opportunities",
      "Collaborative and performance-driven work culture",
      "Opportunity to directly impact company growth and expansion",
    ],
  },
  {
    id: "1",
    title: "Full Stack Developer Intern",
    location: "On-site / Remote",
    type: "Internship",
    category: "Engineering",
    description: "Work on real-world web applications while learning full-stack development alongside experienced engineers.",
    overview: "As a Full Stack Developer Intern at WMSols, you will gain hands-on experience building scalable web applications and collaborating with a professional development team.",
    responsibilities: [
      "Assist in developing frontend interfaces using modern frameworks",
      "Work on backend APIs and database integration",
      "Debug, test, and optimize applications",
      "Collaborate with designers and senior developers",
      "Follow best coding practices and standards",
    ],
    requirements: [
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Familiarity with any frontend or backend framework is a plus",
      "Understanding of APIs and databases",
      "Strong problem-solving skills",
      "Eagerness to learn and grow",
    ],
    skills: ["HTML", "CSS", "JavaScript", "APIs", "Databases", "Problem Solving"],
    perks: ["Hands-on industry experience", "Mentorship from senior developers", "Flexible work environment", "Certificate upon completion"],
  },
  {
    id: "2",
    title: "AI Engineer Intern",
    location: "On-site / Remote",
    type: "Internship",
    category: "AI / Machine Learning",
    description: "Work with AI/ML models and data-driven solutions to solve real-world business problems.",
    overview: "The AI Engineer Intern role at WMSols is ideal for candidates passionate about artificial intelligence, machine learning, and applied data science.",
    responsibilities: [
      "Assist in developing and training AI/ML models",
      "Work with datasets for preprocessing and analysis",
      "Implement AI solutions for business use cases",
      "Research new AI techniques and tools",
      "Support testing and model optimization",
    ],
    requirements: [
      "Basic understanding of AI, ML, or Data Science",
      "Familiarity with Python and related libraries",
      "Knowledge of data handling and model evaluation",
      "Analytical mindset and curiosity",
    ],
    skills: ["Python", "Machine Learning", "Data Analysis", "AI Models", "Problem Solving"],
    perks: ["Exposure to real AI projects", "Learning-oriented environment", "Mentorship from AI professionals"],
  },
  {
    id: "3",
    title: "Business Development Executive (BDE) Intern",
    location: "On-site",
    type: "Internship",
    category: "Business Development",
    description: "Support business growth through sales, lead generation, and client communication in the tech industry.",
    overview: "As a BDE Intern at WMSols, you will gain hands-on experience in sales, marketing, and client relationship management within a fast-growing tech company.",
    responsibilities: [
      "Identify potential clients and market opportunities",
      "Assist in lead generation and outreach",
      "Communicate with clients via email, calls, and social platforms",
      "Prepare proposals and presentations",
      "Conduct market and competitor research",
    ],
    requirements: [
      "Strong communication and interpersonal skills",
      "Interest in sales, marketing, or business development",
      "Basic understanding of IT services is a plus",
      "Self-motivated and goal-oriented mindset",
    ],
    skills: ["Communication", "Lead Generation", "Sales", "Market Research", "Client Handling"],
    perks: ["Real-world sales experience", "Client exposure", "Career growth opportunities"],
  },
  {
    id: "4",
    title: "HR Intern",
    location: "On-site",
    type: "Internship",
    category: "Human Resources",
    description: "Assist HR operations including recruitment, onboarding, and employee engagement activities.",
    overview: "The HR Intern role at WMSols provides exposure to core human resource functions and professional workplace practices.",
    responsibilities: [
      "Assist in recruitment and onboarding processes",
      "Screen resumes and coordinate interviews",
      "Maintain employee records and documentation",
      "Support HR policies and internal communication",
      "Help organize training and engagement activities",
    ],
    requirements: [
      "Interest in Human Resource Management",
      "Strong organizational and communication skills",
      "Basic understanding of HR processes is a plus",
      "Professional attitude and confidentiality awareness",
    ],
    skills: ["Recruitment", "Communication", "Organization", "HR Operations", "Confidentiality"],
    perks: ["Exposure to HR operations", "Professional work environment", "Learning & development opportunities"],
  },
];

export const testimonials = [
  { name: "Ali Farqleet", role: "Business Developer Executive", tenure: "3 years at WMSols", image: "/images/ali-farqaleet.jpeg", quote: "A space for people who want to grow inter-dependently" },
  { name: "Mubeen Bhatti", role: "Flutter Developer", tenure: "2 years at WMSols", image: "/images/mubeen.jpeg", quote: "At WMSols, my Flutter growth is built on ownership, responsibility, and real product execution." },
  { name: "Faraz Khan", role: "AI Engineer", tenure: "4 years at WMSols", image: "/images/faraz.jpeg", quote: "A great place to learn, collaborate, strategize and contribute to impactful projects." },
];
