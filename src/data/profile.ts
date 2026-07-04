export interface Education {
  degree: string;
  college: string;
  duration: string;
  cgpa: string;
}

export interface Profile {
  name: string;
  headline: string;
  tagline: string;
  shortBio: string;
  aboutMe: string;
  photo: string;
  photoPlaceholder: string;
  location: string;
  currentRole: string;
  currentCompany: string;
  availability: string;
  yearsExperience: string;
  education: Education[];
  languages: string[];
  interests: string[];
}

export const profile: Profile = {
  name: "Dipankar Karmakar",
  headline: "Building Enterprise Software That Solves Real Business Problems",
  tagline:
    "Full Stack Developer specializing in Enterprise SaaS Platforms, Identity Governance, Workflow Automation and Modern Web Applications.",
  shortBio:
    "a Full Stack Developer focused on enterprise software engineering. I build SaaS platforms, identity governance systems and production web applications using React, Node.js and MongoDB.",
  aboutMe:
    "Full Stack Developer with hands-on experience developing enterprise web applications using React, Node.js, Express, MongoDB and modern frontend technologies. Experienced in building scalable SaaS platforms, workflow automation systems and enterprise software solutions.",
  photo: "/images/profile/profile.jpg",
  photoPlaceholder: "/images/profile/profile-placeholder.jpg",
  location: "Odisha, India",
  currentRole: "Part-Time Full Stack Developer",
  currentCompany: "Wisibility",
  availability: "Open to full-time roles at companies building enterprise SaaS, identity platforms and modern web products.",
  yearsExperience: "3+ years",
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "Sri Sri University, Cuttack",
      duration: "2023 – 2025",
      cgpa: "Completed",
    },
    {
      degree: "Bachelor's Degree in Computer Programming",
      college: "Trident Academy of Creative Technology (TACT), Bhubaneswar",
      duration: "2019 – 2023",
      cgpa: "Completed",
    },
  ],
  languages: ["English", "Hindi", "Odia"],
  interests: [
    "Enterprise Software",
    "Full Stack Development",
    "Identity Governance",
    "Open Source",
    "Workflow Automation",
  ],
};
