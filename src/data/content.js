export const socials = {
  github: "https://github.com/samarthmukhi",
  linkedin: "https://www.linkedin.com/in/samarthmukhi",
  x: "https://x.com/samarth_mukhi",
};

export const profile = {
  name: "Samarth Mukhi",
  tagline: "Data science & autonomous systems builder",
  summary:
    "I build systems that work in the real world, using data, robotics, and optimization. I care more about solutions that can actually be deployed than models that only run in a notebook. I'm a Data Science student at the University of Wisconsin-Madison and the founder of NautiClean, a semi-autonomous marine cleanup system. My work spans GPS-guided navigation, particle swarm optimization for path planning, and computer vision for adaptive traffic control.",
  location: "Madison, Wisconsin",
  address: "420 N Park St, Madison, Wisconsin 53706",
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
  interests: [
    "Optimization and decision systems",
    "Applied AI and computer vision",
    "Autonomous systems for real-world impact",
  ],
};

export const education = [
  {
    school: "University of Wisconsin-Madison",
    detail: "Bachelor of Science, Data Science",
    period: "September 2026 to May 2030",
  },
  {
    school: "Plaksha University",
    detail: "Young Data Scientists Summer Program, Data Science",
    period: "June 2025",
  },
  {
    school: "Guru Nanak Public School, Punjabi Bagh",
    detail:
      "CBSE Senior School Certificate (AISSCE), Science (Non-Medical) and Computer Science, 87.2% aggregate",
    period: "April 2025 to April 2026",
  },
  {
    school: "Indraprastha World School",
    detail: "CBSE Secondary School Examination, 92.2% aggregate",
    period: "February 2018 to April 2025",
  },
];

export const academicAchievements = [
  { label: "CBSE Grade 12 (2026)", value: "87.2% aggregate" },
  { label: "SAT (August 2025)", value: "1430 (Math 770, EBRW 660)" },
  { label: "IELTS (October 2025)", value: "8.0 Band Overall" },
];

export const skills = [
  "Python",
  "Java",
  "Computer Vision (OpenCV)",
  "Particle Swarm Optimization",
  "Data Analysis (Stata)",
  "Microsoft Power BI",
  "Arduino & Raspberry Pi",
  "Embedded Systems",
  "GPS Navigation Systems",
  "Robotics & IoT",
];

export const certifications = [
  "Data Science Bootcamp, Indian Institute of Technology Delhi",
  "Computer Vision, Great Learning",
  "AI Fundamentals, Great Learning",
  "Digital Marketing, Google",
  "Microsoft Power BI, Microsoft",
  "Robotics and IoT (Senior Level), Avishkaar",
];

export const experience = [
  {
    org: "Scoviq",
    role: "Co-Founder",
    period: "June 2026 to Present",
    location: "Madison, Wisconsin",
    description:
      "Co-founding a new venture in Madison, building on the systems and optimization work behind NautiClean and TraffIQ.",
    links: [
      { label: "Website", href: "https://scoviq.com" },
      { label: "Instagram", href: "https://www.instagram.com/scoviqhq/" },
      { label: "X", href: "https://x.com/scoviqhq" },
    ],
  },
  {
    org: "NautiClean",
    role: "Founder & Project Lead",
    period: "October 2024 to Present",
    location: "New Delhi",
    description:
      "Building an autonomous marine waste collection system that targets water pollution in urban and coastal areas. It uses GPS-guided navigation, sensor-driven path optimization, and particle swarm optimization to route toward high-density waste zones. I prototyped it with Arduino, Raspberry Pi, and real-time environmental sensors, working alongside research mentors in the IIT Delhi ecosystem.",
    links: [
      { label: "Website", href: "https://www.nauticlean.org" },
      { label: "Instagram", href: "https://www.instagram.com/nauticlean.io/" },
    ],
  },
  {
    org: "TraffIQ",
    role: "Co-Founder & Project Lead",
    period: "September 2024 to Present",
    location: "New Delhi",
    description:
      "Built an AI traffic management system that adjusts signal timing to live conditions. A computer vision pipeline detects and classifies vehicles in real time, then a signal engine tunes light cycles to current traffic density. Built and tested with Python, OpenCV, and embedded hardware (Arduino and Raspberry Pi). Recognized among the top 50 projects nationally at the Plaksha Young Creators League.",
  },
  {
    org: "Indraprastha World School, Robotics Club",
    role: "President",
    period: "January 2023 to March 2025",
    location: "New Delhi",
    description:
      "Led the school Robotics Club on hands-on projects with Arduino, Raspberry Pi, and Python. Ran training sessions and guided teams through inter-school and national competitions, including the marine trash collector recognized under the INSPIRE Award.",
  },
  {
    org: "Indraprastha World School, Tech Team Opcode",
    role: "Member",
    period: "April 2021 to January 2023",
    location: "New Delhi",
    description:
      "Contributed to robotics projects for inter-school competitions, building and presenting team projects.",
  },
];

export const projects = [
  {
    name: "NautiClean",
    tagline: "Semi-autonomous marine trash collection system",
    description:
      "A student-led marine cleanup project using GPS-guided navigation and sensor-driven pathfinding to reach high-density waste zones in polluted water. Particle swarm optimization routes the platform more efficiently than static or manual systems.",
    tech: [
      "GPS Navigation",
      "Particle Swarm Optimization",
      "Arduino",
      "Raspberry Pi",
      "Sensor Fusion",
    ],
    links: [
      { label: "Website", href: "https://www.nauticlean.org" },
      { label: "Instagram", href: "https://www.instagram.com/nauticlean.io/" },
    ],
  },
  {
    name: "TraffIQ",
    tagline: "AI adaptive traffic management",
    description:
      "A computer vision traffic system that adjusts signal timing to real-time vehicle density. Camera-based detection feeds a signal engine that cuts idle time and improves throughput compared to static timers.",
    tech: ["Python", "OpenCV", "Computer Vision", "Arduino", "Raspberry Pi"],
  },
  {
    name: "Uncorking Insights",
    tagline: "A wine quality analysis from the Young Data Scientists Summer Program, Plaksha University",
    description:
      "Used Stata to find predictive trends across consumer and chemical data during a week-long applied data science program. Faculty commended the work for its analytical rigor and clear presentation.",
    tech: ["Stata", "Statistical Analysis", "Data Science"],
  },
];

export const research = {
  title:
    "Particle Swarm Optimization Based Efficient Path Planning in Autonomous Marine Trash Collection",
  journal: "Published in IJERSTE",
  mentor: "Conducted under the guidance of Dr. Akanksha Sharma (PhD, Renewable Energy)",
  paperUrl:
    "https://www.erpublications.com/uploaded_files/download/samarth-mukhi-dr-akanksha-sharma_WyIrb.pdf",
  description:
    "Developed and validated a particle swarm optimization approach to path planning for an autonomous marine trash collector, improving collection efficiency in high-density waste zones over static and manual baselines. The work grew out of NautiClean, developed with research mentors in the IIT Delhi ecosystem to study how the system scales and where it can be deployed cost effectively.",
  focusAreas: [
    "Algorithmic routing and optimization",
    "Autonomous navigation systems",
    "Deployment and scalability",
  ],
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
    org: "Indian Institute of Technology, Guwahati",
    tag: "Top 25 in India",
  },
  {
    title: "National AI Olympiad",
    org: "Talentsprint",
    tag: "Rank 105 nationally, 11th in Delhi",
  },
  {
    title: "Super Scholar Award",
    org: "Outstanding academic performance, three years running",
    tag: "Academic",
  },
  {
    title: "Inter-School Tech Fests",
    org: "Multiple accolades across competitions",
    tag: "Multiple",
  },
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
