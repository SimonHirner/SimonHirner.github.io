// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#0A122A, #0B2161, #0431B4",
  firstName: "Simon",
  middleName: "",
  lastName: "Hirner",
  message: " Software Developer | Information Systems and Management Undergraduate | IT Management Assistant ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/simon-hirner/",
    },
    {
      image: "fa-github",
      url: "https://github.com/SimonHirner",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "",
  imageSize: 375,
  message:
    "My name is Simon Hirner. I'm currently studying Information Systems and Management at Munich University of Applied Sciences. On this website you can find my latest programming projects.",
  //resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "SimonHirner", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: [],
  repoList:
    [
      {
        "name": "Learning management system",
        "type": "Project at Munich University of Applied Sciences",
        "html_url": "https://github.com/SimonHirner/agenda20",
        "description": [
          "Web application for managing courses and tasks",
          "Eight weeks of development",
          "Tech stack: Java (Spring Boot), HTML, CSS",
        ],
        "languages_url": "https://api.github.com/repos/SimonHirner/agenda20/languages",
      },
      {
        "name": "Native chat application",
        "type": "Project at Munich University of Applied Sciences",
        "html_url": "https://github.com/SimonHirner/chat-app",
        "description": [
          "Native java application with client–server model",
          "Tech stack: Java (JavaFX)",
        ],
        "languages_url": "https://api.github.com/repos/SimonHirner/chat-app/languages",
      },
      {
        "name": "Decentralized application for trading intangible assets",
        "type": "Project at Munich University of Applied Sciences",
        "html_url": "https://github.com/SimonHirner/bazinga-dapp",
        "description": [
          "Blockchain project with smart contracts and React frontend",
          "Three weeks of development",
          "Tech stack: JavaScript (React), Solidity, Ethereum",
        ],
        "languages_url": "https://api.github.com/repos/SimonHirner/bazinga-dapp/languages",
      },
      {
        "name": "CI/CD pipeline with Kubernetes",
        "type": "Project Munich University of Applied Sciences",
        "html_url": "https://github.com/SimonHirner/kubernetes-jenkins-simplist",
        "description": [
          "CI/CD pipeline for deploying a web application on Kubernetes",
          "Tech stack: Java (Spring Boot), JavaScript (Vue.js), MongoDB, Docker, Kubernetes (Minikube)",
        ],
      },
      {
        "name": "Application for distributed test execution with Kubernetes",
        "type": "Project at WWK Lebensversicherung a. G.",
        "description": [
          "Web application for execution and monitoring of domain specific test cases on Kubernetes cluster",
          "Tech stack: Java (Spring Boot, Kubernetes Client API), JavaScript (Vue.js), PostgreSQL, Docker, Kubernetes (Rancher)",
        ],
      },
      {
        "name": "Design and deployment of microservices with Kubernetes using the example of a CRM-System",
        "type": "Bachelor thesis at Munich University of Applied Sciences",
        "html_url": "https://github.com/SimonHirner/bachelor-thesis",
        "description": [
          "Simplified CRM-System with microservice architecture",
          "Deployment, service discovery, load balancing and horizontal scaling with Kubernetes",
          "Three months of development",
          "Tech stack: Java (Spring Boot), JavaScript (React), MongoDB, Docker, Kubernetes (minikube)",
        ],
      },
    ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: "",
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: "",
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  email: "fvzba.uveare99@tznvy.pbz",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Developer (Internship)',// Here Add Company Name
      url: 'https://www.wwk.de/',
      companylogo: require('../assets/img/wwk.png'),
      date: 'Nov 2020 – Present',
    },
    {
      role: 'Information Systems and Management (Bachelor of Science)',
      url: 'https://www.hm.edu/',
      companylogo: require('../assets/img/hm.png'),
      date: 'Oct 2018 – Present',
    },
    {
      role: 'IT Systems Administrator (Internship)',
      url: 'https://www.wittur.com/',
      companylogo: require('../assets/img/wittur.png'),
      date: 'Feb 2019 – Feb 2020',
    },
    {
      role: 'IT Management Assistant (Apprenticeship)',
      url: 'https://www.bmwgroup.com/',
      companylogo: require('../assets/img/bmw.png'),
      date: 'Sep 2015 – Jan 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
