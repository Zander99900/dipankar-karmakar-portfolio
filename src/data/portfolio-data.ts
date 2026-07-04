export const siteConfig = {
  name: "Dipankar Karmakar",
  role: "Full Stack Developer",
  url: "https://dipankarkarmakar.dev",
  email: "dipankarkarmakardk007@gmail.com",
  resumeUrl: "/assets/images/dipankar_karmakar_resume.pdf",
  github: "https://github.com/Zander99900/",
  linkedin: "https://www.linkedin.com/in/dipankar-karmakar-a47412236/",
} as const;

export const heroContent = {
  headline: "Building Enterprise Software That Solves Real Business Problems",
  subheadline:
    "Full Stack Developer specializing in Enterprise SaaS Platforms, Identity Governance, Workflow Automation and Modern Web Applications.",
  summary:
    "Full Stack Developer with hands-on experience developing enterprise web applications using React, Node.js, Express, MongoDB and modern frontend technologies. Experienced in building scalable SaaS platforms, workflow automation systems and enterprise software solutions.",
} as const;

export const featureStrip = [
  {
    icon: "assets/images/home3/icon1.svg",
    title: "Enterprise SaaS",
    description: "Building scalable multi-tenant platforms.",
  },
  {
    icon: "assets/images/home3/icon2.svg",
    title: "Workflow Automation",
    description: "Configurable business process automation.",
  },
  {
    icon: "assets/images/home3/icon3.svg",
    title: "Identity Governance",
    description: "Access Certification, RBAC, Security.",
  },
] as const;

export const aboutContent = {
  heading: "Designing Software Beyond CRUD Applications",
  summary: heroContent.summary,
  engineeringHeading: "Engineering Products Used By Enterprise Teams",
  engineeringDescription:
    "I design and build production systems where authentication, authorization, workflow orchestration and data integrity are first-class concerns—not afterthoughts.",
  bullets: [
    "Identity Governance",
    "REST APIs",
    "Authentication",
    "RBAC",
    "Workflow Engines",
    "Reporting",
    "MongoDB",
    "React",
    "Node.js",
  ],
} as const;

export const expertiseItems = [
  {
    title: "React Development",
    description: "Component-driven UIs for complex enterprise workflows and dashboards.",
    iconIndex: 1,
  },
  {
    title: "Node.js Backend",
    description: "Scalable API layers with Express, JWT authentication and service-oriented design.",
    iconIndex: 2,
  },
  {
    title: "Enterprise SaaS",
    description: "Multi-tenant architecture, tenant isolation and configurable platform modules.",
    iconIndex: 3,
  },
  {
    title: "Identity Governance",
    description: "Access certification, identity correlation and enterprise security operations.",
    iconIndex: 4,
  },
  {
    title: "REST APIs",
    description: "Well-structured endpoints with validation, versioning and integration patterns.",
    iconIndex: 5,
  },
  {
    title: "Database Design",
    description: "MongoDB schemas, indexing strategy and data models for operational scale.",
    iconIndex: 6,
  },
] as const;

export type FeaturedProjectHighlight = {
  title: string;
  description: string;
};

export type FeaturedProjectStat = {
  value: number;
  suffix: string;
  label: string;
};

export type FeaturedProjectConfig = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  category?: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  techPills: readonly string[];
  stats: readonly FeaturedProjectStat[];
  highlights?: readonly FeaturedProjectHighlight[];
};

export const featuredSoftwareSection = {
  title: "Featured Software",
  subtitle: "Enterprise Applications & Government Digital Solutions",
} as const;

export const featuredProjects: readonly FeaturedProjectConfig[] = [
  {
    id: "identitysphere",
    eyebrow: "Featured Product",
    title: "IdentitySphere",
    subtitle: "Enterprise Identity Governance Platform",
    description:
      "Architected and developed a multi-tenant Identity Governance platform enabling identity lifecycle management, workflow automation, access governance and enterprise security operations.",
    image: {
      src: "/assets/images/home1/thumb3.png",
      alt: "IdentitySphere platform interface",
    },
    techPills: [
      "Identity Correlation",
      "Access Certification",
      "Workflow Engine",
      "RBAC",
      "JWT",
      "LDAP",
      "Active Directory",
      "Reporting",
      "MongoDB",
      "React",
      "Node.js",
    ],
    stats: [
      { value: 750, suffix: "+", label: "API Endpoints" },
      { value: 185, suffix: "+", label: "Data Models" },
      { value: 80, suffix: "+", label: "Components" },
      { value: 12, suffix: "+", label: "Background Jobs" },
    ],
  },
  {
    id: "swargadwar-hrms",
    eyebrow: "Featured Product",
    title: "Swargadwar HRMS",
    subtitle: "Government Human Resource Management System",
    category: "Enterprise HRMS",
    description:
      "Developed a multi-role Human Resource Management System using PHP and MySQL for the Swargadwar Management Committee, Government of Odisha. The platform streamlines employee lifecycle management, biometric attendance verification, payroll processing, leave administration, and role-based approvals through dedicated portals for HR, Admin, Super Admin, Company, and Employees.",
    image: {
      src: "/assets/images/home1/thumb2.png",
      alt: "Swargadwar HRMS dashboard interface",
    },
    techPills: [
      "Employee Lifecycle",
      "Biometric Attendance",
      "Payroll Engine",
      "Salary Approval",
      "Role Based Access",
      "Leave Management",
      "Document Management",
      "Reporting",
      "PHP",
      "MySQL",
      "Bootstrap",
      "jQuery",
    ],
    stats: [
      { value: 100, suffix: "+", label: "PHP Files" },
      { value: 34, suffix: "+", label: "AJAX Endpoints" },
      { value: 11, suffix: "+", label: "Database Tables" },
      { value: 5, suffix: "", label: "User Portals" },
    ],
    highlights: [
      {
        title: "Employee Management",
        description:
          "Complete employee lifecycle including onboarding, verification, resignation and rejoining.",
      },
      {
        title: "Attendance Verification",
        description:
          "Integrated biometric attendance verification supporting multi-shift and custom attendance workflows.",
      },
      {
        title: "Payroll Processing",
        description:
          "Automated salary calculation with EPF, ESIC, attendance deductions and approval workflow.",
      },
      {
        title: "Government Workflow",
        description:
          "Role-based HRMS supporting HR, Admin, Super Admin, Company and Employee portals.",
      },
    ],
  },
];

/** @deprecated Use featuredProjects[0] */
export const featuredProject = featuredProjects[0];

export const enterpriseProjects = [
  {
    title: "IdentitySphere",
    overview:
      "Multi-tenant Identity Governance platform for identity lifecycle management, access certification and workflow automation.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "RBAC", "REST APIs"],
    highlights: [
      "Multi-tenant architecture with role-based access control",
      "Workflow engine for access certification campaigns",
      "Identity correlation across enterprise directories",
      "750+ REST API endpoints with structured validation",
    ],
  },
  {
    title: "IAM Transformation Platform",
    overview:
      "Platform for planning and executing identity and access management transformation initiatives across enterprise environments.",
    stack: ["React", "Node.js", "MongoDB", "REST APIs", "Workflow Automation"],
    highlights: [
      "Maturity assessment and roadmap planning modules",
      "Process automation for IAM program delivery",
      "Stakeholder reporting and progress tracking",
      "Integration-ready API architecture",
    ],
  },
  {
    title: "Capability Maturity Platform",
    overview:
      "Assessment platform for evaluating organizational capability maturity with structured scoring and improvement planning.",
    stack: ["React", "Node.js", "MongoDB", "REST APIs", "Reporting"],
    highlights: [
      "Configurable maturity models and scoring frameworks",
      "Assessment workflows with audit trails",
      "Executive dashboards and exportable reports",
      "Role-based views for assessors and administrators",
    ],
  },
] as const;

export const clientProjects = [
  {
    title: "House of Adam & Eve",
    category: "E-Commerce",
    description: "Full-stack e-commerce platform with product catalog and order management.",
    technology: "WordPress, WooCommerce",
    liveUrl: "https://houseofadamandeve.in",
  },
  {
    title: "TravelKarle",
    category: "Travel",
    description: "Travel booking website with destination listings and inquiry workflows.",
    technology: "WordPress, Custom Theme",
    liveUrl: "https://travelkarle.com",
  },
  {
    title: "Livpex Realty",
    category: "Real Estate",
    description: "Property listing platform with search, filtering and lead capture.",
    technology: "WordPress, Elementor",
    liveUrl: "https://livpexrealty.com",
  },
  {
    title: "Zenastia",
    category: "Lifestyle",
    description: "Brand website with content management and responsive product showcase.",
    technology: "WordPress",
    liveUrl: "https://zenastia.com",
  },
  {
    title: "Sri Ganapati Palace",
    category: "Hospitality",
    description: "Hotel website with room information, gallery and reservation inquiries.",
    technology: "WordPress",
    liveUrl: undefined,
  },
  {
    title: "Swargadwar HRMS",
    category: "HR Management",
    description: "Human resource management system for employee records and attendance tracking.",
    technology: "HTML, CSS, JavaScript, PHP, MySQL",
    liveUrl: undefined,
  },
] as const;

export const experienceItems = [
  {
    company: "Wisibility",
    role: "Part-Time Full Stack Developer",
    period: "Present",
    description:
      "Building enterprise web applications with React, Node.js and MongoDB. Contributing to SaaS platform features, API development and workflow modules.",
  },
  {
    company: "Ladera Technology",
    role: "Trainee - SAP ABAP Consultant",
    period: "Present",
    description:
      "Developed and maintained SAP ABAP solutions for enterprise business processes. Delivered custom reports, interfaces and data migration programs.",
  },
  {
    company: "Freelance",
    role: "WordPress Developer",
    period: "Previous",
    description:
      "Built and maintained WordPress websites for businesses across e-commerce, real estate, travel and hospitality sectors.",
  },
] as const;

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "Material UI", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT", "MongoDB"],
  },
  {
    title: "Enterprise",
    skills: ["SAP", "Identity Governance", "Workflow Automation", "RBAC", "LDAP"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Hostinger", "Vercel"],
  },
] as const;

export type Certification = {
  title: string;
  issuer: string;
  icon: string;
  certificateUrl: string;
};

export const certifications: readonly Certification[] = [
  {
    title: "SAP Certified ABAP Cloud Developer",
    issuer: "SAP",
    icon: "/assets/images/certifications/sap-logo.svg",
    certificateUrl: "https://www.credly.com/badges/4c2a33a0-9360-4651-99e3-032f22a601eb/public_url",
  },
  {
    title: "IBM Front-End Web Development",
    issuer: "IBM",
    icon: "/assets/images/certifications/ibm-logo.png",
    certificateUrl: "https://drive.google.com/file/d/1CCtYDjxXaoql025RVPQUsMZ_MEAeEm_g/view",
  },
];

export const faqItems = [
  {
    question: "Who am I?",
    answer:
      "Introduction is generated from profile.name and profile.shortBio.",
  },
  {
    question: "What technologies do I work with?",
    answer:
      "My core stack includes React, Next.js, Node.js, Express, MongoDB, REST APIs and JWT-based authentication. I also work with SAP ABAP, identity governance concepts, RBAC, LDAP and WordPress for selected delivery work.",
  },
  {
    question: "Why Enterprise Software?",
    answer:
      "Enterprise software demands disciplined architecture, security and long-term maintainability. I focus on systems where access control, workflow automation and data integrity directly affect how organizations operate.",
  },
  {
    question: "Do I freelance?",
    answer:
      "My primary focus is full-time software engineering roles at product-driven companies. I have delivered client websites in the past, but my portfolio centers on enterprise product development and platform engineering.",
  },
  {
    question: "Available for opportunities?",
    answer:
      "Yes. I am open to full-time roles at companies building enterprise SaaS, identity platforms and modern web products. You can reach me via email or LinkedIn to discuss opportunities.",
  },
] as const;
