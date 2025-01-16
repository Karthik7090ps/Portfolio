import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "R&D"
  },
  {
    title: "Embedded systems design"
  },
  {
    title: "Fast prototyping",
  },
  {
    title: "PCB",
  },
  {
    title: "3d Printing & Modelling",
  },
];

const technologies = [
  {
    name: "EmbeddedSystems Design"
  },
  {
    name: "IoTDevice Development & Applications"
  },
  {
    name: "PCBDesign&Fabrication"
  },
  {
    name: "Sensor Integration & Calibration"
  },
  {
    name: "Firmware Development"
  },
  {
    name: "Hardware Prototyping"
  },
  {
    name: "R&DandInnovation"
  },
  {
    name: "Problem-Solving & Solution Tailoring"
  },
  {
    name: "Scalable System Design"
  },
  {
    name: "Cross-Domain Adaptability"
  }
];

const experiences = [
  {
    title: "NetSpark 300– Connect Smart, Live Better",
    company_name: "Self-employed",
    company_website: "#",
    icon: "", // Add icon if available
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Introducing NetSpark 300, the ultimate pocket-sized WiFi router designed for seamless connectivity and IoT control—all at an unbelievably affordable price! Built with cutting-edge ESP8266 technology, it offers:",
      "Extended WiFi Range and Outdoor Mesh Networks.",
      "Secure IoT Connections with MQTT support.",
      "Traffic Monitoring and Bit Rate Control.",
      "Smart IoT Device Management.",
      "Guest WiFi Access for added flexibility.",
      "Engineered for performance, affordability, and portability, NetSpark 300 redefines connectivity—ready to hit the market and set new standards in network solutions!",
    ],
  },
  {
    title: "Micro Drone– Precision in Flight, Power in Performance",
    company_name: "Self-employed",
    company_website: "#",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "A cutting-edge 160-gram micro drone engineered for hover stability and autonomous navigation with intelligent control systems. Equipped with advanced algorithms, real-time data integration, and safety features, it delivers unmatched reliability and efficiency across diverse environments.",
      "From surveillance and emergency response to logistics and agriculture, this drone redefines possibilities—pushing boundaries in aerospace innovation and real-world applications.",
    ],
  },
  {
    title: "EN-GPT–Revolutionizing Electronics Learning",
    company_name: "Nickelfox Technologies",
    company_website: "https://www.nickelfox.com/",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Breaking barriers in education, EN-GPT transforms how students grasp complex electronics concepts. With step-by-step solutions, interactive graphs, and real-life applications, it turns learning into a visual and intuitive experience. Future upgrades include simulations, AI chatbots, and expansion across all engineering domains—empowering students to learn smarter, not harder!",
    ],
  },
];


const projects = [
  {
    name: "Automated Student Result Analysis Tool– Smarter Insights, Faster Decisions",
    description:
      " A powerful web-scraping automation tool designed for seamless student result extraction and performance analysis. Featuring Selenium-based navigation, Tesseract OCR for captcha solving, and dynamic radar charts, it delivers visual insights into SGPA trends. With CSV exports and PDF reporting, it streamlines data analysis—transforming raw results into actionable intelligence for smarter academic planning and grouping.",
    tags: [
      {
        name: "Web Scraping",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "green-text-gradient",
      },
      {
        name: "OCR",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
  },
  {
    name: "IoT-Automation Alexa GoogleHome",
    description:
      " IoT Automation + Voice Control: Powered by Sinric Pro, this project enables seamless smart device control. Compatible with Google Home and Alexa, it responds to voice commands, adding efficiency and ease to home automation. A connected home made simple.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "Voice Control",
        color: "green-text-gradient",
      },
      {
        name: "Sinric Pro",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "HouseFire Safety System",
    description:
      "Wireless Home Safety System: Arduino-powered setup utilizing gas and flame sensors, with RGB LED alerts and buzzer notifications. Enhances safety by detecting gas leaks and flames, triggering appropriate responses.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "Safety System",
        color: "green-text-gradient",
      },
      {
        name: "Sensors",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "ROS2ArucoMarker Detection and TF Publisher",
    description:
      "This Python code enables the detection of Aruco markers in ROS 2, computes their 3D positions, and publishes the resulting transformations as TF data. Aruco markers are commonly used in robotics and computer vision for pose estimation and tracking.",
    tags: [
      {
        name: "ROS2",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Zomato-Restaurant Finder App",
    description:
      "This web application built with Flask allows users to search for restaurants, filter them by various criteria, and discover new dining options based on location and cuisine preferences.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Restaurant Finder",
        color: "green-text-gradient",
      },
      {
        name: "Web App",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Face-Fingerprint Attendance System",
    description:
      "Face & Fingerprint Attendance System: Modernizing attendance with biometric recognition. Captures face and fingerprint data, logs into Excel, and sends alerts via GSM for real-time tracking and efficient classroom management.",
    tags: [
      {
        name: "Biometrics",
        color: "blue-text-gradient",
      },
      {
        name: "GSM",
        color: "green-text-gradient",
      },
      {
        name: "Attendance System",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
  {
    name: "DIYFMRadioReceiver Circuit: Clear Local FM Signals on a Budget!",
    description:
      "Built a FM radio receiver with a Colpitts oscillator and experienced the magic of frequency modulation! Powered by the LM386 audio amplifier and BF494/BF495 transistors, this project delivers crystal-clear sound at an incredible price.",
    tags: [
      {
        name: "FM Radio",
        color: "blue-text-gradient",
      },
      {
        name: "Colpitts Oscillator",
        color: "green-text-gradient",
      },
      {
        name: "Electronics",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
  {
    name: "Sandal tree protector",
    description:
      "Protect your trees with cutting-edge technology! Our Sandal Tree Protector uses plant conductivity to detect tree cutting and trigger instant alerts. Powered by solar energy and connected via IoT and GSM, it keeps landowners informed in real-time. Reliable, smart, and eco-friendly!",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "Solar Energy",
        color: "green-text-gradient",
      },
      {
        name: "Environmental Tech",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
];


const personalInfo = {
  name: "Karthik",
  fullName: "Karthik Reddy",
  email: "KarthikReddy@gmail.com",
  role: "Free Lancing",
  about: ` I’m Karthik P S, an Electronics and Communication Engineer specializing in embedded
 systems, IoT, PCB design, firmware development, and sensor integration. With experience at
 Bosch and Alpha Tech Academy, I excel in designing and delivering high-performance solutions,
 from concept to implementation. Passionate about R&D, I create scalable and innovative
 systems that address real-world challenges. My focus is on building reliable, future-ready
 technologies that drive efficiency and performance. Let’s collaborate to transform your ideas into
 cutting-edge solutions!`,
  projectsIntro: ``,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/karthik7090ps/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: " https://github.com/Karthik7090ps",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
