export const socials = {
  github: "https://github.com/samarthmukhi",
  linkedin: "https://www.linkedin.com/in/samarthmukhi",
  x: "https://x.com/samarth_mukhi",
};

export const profile = {
  name: "Samarth Mukhi",
  tagline: "Optimization, quant finance & AI systems",
  summary:
    "I build systems where math, not guesswork, makes the final call. I'm a Computer Science and Statistics student at the University of Wisconsin-Madison, also pursuing a certificate in Economic Analytics, and I'm most interested in quantitative finance, optimization, and AI that can be verified. At LA Hacks 2026 I built SwarmFolio Referee, where AI agents draft investment portfolios and an exact mixed-integer optimizer checks every client rule, proves when rules can't all be met, and repairs violations. Before that I built SwarmFolio, a particle swarm portfolio optimizer, and OptionsForge, a live option pricer. My path started with NautiClean, a semi-autonomous marine cleanup robot whose swarm-optimized path planning earned India's INSPIRE-MANAK National Award and became my first-author paper.",
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
  interests: [
    "Quantitative finance and portfolio optimization",
    "Exact and heuristic optimization (MIP, PSO)",
    "Verifiable AI: agents checked by math",
    "Autonomous systems for real-world impact",
  ],
};

export const education = [
  {
    school: "University of Wisconsin-Madison",
    detail:
      "Bachelor of Science, Computer Science and Statistics (intended double major), Certificate in Economic Analytics. Coursework: Data Science Programming I (CS 220), Calculus I (MATH 221), Microeconomics (ECON 101). Activities: Transcend UW, dot Data Science.",
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
  "SQL",
  "Java",
  "C++",
  "HTML/CSS",
  "Mixed-Integer & Convex Optimization (CVXPY, SCIP)",
  "Monte Carlo Simulation",
  "NumPy, SciPy & pandas",
  "FastAPI & React",
  "LLM Agents (LangChain, Fetch.ai)",
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
    org: "Recreation & Wellbeing, UW-Madison",
    role: "Audiovisual Support II",
    period: "October 2026 to Present",
    location: "Madison, Wisconsin",
    description:
      "Maintain and troubleshoot audiovisual and technology systems across the Nicholas Recreation Center and the Bakke Recreation & Wellbeing Center. I help with technology projects and system maintenance, keep back-end systems and documentation current, and track system performance in weekly reports.",
  },
  {
    org: "Priority Labs, UW-Madison",
    role: "Builder, Fall 2026 Cohort",
    period: "September 2026 to October 2026",
    location: "Madison, Wisconsin",
    description:
      "A nine-day builder sprint focused on execution and learning through experimentation. On the technical track I worked hands-on with LLMs, RAG, tool use, structured outputs, and agent orchestration, and prototyped a generate-verify-revise loop: an agent proposes portfolio constraints, a deterministic layer checks them against mathematical and business rules, quantifies conflicts, and feeds them back for revision. On the market track I researched SwarmFolio's customer segments, portfolio-construction workflows, and incumbent platforms, which narrowed it to a verification layer for AI investment reasoning in direct indexing and wealthtech. I presented the prototype and findings to Madison's startup community; that hypothesis became SwarmFolio Referee two weeks later.",
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
    name: "SwarmFolio Referee",
    tagline: "AI proposes, math decides: an exact verifier for AI-drafted portfolios (LA Hacks 2026)",
    description:
      "In a paired experiment across two LLMs, about 80% of AI first-draft portfolios broke at least one client rule. Built solo in 24 hours at LA Hacks 2026, SwarmFolio Referee is a five-agent investment committee on Fetch.ai: three LLM analysts (Macro, Fundamentals, Risk) write memos, a Chair agent drafts the portfolio, and a non-LLM Referee checks it with an exact mixed-integer optimization model (CVXPY + SCIP). The Referee reports every rule broken and by how much, proves when a client's rules can't all be met, isolates the smallest set of clashing rules and the cheapest fix, and repairs violations to the nearest compliant portfolio with minimum turnover. Analysts revise for up to three rounds, and \"rule price tags\" show what each rule costs in risk-adjusted return. It runs as a paid service with pay-per-check billing via Fetch's Agent Payment Protocol and Stripe (sandbox), deployed live with 293 automated tests.",
    tech: ["Python", "CVXPY", "SCIP", "FastAPI", "React", "Fetch.ai", "LangChain", "Stripe"],
    links: [
      { label: "Live App", href: "https://swarmfolio.biz" },
      { label: "Devpost", href: "https://devpost.com/software/swarmfolio-referee" },
      { label: "GitHub", href: "https://github.com/SwarmFolio-Labs/SwarmFolio---Referee" },
      { label: "Demo Video", href: "https://youtu.be/ngHaVytPs6M" },
    ],
  },
  {
    name: "SwarmFolio",
    tagline: "Particle swarm vs. Markowitz portfolio optimization",
    description:
      "A full-stack portfolio optimizer that pits classical Markowitz mean-variance optimization against a particle swarm optimizer written from scratch. Markowitz can't express real-world rules like a maximum number of holdings (cardinality) or minimum position sizes; the swarm can. On the unconstrained problem the swarm reproduces the analytic Markowitz optimum (Sharpe 1.377 vs. 1.380), a feasibility layer flags impossible constraint sets, and a look-ahead-safe walk-forward backtest reproduces the classic 1/N puzzle, where naive equal weighting beats out-of-sample max-Sharpe optimization.",
    tech: ["Python", "NumPy", "SciPy", "FastAPI", "React"],
    links: [
      { label: "Live App", href: "https://swarmfolio.vercel.app" },
      { label: "GitHub", href: "https://github.com/samarthmukhi/SwarmFolio" },
    ],
  },
  {
    name: "OptionsForge",
    tagline: "Live Black-Scholes & Monte Carlo option pricing",
    description:
      "A web app that prices European stock options in real time from live market data: enter any public ticker and it estimates volatility, then prices the option two independent ways — a Monte Carlo simulation and the closed-form Black-Scholes formula — with a convergence chart showing the simulation settle onto the exact price as the number of paths grows. The pricing engine models stock prices with geometric Brownian motion and cross-validates both methods, which agree to within a fraction of a percent.",
    tech: ["Python", "NumPy", "SciPy", "Streamlit", "yfinance", "Matplotlib"],
    links: [
      { label: "Live App", href: "https://optionsforge.streamlit.app" },
      { label: "GitHub", href: "https://github.com/samarthmukhi/OptionsForge" },
    ],
  },
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
