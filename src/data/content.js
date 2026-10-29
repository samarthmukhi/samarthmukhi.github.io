export const socials = {
  github: "https://github.com/samarthmukhi",
  linkedin: "https://www.linkedin.com/in/samarthmukhi",
  x: "https://x.com/samarth_mukhi",
};

export const profile = {
  name: "Samarth Mukhi",
  tagline: "Optimization, quant finance & AI systems",
  summary:
    "I build systems where math, not guesswork, makes the final call. Right now that means quant finance, optimization, and AI you can verify.",
  location: "Madison, Wisconsin",
  address: "Madison, Wisconsin",
  email: "samarth.mukhi@gmail.com",
  emails: [
    {
      label: "General",
      value: "samarth.mukhi@gmail.com",
      note: "General inquiries",
    },
    {
      label: "Research",
      value: "samarth.mukhi@wisc.edu",
      note: "Research collaborations with UW-Madison students",
    },
    {
      label: "NautiClean",
      value: "samarth@nauticlean.org",
      note: "Collaborations on NautiClean",
    },
  ],
  github: socials.github,
  linkedin: socials.linkedin,
  x: socials.x,
};

export const education = [
  {
    school: "University of Wisconsin-Madison",
    detail: "B.S. Computer Science & Statistics (intended) · Economic Analytics certificate",
    period: "2026 to 2030",
  },
  {
    school: "Guru Nanak Public School, New Delhi",
    detail: "CBSE Grade 12, Science & Computer Science · 87.2%",
    period: "2026",
  },
];

export const academicAchievements = [
  { label: "SAT", value: "1430 (Math 770)" },
  { label: "IELTS", value: "8.0" },
];

export const skills = [
  "Python",
  "SQL",
  "Java",
  "C++",
  "CVXPY & SCIP",
  "NumPy · SciPy · pandas",
  "FastAPI & React",
  "LLM agents",
  "OpenCV",
];

export const experience = [
  {
    org: "Recreation & Wellbeing, UW-Madison",
    role: "Audiovisual Support II",
    period: "Oct 2026 to now",
    location: "Madison",
    description: "Keep the AV and tech systems running across two campus rec centers.",
  },
  {
    org: "Priority Labs, UW-Madison",
    role: "Builder, Fall 2026",
    period: "Sep to Oct 2026",
    location: "Madison",
    description: "Nine-day builder sprint. Prototyped the verify-and-revise loop that became SwarmFolio Referee.",
  },
  {
    org: "NautiClean",
    role: "Founder",
    period: "2024 to now",
    location: "New Delhi",
    description: "Leading a marine cleanup robot from prototype toward deployment.",
    links: [{ label: "Website", href: "https://www.nauticlean.org" }],
  },
  {
    org: "Indraprastha World School",
    role: "Robotics Club President",
    period: "2023 to 2025",
    location: "New Delhi",
    description: "Ran training and led teams to inter-school and national competitions.",
  },
];

export const projects = [
  {
    name: "SwarmFolio Referee",
    year: "2026",
    tagline: "AI drafts the portfolio. Math checks it.",
    highlights: [
      "~80% of AI first drafts broke at least one client rule",
      "An exact optimizer finds every violation, proves conflicts, repairs the rest",
      "Built solo in 24h at LA Hacks · live with Stripe (sandbox) billing",
    ],
    tech: ["Python", "CVXPY", "SCIP", "Fetch.ai", "React"],
    links: [
      { label: "Live", href: "https://swarmfolio.biz" },
      { label: "Devpost", href: "https://devpost.com/software/swarmfolio-referee" },
      { label: "Code", href: "https://github.com/SwarmFolio-Labs/SwarmFolio---Referee" },
      { label: "Demo", href: "https://youtu.be/ngHaVytPs6M" },
    ],
  },
  {
    name: "SwarmFolio",
    year: "2026",
    tagline: "Particle swarm vs. Markowitz.",
    highlights: [
      "Handles rules Markowitz can't, like max holdings",
      "Matches the exact optimum (Sharpe 1.377 vs. 1.380)",
    ],
    tech: ["Python", "NumPy", "FastAPI", "React"],
    links: [
      { label: "Live", href: "https://swarmfolio.vercel.app" },
      { label: "Code", href: "https://github.com/samarthmukhi/SwarmFolio" },
    ],
  },
  {
    name: "OptionsForge",
    year: "2026",
    tagline: "Live option pricing for any ticker.",
    highlights: ["Monte Carlo and Black-Scholes, cross-checked"],
    tech: ["Python", "NumPy", "Streamlit"],
    links: [
      { label: "Live", href: "https://optionsforge.streamlit.app" },
      { label: "Code", href: "https://github.com/samarthmukhi/OptionsForge" },
    ],
  },
  {
    name: "NautiClean",
    year: "2020-25",
    tagline: "A robot that cleans up waterways.",
    highlights: ["Swarm-optimized routing to high-density waste zones", "INSPIRE-MANAK National Award"],
    tech: ["Arduino", "Raspberry Pi", "GPS"],
    links: [
      { label: "Website", href: "https://www.nauticlean.org" },
      { label: "Instagram", href: "https://www.instagram.com/nauticlean.io/" },
    ],
  },
  {
    name: "TraffIQ",
    year: "2024",
    tagline: "Traffic lights that adapt to live traffic.",
    highlights: ["Top 50 nationally, Plaksha Young Creators League"],
    tech: ["Python", "OpenCV"],
  },
];

export const research = {
  title: "Particle Swarm Optimization Based Path Planning in Autonomous Marine Trash Collection",
  journal: "IJERSTE · first author",
  paperUrl:
    "https://www.erpublications.com/uploaded_files/download/samarth-mukhi-dr-akanksha-sharma_WyIrb.pdf",
  description: "Swarm-optimized routing beat static and manual paths for NautiClean.",
};

export const awards = [
  {
    title: "INSPIRE-MANAK National Award for Innovation",
    org: "Government of India",
    tag: "National",
  },
  {
    title: "Young Creators League 2024 Grand Exhibition",
    org: "Plaksha University",
    tag: "Top 50 in India",
  },
  {
    title: "Techniche TechExpo 2025",
    org: "IIT Guwahati",
    tag: "Top 25 in India",
  },
  {
    title: "National AI Olympiad",
    org: "Talentsprint",
    tag: "Rank 105 in India",
  },
];

export const sections = [
  { id: "work", label: "Selected work" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "about", label: "Education" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/awards", label: "Awards" },
  { to: "/contact", label: "Contact" },
];
