/* ============================================================================
   CONTENT.DE.JS  —  the German text of the website.
   ============================================================================

   This is the German copy of js/content.js. It has exactly the same layout,
   so everything explained at the top of content.js works here too.

   When you change something in content.js (a new project, a new picture,
   a new date), make the same change here, so both languages stay in step.

   Pictures, links and the CV are the same files as in the English version.
   ========================================================================= */

const CONTENT_DE = {

  /* --------------------------------------------------------------------------
     PROFIL  —  der obere Teil der Startseite
     ----------------------------------------------------------------------- */
  profile: {
    name: "Quan Tran",
    initials: "QT",
    role: "Mechatronik-Ingenieur",
    location: "München, Deutschland",

    headline:
      "Ich modelliere, baue und programmiere technische Systeme: von Batteriesimulationen über Embedded-Hardware bis zu KI-Agenten.",

    intro:
      "M.Sc.-Student in Mechatronics, Robotics and Biomechanical Engineering an der Technischen Universität München, mit Praktikumserfahrung in der Simulation von Energiespeichern bei PowerCo.",

    availability: "Offen für Werkstudenten- und Praktikumsstellen",

    email: "quan.lm.tran@gmail.com",
    emailOpensIn: "gmail",
    photo: "assets/profile.jpg",
    cv: "assets/CV_Quan_Tran.pdf",

    links: [
      { label: "GitHub",   url: "https://github.com/quantranle" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/quan-lm-tran/" },
    ],

    facts: [
      { label: "Wohnort",   value: "München, Deutschland" },
      { label: "Studium",   value: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering, TUM" },
      { label: "Fokus",     value: "Modellierung & Simulation · Embedded Systems · Angewandte KI" },
      { label: "Gesucht",   value: "Werkstudentenstelle oder Praktikum in der Robotik, München" },
      { label: "Verfügbar", value: "Ab sofort · Arbeitserlaubnis für Deutschland" },
      { label: "Sprachen",  value: "Englisch C1 · Deutsch B1 · Vietnamesisch (Muttersprache)" },
    ],
  },

  /* --------------------------------------------------------------------------
     ÜBER MICH
     ----------------------------------------------------------------------- */
  about: {
    paragraphs: [
      "Ich bin Mechatronik-Ingenieur in München. Ich habe einen B.Sc. in Mechatronic Systems Engineering der Hochschule Rhein-Waal und studiere jetzt im M.Sc. Mechatronics, Robotics and Biomechanical Engineering an der Technischen Universität München.",
      "Am liebsten arbeite ich dort, wo Hardware auf Software trifft. Bei PowerCo habe ich elektrothermische Batteriemodelle für Energiespeichersysteme erstellt und validiert. In studentischen Projekten habe ich Platinen und Embedded-Firmware entwickelt, an Motorsteuerung und Navigation für einen Mars-Rover gearbeitet, ein Paper zu Computer Vision veröffentlicht und in einem 24-Stunden-Hackathon KI-Agenten gebaut.",
      "Neben der Technik habe ich auch unterrichtet: SolidWorks-Tutorien für Studierende und Programmierkurse für Kinder und Jugendliche.",
    ],
  },

  /* --------------------------------------------------------------------------
     AUSBILDUNG
     ----------------------------------------------------------------------- */
  education: [
    {
      degree: "M.Sc. Mechatronics, Robotics and Biomechanical Engineering",
      school: "Technische Universität München",
      location: "München, Deutschland",
      period: "Okt. 2026 – heute",
      notes: [],
    },
    {
      degree: "B.Sc. Mechatronic Systems Engineering",
      school: "Hochschule Rhein-Waal",
      location: "Kleve, Deutschland",
      period: "Sep. 2021 – Okt. 2026",
      notes: [
        "Bachelorarbeit: Implementierung eines Umgebungssensors für ein elektrisches Go-Kart",
        "Aktivitäten: Robotics Club, E-Go-Kart",
      ],
    },
    {
      degree: "Freshman Institute",
      school: "FH Aachen",
      location: "Geilenkirchen, Deutschland",
      period: "Sep. 2020 – Sep. 2021",
      notes: [],
    },
  ],

  /* --------------------------------------------------------------------------
     ERFAHRUNG
     ----------------------------------------------------------------------- */
  experience: [
    {
      role: "Praktikant, ESS-Modellierung und -Simulation",
      company: "PowerCo SE",
      location: "Braunschweig, Deutschland",
      period: "Apr. 2025 – Dez. 2025",
      points: [
        "Mehrstufige elektrothermische 1D-Modelle von LFP-Batterien in MATLAB/Simulink/Simscape entwickelt und validiert, um die Auslegung von Energiespeichersystemen (ESS) unter wechselnden Last- und Temperaturbedingungen zu bewerten.",
        "Lade-, Entlade- und thermisches Verhalten für BMS-relevante Szenarien simuliert, damit bereichsübergreifende Teams die Auswirkungen von Kühlstrategien und Betriebsgrenzen auf Systemebene beurteilen konnten.",
        "Zentrale ESS-Kennzahlen (Round-Trip-Wirkungsgrad, nutzbare Energie und Kapazität) ausgewertet und Simulationsabläufe und Ergebnisse für die Übergabe und Wiederverwendung der Modelle dokumentiert.",
      ],
      tags: ["MATLAB", "Simulink", "Simscape", "Batteriemodellierung", "Thermische Simulation"],
      images: [],
    },
    {
      role: "Studentische Hilfskraft, Technisches Zeichnen und Konstruktion",
      company: "Hochschule Rhein-Waal",
      location: "Kleve, Deutschland",
      period: "Apr. 2023 – Jul. 2023",
      points: [
        "SolidWorks-Tutorien für 30 Studierende gehalten; 90 % von ihnen haben die Abschlussprüfung bestanden.",
      ],
      tags: ["SolidWorks", "CAD", "Lehre"],
      images: [],
    },
    {
      role: "Lehrassistent, Programmieren",
      company: "ICANTECH",
      location: "Remote, Vietnam",
      period: "Aug. 2022 – Apr. 2023",
      points: [
        "Scratch, Minecraft Education und Python für mehr als 70 Kinder und Jugendliche unterrichtet.",
      ],
      tags: ["Python", "Scratch", "Lehre"],
      images: [],
    },
  ],

  /* --------------------------------------------------------------------------
     PROJEKTE
     A project with a story page needs  slug: "..."  here, the same address
     as in the English version, so the page stays open when the visitor
     switches language.
     ----------------------------------------------------------------------- */
  projects: [
    {
      title: "Three Out of Forty",
      category: "KI & Software",
      featured: true,
      context: "SiviHack 2026 · 24-Stunden-KI-Hackathon · Frankfurt am Main",
      period: "Sep. 2026",
      summary:
        "KI-Agenten, die jede Woche öffentliche Bauausschreibungen in Deutschland prüfen und empfehlen, auf welche sich ein Unternehmen bewerben sollte, jeweils mit Begründung. Entwickelt im Sechserteam für die Sponsor-Challenge von Arctis AI.",
      points: [
        "Datenpipeline gebaut, die Bauausschreibungen (CPV 45) von TED und oeffentlichevergabe.de sammelt, angebotsrelevante Kriterien (Referenzen, Bauzeit, Vertragsstrafen, Sicherheiten) aus den Vergabeunterlagen extrahiert und in PostgreSQL speichert.",
        "LLM-basierte Eignungsanalyse mit LangGraph umgesetzt: Sie kombiniert Embedding-Retrieval und LLM-Reranking, gleicht jede Ausschreibung mit den Vorgaben des Unternehmens ab und liefert ein Ergebnis in Grün / Gelb / Rot.",
        "Mit KI-gestützter Entwicklung (FastAPI) einen klickbaren Prototyp erstellt und der Sponsor-Jury präsentiert.",
        "Der Hackathon wurde von der Vietnamese Student Association in Germany e. V. organisiert.",
      ],
      tags: ["LangGraph", "LLM", "Embeddings", "FastAPI", "PostgreSQL"],
      links: [
        { label: "GitHub", url: "https://github.com/quantranle/sivihack_hackathon_2026" },
      ],
      images: [],
    },
    {
      title: "Umgebungssensor für ein elektrisches Go-Kart",
      category: "Embedded & Hardware",
      featured: false,
      context: "Bachelorarbeit · Hochschule Rhein-Waal",
      period: "Mai 2026 – Aug. 2026",
      summary:
        "Ein nach vorne gerichteter LiDAR-Sensor, der in Echtzeit anzeigt, wie weit das nächste Objekt vor dem elektrischen Go-Kart der Hochschule entfernt ist. Er ist die Grundlage für Überwachung und künftige Sicherheitsfunktionen am Go-Kart.",
      points: [
        "Motivation: Bei einer angenommenen Höchstgeschwindigkeit von 50 km/h legt das Go-Kart etwa 14 m pro Sekunde zurück. Bei einer Reaktionszeit von 1 bis 2 Sekunden fährt es 14 bis 28 m, bevor überhaupt gebremst wird. Der Sensor muss also etwa 30 m weit sehen. Gängige Ultraschall- und Infrarotsensoren reichen nur wenige Meter.",
        "Sensorauswahl: Ultraschall, Infrarot, Radar, Einpunkt-LiDAR und scannendes LiDAR verglichen und den Einpunkt-LiDAR Benewake TF02-Pro gewählt (bis zu 40 m bei hellen Zielen, 100 Messungen pro Sekunde über UART).",
        "Elektronik und Firmware: Sensor an das Arduino CAN Board (ATmega2560) des Go-Karts angeschlossen und C++-Firmware geschrieben, die nur Datenpakete mit gültiger Prüfsumme annimmt und Entfernung und Signalstärke mit Zeitstempel per USB an einen Laptop sendet.",
        "Mechanische Halterung: zwei 120°-Halteblöcke in Tinkercad konstruiert und aus PLA 3D-gedruckt, sodass der Sensor unter dem schrägen vorderen Aluminiumprofil sitzt und geradeaus misst.",
        "Software: Python-App (pySerial, Matplotlib) mit Live-Anzeige der Messwerte, Live-Diagrammen von Entfernung und Signalstärke und CSV-Protokollierung jeder Messung.",
        "Ergebnisse: bei 15 Abständen von 10 cm bis 40 m getestet, alle Messwerte lagen innerhalb der Genauigkeit laut Datenblatt. Bei den geforderten 30 m zeigte das System 30,24 m an (24 cm Abweichung, ±30 cm erlaubt). Fahrtests sind der nächste Schritt, da die Batterie des Go-Karts während der Arbeit defekt war.",
      ],
      tags: ["LiDAR", "Arduino", "UART", "C++", "Python", "3D-Druck"],
      links: [],
      images: [
        { src: "assets/projects/go-cart-lidar/electric-go-cart.jpg", caption: "Das elektrische Go-Kart der Hochschule Rhein-Waal" },
      ],
    },
    {
      title: "Mouth Detector",
      category: "Forschung",
      featured: false,
      context: "Veröffentlichung · World Journal of Advanced Research and Reviews (WJARR)",
      period: "März 2024 – März 2025",
      summary:
        "Erkennung von Lippenbewegungen in Echtzeit, die LipNet und PyImageSearch kombiniert. Veröffentlicht im WJARR, mit mir als Corresponding Author.",
      points: [
        "Machine-Learning-Modelle in Python (OpenCV, PyImageSearch, TensorFlow) zur Echtzeit-Erkennung von Lippenbewegungen mit Methoden der Computer Vision umgesetzt.",
        "Eine Deep-Learning-Pipeline zur Munderkennung entwickelt und getestet.",
      ],
      tags: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
      links: [
        { label: "Veröffentlichung", url: "https://wjarr.com/content/mouth-detector-combination-between-lipnet-and-pyimagesearch" },
        { label: "GitHub", url: "https://github.com/quantranle/MouthDetector" },
      ],
      images: [
        { src: "assets/projects/mouth-detector/realtime-demo.gif", caption: "Echtzeit-Demo: Das Mundöffnungsverhältnis (MAR) wird live gemessen, und die App zeigt an, wenn der Mund offen ist" },
      ],
    },
    {
      title: "Kabelloser Not-Halt-Taster",
      slug: "wireless-emergency-stop-button",
      category: "Embedded & Hardware",
      featured: false,
      context: "Praktische Elektronik · Hochschule Rhein-Waal",
      period: "Okt. 2024 – Jan. 2025",
      summary:
        "Ein Not-Halt in der Hand für das elektrische Go-Kart der Hochschule, damit eine Aufsichtsperson das Go-Kart von außen stoppen kann. Zwei eigene ESP8266-Platinen, in EAGLE entworfen und im Labor der Hochschule von Hand bestückt.",
      points: [
        "Schaltplan und Platinenlayout in EAGLE erstellt.",
        "Löten, Bestückung und Tests durchgeführt, dazu eine Analyse von Batterielaufzeit und Stromverbrauch.",
        "Embedded-Software in C (Arduino IDE) für zuverlässige Funkkommunikation und die Verarbeitung des Notsignals umgesetzt.",
      ],
      tags: ["ESP8266", "WLAN", "LoRa", "Platinendesign", "EAGLE", "C"],
      links: [
        { label: "GitHub", url: "https://github.com/quantranle/WirelessEmergencyStopButton" },
      ],
      images: [],

      cover: { src: "assets/projects/wireless-e-stop/final-boards.jpg", caption: "Die beiden fertigen Platinen: Sender und Empfänger" },

      story: {
        facts: [
          { label: "Team",     value: "2 Studierende, mit Pham Duc Binh" },
          { label: "Dauer",    value: "Okt. 2024 – Jan. 2025" },
          { label: "Hardware", value: "ESP8266-12F, SX1268 LoRa, CP2102N USB-UART" },
          { label: "Tools",    value: "EAGLE, Arduino IDE, PlatformIO, Reflow-Ofen" },
        ],
        chapters: [
          {
            heading: "Warum wir ihn gebaut haben",
            text: [
              "Bei einem Studierendenfest an der Hochschule Rhein-Waal fuhren Studierende unter Aufsicht mit dem elektrischen Go-Kart der Fakultät über den Campus. Ein Fahrer geriet in Panik, verlor die Kontrolle über das Go-Kart und brachte die Menschen in der Nähe in Gefahr. Das Go-Kart hatte zwar einen Not-Halt-Taster an Bord, aber in diesem Moment der Panik drückte der Fahrer ihn nicht.",
              "Das war der Ausgangspunkt unseres Projekts im Kurs Praktische Elektronik: Ein Taster an Bord hilft nur, wenn die Person auf dem Sitz noch klar denken kann. Wir wollten der Aufsichtsperson neben der Strecke einen eigenen Taster geben, damit das Go-Kart auch von außen gestoppt werden kann.",
            ],
            images: [],
          },
          {
            heading: "So funktioniert es",
            text: [
              "Das System besteht aus zwei Platinen. Der Sender ist das Handgerät: ein mechanischer Taster, ein Summer, eine grüne und eine rote LED, versorgt über Batterien und einen 3,3-V-Regler. Der Empfänger sitzt auf dem Go-Kart und ist über einen digitalen Ein-/Ausgang mit der Steuerung des Go-Karts verbunden.",
              "Der Sender öffnet einen eigenen WLAN-Zugangspunkt, mit dem sich der Empfänger verbindet. Fünfmal pro Sekunde meldet der Sender den Zustand seines Tasters. Solange alles in Ordnung ist, leuchtet die grüne LED. Wird der Taster gedrückt, wechselt die Nachricht auf das Stoppsignal: Die rote LED leuchtet, der Summer spielt ein SOS-Muster, und die Steuerung des Go-Karts startet die Notbremsung und bringt es zum Stehen.",
            ],
            images: [],
          },
          {
            heading: "Prototyp auf dem Steckbrett",
            text: [
              "Bevor wir eine Platine entworfen haben, haben wir jede Funktion einzeln auf dem Steckbrett getestet: den Taster, den Summer, den ESP8266 als WLAN-Server und als WLAN-Client sowie einen Schlafmodus zum Batteriesparen. Als jedes Teil funktionierte, haben wir alles zur Firmware für Sender und Empfänger zusammengeführt.",
              "Auch ein LoRa-Modul haben wir auf dem Steckbrett zum Laufen gebracht, weil LoRa viel weiter reicht als WLAN. LoRa in das endgültige Design einzubauen hätte jedoch deutlich mehr HF-Wissen und Programmieraufwand erfordert, als das Semester zuließ. Deshalb nutzt die finale Firmware WLAN. Der LoRa-Transceiver ist aber auf der Platine und bereit für eine nächste Version.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/breadboard-prototype.jpg", caption: "Sender und Empfänger als Prototyp auf Steckbrettern" },
            ],
          },
          {
            heading: "Schaltplan und Platinenlayout",
            text: [
              "Den Schaltplan und das Platinenlayout habe ich in EAGLE erstellt. Neben dem ESP8266-12F hat die Platine einen CP2102N-USB-UART-Chip, damit sie über Micro-USB programmiert werden kann, einen SPX1117-Regler für die 3,3-V-Versorgung, TVS-Dioden zum Schutz der USB-Leitungen und einen Semtech-SX1268-LoRa-Transceiver mit HF-Anpassnetzwerk und SMA-Antennenanschluss.",
              "Viele Bauteile waren nicht in den Standardbibliotheken von EAGLE enthalten. Deshalb haben wir Footprints aus der Component Search Engine importiert und eine kleine Bibliothek für das Projekt angelegt.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/schematic.jpg", caption: "Finaler Schaltplan", wide: true },
              { src: "assets/projects/wireless-e-stop/pcb-layout.jpg", caption: "Finales Platinenlayout", wide: true },
            ],
          },
          {
            heading: "Bau der Platinen",
            text: [
              "Die Platinen haben wir selbst im Elektroniklabor der Hochschule bestückt. Für die winzigen SMD-Bauteile haben wir eine Schablone auf die Platine gelegt und Lotpaste hindurchgestrichen, jedes Bauteil mit einem Pick-and-Place-Automaten platziert und die Platine im Reflow-Ofen gebacken, sodass die Paste schmolz und die Bauteile fixierte. Danach haben wir jede Verbindung mit einem Multimeter geprüft.",
              "Die größeren THT-Bauteile habe ich von Hand gelötet: Batteriehalter, Taster, Summer, LEDs und Stiftleisten.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/solder-paste-stencil.jpg", caption: "Schablone zum Auftragen der Lotpaste" },
              { src: "assets/projects/wireless-e-stop/pick-and-place.jpg", caption: "Bestücken der SMD-Bauteile" },
              { src: "assets/projects/wireless-e-stop/reflow-oven.jpg", caption: "Der Reflow-Ofen" },
              { src: "assets/projects/wireless-e-stop/reflow-baking.jpg", caption: "Die Platine im Ofen" },
              { src: "assets/projects/wireless-e-stop/tht-soldering.jpg", caption: "Löten der THT-Bauteile von Hand" },
            ],
          },
          {
            heading: "Als es nicht funktionierte",
            text: [
              "Die Platinen ließen sich über USB mit Strom versorgen, aber der Laptop erkannte den USB-Anschluss nicht, auch nicht mit dem richtigen CP2102N-Treiber. Deshalb konnten wir die Firmware nicht über den USB-Chip auf der Platine aufspielen.",
              "Als Ausweg haben wir ein externes FTDI-FT232RL-Modul verwendet. Einen einzelnen ESP8266 programmierte es problemlos, aber sobald der Chip auf unsere Platine gelötet war, konnte auch das FTDI-Modul ihn nicht mehr programmieren. Den Programmierweg würde ich in einer nächsten Version als Erstes anders gestalten.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/ftdi-module.jpg", caption: "Das FTDI-FT232RL-Modul als Ausweg" },
            ],
          },
          {
            heading: "Das Ergebnis",
            text: [
              "Am Ende hatten wir zwei funktionierende Platinen: Drückt man den Taster am Sender, schaltet der Empfänger auf Rot und löst den Alarm aus.",
              "Die Stromaufnahme habe ich mit etwa 200 mA bei 6 V gemessen, also rund 1,2 W. Das ergibt eine Batterielaufzeit von etwa 6 Stunden. Das reicht für einen Testtag, aber nicht für ein Gerät, das immer bereit sein soll. Die nächsten Schritte sind daher ein Schlafmodus zum Batteriesparen, LoRa für mehr Reichweite und eine zuverlässigere Verbindung, ein Sender, der mehrere Go-Karts oder Roboter gleichzeitig stoppen kann, und ein ergonomisches Gehäuse mit Anzeige von Batteriestand und Signalstärke.",
            ],
            images: [
              { src: "assets/projects/wireless-e-stop/demo-running.gif", caption: "Demo: Ein Druck auf den Taster schaltet den Empfänger in den Notfallmodus" },
              { src: "assets/projects/wireless-e-stop/final-boards.jpg", caption: "Der fertige Sender und Empfänger" },
              { src: "assets/projects/wireless-e-stop/power-measurement.jpg", caption: "Messung der Stromaufnahme" },
            ],
          },
        ],
      },
    },
    {
      title: "Mars-Rover",
      category: "Robotik",
      featured: false,
      context: "Robotics Club · Hochschule Rhein-Waal",
      period: "Jun. 2022 – Aug. 2022",
      summary:
        "Embedded-Motorsteuerung und übergeordnete Navigation für den Mars-Rover des Robotics Clubs.",
      points: [
        "Embedded-Steuerfunktionen in C auf einem Arduino Due für die Motorsteuerung entwickelt.",
        "Einen Raspberry Pi 2 mit Python für übergeordnete Navigationsaufgaben eingesetzt.",
        "An Navigationsexperimenten mit Computer Vision mitgearbeitet und im Team mit GitLab/GitHub versioniert.",
      ],
      tags: ["Arduino Due", "Raspberry Pi", "C", "Python", "Computer Vision"],
      links: [],
      images: [],
    },
  ],

  /* --------------------------------------------------------------------------
     KENNTNISSE
     ----------------------------------------------------------------------- */
  skills: [
    {
      group: "Programmierung",
      items: ["Python", "NumPy", "Pandas", "SciPy", "scikit-learn", "OpenCV", "MATLAB", "Simulink", "Simscape", "C/C++", "Java"],
    },
    {
      group: "Embedded & Hardware",
      items: ["ESP32 / ESP8266", "Arduino", "Raspberry Pi", "Platinendesign", "EAGLE", "Altium", "LoRa"],
    },
    {
      group: "Tools & Frameworks",
      items: ["SolidWorks", "TensorFlow", "LangGraph", "FastAPI", "PostgreSQL", "Git (GitHub / GitLab)", "MS Office"],
    },
    {
      group: "Sprachen",
      items: ["Englisch (C1)", "Deutsch (B1)", "Vietnamesisch (Muttersprache)"],
    },
  ],

  /* --------------------------------------------------------------------------
     KONTAKT
     ----------------------------------------------------------------------- */
  contact: {
    title: "Kontakt aufnehmen",
    text: "Ich suche eine Werkstudentenstelle oder ein Praktikum in der Robotik in München und kann sofort anfangen. Am schnellsten erreichen Sie mich per E-Mail oder über LinkedIn.",
  },

  /* --------------------------------------------------------------------------
     KLEINE TEXTE  —  Beschriftungen von Buttons und Überschriften
     ----------------------------------------------------------------------- */
  ui: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      projects: "Projekte",
      skills: "Kenntnisse",
      contact: "Kontakt",
    },
    jumpMeta: {
      about: "Werdegang",
      skills: "Tools & Sprachen",
      contact: "Schreiben Sie mir",
    },
    role: "Stelle", roles: "Stellen",
    project: "Projekt", projects: "Projekte",

    home: "Start",
    skipLink: "Zum Inhalt springen",
    education: "Ausbildung",
    whatIDid: "Meine Aufgaben",
    readStory: "Ganze Geschichte lesen",
    allProjects: "Alle Projekte",
    filterAll: "Alle",
    email: "E-Mail",
    cv: "Lebenslauf",
    clickToEnlarge: "Zum Vergrößern klicken",
    picture: "Bild",
    quickFacts: "Kurzprofil",
    portraitOf: "Porträt von",
    pages: "Seiten",
    technologies: "Technologien",
    filterProjects: "Projekte nach Kategorie filtern",
    pagerLabel: "Vorherige und nächste Seite",
    backToProjects: "Zurück zu den Projekten",
    pictureViewer: "Bildansicht",
    previousPicture: "Vorheriges Bild",
    nextPicture: "Nächstes Bild",
    close: "Schließen",
    toLightTheme: "Zum hellen Design wechseln",
    toDarkTheme: "Zum dunklen Design wechseln",
    lightTheme: "Helles Design",
    darkTheme: "Dunkles Design",
    switchLanguage: "Read in English",
  },
};
