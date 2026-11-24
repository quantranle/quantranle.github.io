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

    // What the Email button does:
    //   "gmail" opens a new Gmail message to you in the visitor's browser.
    //   "app"   opens the visitor's own mail program (Outlook, Apple Mail, ...).
    emailOpensIn: "gmail",

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
       images : pictures, see below. Use  images: [],  for none.

     PICTURES (the same for experience and projects)
       1. Copy the picture file into  assets/experience  or  assets/projects.
          Use simple file names without spaces, e.g. powerco-test-bench.jpg
       2. Write its path between the [ ]:

            images: ["assets/experience/powerco-test-bench.jpg"],

          Several pictures are separated by commas:

            images: [
              "assets/projects/rover-1.jpg",
              "assets/projects/rover-2.jpg",
            ],

          To give a picture a caption, write it like this instead:

            images: [
              { src: "assets/projects/rover-1.jpg", caption: "Testing the rover outdoors" },
            ],

       Visitors see small pictures and can click one to view it large.
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
      images: [],
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
      images: [],
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
      images: [],
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
       images   : pictures of the project (see PICTURES under EXPERIENCE).
                  Put the files in assets/projects. Use  images: [],  for none.

     PROJECT STORY PAGE (optional)
       A project with a "story" gets its own page: visitors click the card
       (or "Read the story") to open it. See "Wireless Emergency Stop Button"
       below for a full example.
       cover    : one big picture, shown on the card and at the top of the
                  story page:  cover: { src: "assets/projects/x.jpg", caption: "..." },
       story    : {
                    facts:    small table at the top, like the one on the home page
                    chapters: the story, in order. Each chapter has
                      heading : its title
                      text    : one "..." per paragraph
                      images  : pictures with captions, same as above. Add
                                wide: true  to show a picture full width and
                                uncropped (good for schematics and drawings).
                  }
       The page address is  index.html#projects/ + the title in lower case
       with dashes, e.g.  index.html#projects/wireless-emergency-stop-button
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
      images: [],
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
      images: [],
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
      images: [],
    },
    {
      title: "Wireless Emergency Stop Button",
      category: "Embedded & Hardware",
      featured: false,
      context: "Practical Electronics · Rhine-Waal University of Applied Sciences",
      period: "Oct 2024 – Jan 2025",
      summary:
        "A handheld emergency stop for the university's electric go-cart, so that a supervisor can stop the cart from outside. Two custom ESP8266 boards, designed in EAGLE and assembled by hand in the university lab.",
      points: [
        "Performed circuit design and PCB layout in EAGLE.",
        "Carried out soldering, assembly and testing, plus battery life and power consumption analysis.",
        "Implemented embedded software in C (Arduino IDE) for reliable wireless communication and emergency signal handling.",
      ],
      tags: ["ESP8266", "Wi-Fi", "LoRa", "PCB design", "EAGLE", "C"],
      links: [
        { label: "GitHub", url: "https://github.com/quantranle/WirelessEmergencyStopButton" },
      ],
      images: [],

      cover: { src: "assets/projects/wireless-e-stop/final-boards.jpg", caption: "The two finished boards: transmitter and receiver" },

      story: {
        facts: [
          { label: "Team",     value: "2 students, with Pham Duc Binh" },
          { label: "Duration", value: "Oct 2024 – Jan 2025" },
          { label: "Hardware", value: "ESP8266-12F, SX1268 LoRa, CP2102N USB-UART" },
          { label: "Tools",    value: "EAGLE, Arduino IDE, PlatformIO, reflow oven" },
        ],
        chapters: [
          {
            heading: "Why we built it",
            text: [
              "At a student festival at Rhine-Waal University, students were driving the faculty's electric go-cart around campus under supervision. One driver panicked, lost control of the cart and put the people around them at risk. The cart had an emergency stop button on board, but in that moment of panic the driver did not press it.",
              "That was the starting point of our project in the Practical Electronics course: an on-board button only helps if the person in the seat can still think clearly. We wanted to give the supervisor standing next to the track a button of their own, so the cart can be stopped from outside.",
            ],
            images: [],
          },
          {
            heading: "How it works",
            text: [
              "The system has two boards. The transmitter is the handheld part: a mechanical push button, a buzzer, a green and a red LED, running on batteries through a 3.3 V regulator. The receiver sits on the go-cart and is connected to the cart's controller through a digital input/output.",
              "The transmitter opens its own Wi-Fi access point, and the receiver connects to it. Five times a second the transmitter reports the state of its button. While all is well the green LED is on. When the button is pressed, the message switches to the stop signal: the red LED turns on, the buzzer plays an SOS pattern, and the cart's controller starts its emergency braking sequence and brings the cart to a halt.",
            ],
            images: [],
          },
          {
            heading: "Prototyping on the breadboard",
            text: [
              "Before designing any board we tested every function on its own on a breadboard: the button, the buzzer, the ESP8266 as Wi-Fi server and as Wi-Fi client, and a sleep mode to save battery. Once each piece worked, we combined them into the transmitter and receiver firmware.",
              "We also got a LoRa module running on the breadboard, because LoRa reaches much further than Wi-Fi. Putting LoRa into the final design turned out to need much deeper RF knowledge and programming than the semester allowed, so the final firmware uses Wi-Fi. The LoRa transceiver is still on the board, ready for a next version.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/breadboard-prototype.jpg", caption: "Transmitter and receiver prototyped on breadboards" },
            ],
          },
          {
            heading: "Schematic and PCB design",
            text: [
              "I drew the schematic and laid out the PCB in EAGLE. Next to the ESP8266-12F, the board has a CP2102N USB-to-UART chip so it can be programmed over micro-USB, an SPX1117 regulator for the 3.3 V supply, TVS diodes to protect the USB lines, and a Semtech SX1268 LoRa transceiver with its RF matching network and an SMA antenna connector.",
              "Many of the parts were not in EAGLE's standard libraries, so we imported footprints from the Component Search Engine and built a small library for the project.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/schematic.jpg", caption: "Final schematic", wide: true },
              { src: "assets/projects/wireless-e-stop/pcb-layout.jpg", caption: "Final PCB layout", wide: true },
            ],
          },
          {
            heading: "Building the boards",
            text: [
              "We assembled the boards ourselves in the university's electronics lab. For the tiny SMD parts, we laid a stencil over the board and spread solder paste through it, placed every component with a pick-and-place machine, and baked the board in a reflow oven so the paste melted and fixed the parts in place. Afterwards we checked every connection with a multimeter.",
              "I soldered the larger through-hole parts by hand: the battery holders, button, buzzer, LEDs and pin headers.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/solder-paste-stencil.jpg", caption: "Stencil for applying solder paste" },
              { src: "assets/projects/wireless-e-stop/pick-and-place.jpg", caption: "Placing the SMD components" },
              { src: "assets/projects/wireless-e-stop/reflow-oven.jpg", caption: "The reflow oven" },
              { src: "assets/projects/wireless-e-stop/reflow-baking.jpg", caption: "The board baking in the oven" },
              { src: "assets/projects/wireless-e-stop/tht-soldering.jpg", caption: "Soldering the through-hole parts by hand" },
            ],
          },
          {
            heading: "When it did not work",
            text: [
              "The boards powered up over USB, but the laptop did not detect the USB port, even with the correct CP2102N driver installed, so we could not flash the firmware through the on-board USB chip.",
              "As a workaround we used an external FTDI FT232RL module. It programmed a bare ESP8266 without problems, but once the chip was soldered onto our PCB the FTDI module could no longer program it either. The programming path is the first thing I would design differently in a next version.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/ftdi-module.jpg", caption: "The FTDI FT232RL module used as a workaround" },
            ],
          },
          {
            heading: "The result",
            text: [
              "In the end we had two working boards: press the button on the transmitter, and the receiver switches to red and sounds the alarm.",
              "I measured the power consumption at about 200 mA from a 6 V supply, roughly 1.2 W, which gives a battery life of around 6 hours. That is enough for a test day, but not for a device that should always be ready. The next steps are therefore a sleep mode to save battery, LoRa for longer range and a more reliable link, one transmitter that can stop several carts or robots at once, and an ergonomic housing that shows battery level and signal strength.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/demo-running.gif", caption: "Demo: pressing the button switches the receiver to emergency mode" },
              { src: "assets/projects/wireless-e-stop/final-boards.jpg", caption: "The finished transmitter and receiver" },
              { src: "assets/projects/wireless-e-stop/power-measurement.jpg", caption: "Measuring the current draw" },
            ],
          },
        ],
      },
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
      images: [],
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
