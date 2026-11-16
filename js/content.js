/* ============================================================================
   CONTENT.JS  —  all the text on the website lives in this file.
   ============================================================================

   HOW TO EDIT
     1. Change the text between the "quotes". Keep the quotes and the commas.
     2. Save the file, then refresh the page in your browser (F5).

   HOW TO ADD AN ENTRY (an experience, a project, a degree, a skill group)
     1. Copy one whole block, from its opening  {  to its closing  },
     2. Paste it above or below the others. The order here is the order
        on the page, so put the newest entry first.
     3. Change the text.

   IF THE PAGE SHOWS AN ERROR after an edit, there is a typo in this file —
   usually a missing comma, quote or bracket. Press F12 in the browser and
   open the "Console" tab: it tells you the line number.
   ========================================================================= */

const CONTENT = {

  /* --------------------------------------------------------------------------
     PROFILE  —  the top of the page (your introduction)
     ----------------------------------------------------------------------- */
  profile: {
    name: "Quan Tran",
    initials: "QT",                      // shown in the top-left corner
    role: "Mechatronics Engineer",
    location: "Munich, Germany",

    // The large sentence under your name.
    headline:
      "I model, build and program engineering systems — from battery simulations to embedded hardware and AI agents.",

    // The smaller sentence under the headline.
    intro:
      "M.Sc. student in Mechatronics, Robotics and Biomechanical Engineering at the Technical University of Munich, with internship experience in energy storage simulation at PowerCo.",

    // Optional status badge next to your photo, for example
    // "Open to working student roles". Leave it as "" to hide it.
    availability: "",

    email: "quan.lm.tran@gmail.com",

    // Your photo. Replace the file in the assets folder, or leave "" to
    // show your initials instead.
    photo: "assets/profile.jpg",

    // To add a "CV" button: copy your CV into the assets folder and write
    // its path here, for example "assets/CV_Quan_Tran.pdf".
    cv: "",

    links: [
      { label: "GitHub",   url: "https://github.com/quantranle" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/quan-lm-tran/" },
    ],

    // The small table of facts next to your photo.
    facts: [
      { label: "Based in",  value: "Munich, Germany" },
      { label: "Studying",  value: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering, TUM" },
      { label: "Focus",     value: "Modelling & simulation · Embedded systems · Applied AI" },
      { label: "Languages", value: "English C1 · German B1 · Vietnamese (native)" },
    ],
  },

  /* --------------------------------------------------------------------------
     ABOUT ME  —  one "..." per paragraph. The first one is shown larger.
     ----------------------------------------------------------------------- */
  about: {
    paragraphs: [
      "I'm a mechatronics engineer based in Munich. I hold a B.Sc. in Mechatronic Systems Engineering from Rhine-Waal University of Applied Sciences and am now studying for an M.Sc. in Mechatronics, Robotics and Biomechanical Engineering at the Technical University of Munich.",
      "I like working where hardware meets software. At PowerCo I built and validated electro-thermal battery models for energy storage systems. In student projects I have designed PCBs and embedded firmware, worked on motor control and navigation for a Mars rover, published a computer vision paper and built AI agents in a 24-hour hackathon.",
      "Alongside engineering I have taught: SolidWorks tutorials for university students and coding classes for young learners.",
    ],
  },

  /* --------------------------------------------------------------------------
     EDUCATION  —  shown next to "About me". Newest first.
     "notes" is optional: use  notes: [],  for none.
     ----------------------------------------------------------------------- */
  education: [
    {
      degree: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering",
      school: "Technical University of Munich",
      location: "Munich, Germany",
      period: "Oct 2026 – Present",
      notes: [],
    },
    {
      degree: "B.Sc. Mechatronic Systems Engineering",
      school: "Rhine-Waal University of Applied Sciences",
      location: "Kleve, Germany",
      period: "Sep 2021 – Oct 2026",
      notes: [
        "Bachelor's thesis: Implementation of an Environmental Sensor for an Electric Go-Cart",
        "Activities: Robotics Club, E Go-Cart",
      ],
    },
    {
      degree: "Freshman Institute",
      school: "FH Aachen University of Applied Sciences",
      location: "Geilenkirchen, Germany",
      period: "Sep 2020 – Sep 2021",
      notes: [],
    },
  ],

  /* --------------------------------------------------------------------------
     EXPERIENCE  —  newest first.
       points : what you did, one "..." per bullet
       tags   : small labels under the bullets
     ----------------------------------------------------------------------- */
  experience: [
    {
      role: "Intern, ESS Modelling and Simulation",
      company: "PowerCo SE",
      location: "Braunschweig, Germany",
      period: "Apr 2025 – Dec 2025",
      points: [
        "Developed and validated multi-level 1D electro-thermal LFP battery models in MATLAB/Simulink/Simscape to support energy storage system (ESS) design evaluation under varying load and temperature conditions.",
        "Simulated charge/discharge and thermal behavior for BMS-relevant scenarios, enabling cross-functional teams to assess cooling strategy implications and system-level operating constraints.",
        "Evaluated key ESS performance indicators (round-trip efficiency, usable energy and capacity) and documented simulation workflows and results for engineering handover and model reuse.",
      ],
      tags: ["MATLAB", "Simulink", "Simscape", "Battery modelling", "Thermal simulation"],
    },
    {
      role: "Student Assistant, Engineering Drawing and Design",
      company: "Rhine-Waal University of Applied Sciences",
      location: "Kleve, Germany",
      period: "Apr 2023 – Jul 2023",
      points: [
        "Delivered SolidWorks tutorials to 30 students, achieving a 90% success rate in the final exam.",
      ],
      tags: ["SolidWorks", "CAD", "Teaching"],
    },
    {
      role: "Teaching Assistant, Coding",
      company: "ICANTECH",
      location: "Remote, Vietnam",
      period: "Aug 2022 – Apr 2023",
      points: [
        "Taught Scratch, Minecraft Education and Python to more than 70 young learners.",
      ],
      tags: ["Python", "Scratch", "Teaching"],
    },
  ],

  /* --------------------------------------------------------------------------
     PROJECTS  —  newest first.
       category : used for the filter buttons above the projects. Projects
                  with the same category are grouped under one button, so
                  re-use an existing name or invent a new one.
       featured : true makes the card full width with its details open.
       summary  : one or two sentences — this is what people skim.
       points   : details, shown under "What I did". Use  points: [],  for none.
       links    : buttons at the bottom of the card. Use  links: [],  for none.
       image    : optional picture, e.g. "assets/projects/rover.jpg".
                  Leave "" for no picture.
     ----------------------------------------------------------------------- */
  projects: [
    {
      title: "Three Out of Forty",
      category: "AI & Software",
      featured: true,
      context: "SiviHack 2026 · 24-hour AI hackathon · Frankfurt am Main",
      period: "Sep 2026",
      summary:
        "AI agents that screen weekly German public construction tenders and recommend which ones a company should bid on, with a reason for each decision. Built in a team of 6 for the Arctis AI sponsor challenge.",
      points: [
        "Built a data pipeline that collects construction tenders (CPV 45) from TED and oeffentlichevergabe.de, extracts bid-critical criteria (references, construction period, penalties, guarantees) from the tender documents and stores them in PostgreSQL.",
        "Implemented an LLM-based fit analysis with LangGraph, combining embedding retrieval and LLM reranking to check each tender against company constraints and return a green / yellow / red verdict.",
        "Delivered a clickable prototype with AI-assisted development (FastAPI) and presented it to the sponsor jury.",
        "Hackathon organized by the Vietnamese Student Association in Germany e. V.",
      ],
      tags: ["LangGraph", "LLM", "Embeddings", "FastAPI", "PostgreSQL"],
      links: [
        { label: "GitHub", url: "https://github.com/quantranle/sivihack_hackathon_2026" },
      ],
      image: "",
    },
    {
      // TODO: only the thesis title is in the CV. Add a summary of what you
      // built, a few points, and check the year.
      title: "Environmental Sensor for an Electric Go-Cart",
      category: "Embedded & Hardware",
      featured: false,
      context: "Bachelor's thesis · Rhine-Waal University of Applied Sciences",
      period: "2026",
      summary:
        "Bachelor's thesis on the implementation of an environmental sensor for an electric go-cart.",
      points: [],
      tags: ["Bachelor's thesis", "Sensors"],
      links: [],
      image: "",
    },
    {
      title: "Mouth Detector",
      category: "Research",
      featured: false,
      context: "Publication · World Journal of Advanced Research and Reviews (WJARR)",
      period: "Mar 2024 – Mar 2025",
      summary:
        "Real-time lip movement detection that combines LipNet and PyImageSearch. Published in WJARR, with me as corresponding author.",
      points: [
        "Implemented machine learning models in Python (OpenCV, PyImageSearch, TensorFlow) for real-time lip movement detection using computer vision techniques.",
        "Developed and tested a deep-learning-based mouth detection pipeline.",
      ],
      tags: ["Python", "OpenCV", "TensorFlow", "Deep learning"],
      links: [
        { label: "Publication", url: "https://wjarr.com/content/mouth-detector-combination-between-lipnet-and-pyimagesearch" },
        { label: "GitHub", url: "https://github.com/quantranle/MouthDetector" },
      ],
      image: "",
    },
    {
      title: "Wireless Emergency Stop Button",
      category: "Embedded & Hardware",
      featured: false,
      context: "Practical Electronics · Rhine-Waal University of Applied Sciences",
      period: "Oct 2024 – Jan 2025",
      summary:
        "A wireless emergency stop system for an electric go-cart, designed and prototyped with LoRa (SX1268) and ESP8266-based hardware.",
      points: [
        "Performed circuit design and PCB layout in EAGLE.",
        "Carried out soldering, assembly and testing, plus battery life and power consumption analysis.",
        "Implemented embedded software in C (Arduino IDE) for reliable wireless communication and emergency signal handling.",
      ],
      tags: ["LoRa", "ESP8266", "PCB design", "EAGLE", "C"],
      links: [],
      image: "",
    },
    {
      title: "Mars Rover",
      category: "Robotics",
      featured: false,
      context: "Robotics Club · Rhine-Waal University of Applied Sciences",
      period: "Jun 2022 – Aug 2022",
      summary:
        "Embedded motor control and higher-level navigation for the Robotics Club's Mars rover.",
      points: [
        "Developed embedded control functions in C on an Arduino Due for motor control.",
        "Used a Raspberry Pi 2 with Python for higher-level navigation tasks.",
        "Contributed to computer-vision-based navigation experiments and collaborated using GitLab/GitHub version control workflows.",
      ],
      tags: ["Arduino Due", "Raspberry Pi", "C", "Python", "Computer vision"],
      links: [],
      image: "",
    },
  ],

  /* --------------------------------------------------------------------------
     SKILLS  —  each block is one box on the page.
     ----------------------------------------------------------------------- */
  skills: [
    {
      group: "Programming",
      items: ["Python", "NumPy", "Pandas", "SciPy", "scikit-learn", "OpenCV", "MATLAB", "Simulink", "Simscape", "C/C++", "Java"],
    },
    {
      group: "Embedded & hardware",
      items: ["ESP32 / ESP8266", "Arduino", "Raspberry Pi", "PCB design", "EAGLE", "Altium", "LoRa"],
    },
    {
      group: "Tools & frameworks",
      items: ["SolidWorks", "TensorFlow", "LangGraph", "FastAPI", "PostgreSQL", "Git (GitHub / GitLab)", "MS Office"],
    },
    {
      group: "Languages",
      items: ["English — C1", "German — B1", "Vietnamese — native"],
    },
  ],

  /* --------------------------------------------------------------------------
     CONTACT  —  the box at the bottom. Your email and links are taken from
     the profile block at the top of this file.
     ----------------------------------------------------------------------- */
  contact: {
    title: "Get in touch",
    text: "The quickest way to reach me is by email or on LinkedIn.",
  },
};
