// // It will contain all the services which I provide, this data will be shown on about page.

import { IProject, IService, ISkill, ICertificates } from "./type";
import { CgWebsite } from "react-icons/cg";
import {
  FcReadingEbook,
  FcBarChart,
  FcBusinessman,
  FcSmartphoneTablet,
} from "react-icons/fc";
import { MdPersonSearch } from "react-icons/md";
import {
  SiGooglecloud,
  SiUdemy,
  SiCoursera,
  SiCodeforces,
  SiUbuntu,
  SiInfosys,
  SiCodechef,
  SiAlienware,
} from "react-icons/si";

import { RiComputerLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";
import im from "./public/images/DrumKit.jpg";

// import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
// import {  IService } from "./type";

// import { BsCircleFill } from "react-icons/bs";
// import { FaServer } from "react-icons/fa";
//
// export const services:IService[]=[

//     {
//     Icon: RiComputerLine,
//     title:"Frontend Developer",
//     about:"I can build Beautiful and simple SPA using <b>HTML</b>, <b>CSS</b>, <b>JS</b> and <b>React.js</b>",
// },
// {

//     Icon: MdDeveloperMode,
//     title:"Competitive Coder",
//     about:"I am a regular <b>Competitive Coder</b> on Platforms like <b>Codechef</b>, <b>Pepcoding and LeetCode</b>, Currently 3 on Codechef.",

// },
// {

//     Icon: SiGooglecloud,
//     title:"Google Cloud Platform Experience",
//     about:"Learned and Experienced the Fundamental Essential services related to Google Cloud Platform. Learnt about various Terminologies, Tools and Duties in a Cloud Environment.",

// }
// ];

//------------------------------------------------------------------------------------------------------------------------------------------------

export const services: IService[] = [
  {
    Icon: FcBusinessman,
    title: "Looking for Opportunities",
    about:
      "<b>Actively applying</b> on all <b>Job</b> Portals like Career Pages, LinkedIn, etc. Also participating in Hiring Challenges and preparing for upcoming <b>interviews</b> as well.",
  },
  {
    Icon: FcSmartphoneTablet,
    title: "Web Development",
    about:
      "Currently learning MERN Stack technology and developing some projects in it Using<b> React.js, Next.js, Node.js, etc.</b>",
  },
  {
    Icon: FcBarChart,
    title: "Practicing DSA problems",
    about:
      "Solving DSA problems consistently on Platforms like <b>Leetcode</b>, <b>GeeksforGeeks</b>, <b>Codestudio</b>. Solved around 300+ Problems on Leetcode and GFG alone. Participating in Coding Contests too.",
  },
  {
    Icon: FcReadingEbook,
    title: "Strenghtening CS Fundamentals",
    about:
      "Revising CS concepts like <b>Object Oriented Programming, Database Management, Operating System, etc</b>. Also Improving my <b>soft skills,  and communication skills</b>.",
  },
];

//------------------------------------------------------------------------------------------------------------------------------------------------

export const skills: ISkill[] = [
  {
    name: "C++",
    level: "80%",
    Icon: BsCircleFill,
  },
];
export const languages: ISkill[] = [
  {
    name: "C++ and STL",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Java and Python",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML, CSS, Bootstrap, Tailwind",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript and TypeScript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "React.js and Next.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  // {
  //   name: "MongoDB and MySQL",
  //   level: "50%",
  //   Icon: BsCircleFill,
  // },
  // {
  //   name: "Node.js and Express",
  //   level: "40%",
  //   Icon: BsCircleFill,
  // },
  // {
  //   name: "Google Cloud Platform and Qwiklabs",
  //   level: "40%",
  //   Icon: BsCircleFill,
  // },
  // {
  //   name: "jupyterNotebook",
  //   level: "35%",
  //   Icon: BsCircleFill,
  // },
  // {
  //   name: "openCV and haarCascade",
  //   level: "30%",
  //   Icon: BsCircleFill,
  // },
  // {
  //   name: "Python Flask and ML",
  //   level: "30%",
  //   Icon: BsCircleFill,
  // },
];

//------------------------------------------------------------------------------------------------------------------------------------------------



export const projects: IProject[] = [
  {
    id: 1,
    name: "J.B. Defence Electrical",
    description:
      "Designed and developed an online E-commerce website with features such as buy, add to cart, profile login, Registration. Multiple login access, scalable, attractive Ui with complete E-commerce website functions.",
    image_path: "/images/JB_Motors.png",
    deployed_url: "",
    github_url:  "",
    category: ["MERN"],
    key_techs: ["React", "Medusa-Js", "Tailwind", "Next-Js", "Node-js","July 2023"],
  },
  {
    id: 2,
    name: "Mera - India",
    description:
      "Developed Mera India website highlighting popular historical places with state/territory histories, promoting India’s Culture heritage Designed user-friendly platform with family and couple packages, facilitating trip planning and enhancing traveler experience.",
    image_path: "/images/Mera_India.png",
    //  image_path:"./public/images/DrumKit.jpg",
    deployed_url: "",
    github_url:"",
    category: ["MERN"],
    key_techs: [
      "HTML",
      "CSS",
      "Javascript",
      "June 2022"
    ],
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "This Website is Created using Next.js, tailwind and TypeScript and a lot of Efforts in its UI and Responsiveness. ",
    image_path: "/images/Portfolio.png",
    deployed_url: "",
    github_url: "",
    category: ["React"],
    key_techs: ["React", "Next.js", "Tailwind", "Typescript","September 2023"],
  },
  {
    id: 4,
    name: "Restro",
    description:
      "Designed and developed an online food ordering platform with features such as bill checking and multiple admin access. Built a user friendly and efficient system for ordering food and managing orders, enhancing the customer’s experience and enabling streamlined restaurant operations.",
    image_path: "/images/Tasty_food.png",
    deployed_url: "",
    github_url:
      "",
    category: ["MERN"],
    key_techs: ["HTML5", "CSS3", "Javascript", "Apache","SQL","PHP","October 2022"],
  },
  {
    id: 5,
    name: "Calculator",
    description:
      "A React Based App for Calculation. We Can Calulate our Text as we want, like Addition, subtraction, Multiplication ,etc.",
    image_path: "/images/calci.png",
    //  image_path:"./public/images/DrumKit.jpg",
    deployed_url:
      "",
    github_url: "",
    category: ["React"],
    key_techs: ["HTML", "CSS","July 2021"],
  },
  {
    id: 6,
    name: "KUMO - Real-Time flight tracking application",
    description:
      "Kumo consists of several sub-topics, there are: Getting data, importing required libraries, loading basemap, plotting aircraft's position and make a real-time flight tracking application. Its key attributes are highly sophisticated libraries, flight dataframes, and flight source paths. It can be viewed as a method for the ordinary individual or aviation enthusiast to track flights in the air in real-time. Specifically, it is the use of sophisticated open sky network APIs and python libraries to locate aricrafts with their flight paths in real-time. It uses machine learning libraries and open sky APIs to process and display details of flights.",
    image_path: "/images/KUMO Project.png",
    deployed_url: "",
    github_url: "",
    category: ["React"],
    key_techs: ["Python", "OPENAPI", "OPENSKYAPI.org","April 2022"],
  },
  // {
  //   id: 7,
  //   name: "The Simon Game",
  //   description:
  //     "A simple HTML, CSS and JS based Console Game in which one must remember the older patterns to reach next levels",
  //   image_path: "/images/Simon.JPG",
  //   deployed_url: "https://nikhilsharma-github.github.io/Simon_Game/",
  //   github_url: "https://github.com/nikhilsharma-github/Simon_Game",
  //   category: ["Basic"],
  //   key_techs: ["HTML, CSS, JS","July 2021"],
  // },
  // {
  //   id: 8,
  //   name: "Drum Kit",
  //   description:
  //     "A simple HTML, CSS and JS based Music Generating Console Game in which Various Instruments gets played when Clicked",
  //   image_path: "/images/DrumKit.JPG",
  //   deployed_url: "https://nikhilsharma-github.github.io/DrumKit/",
  //   github_url: "https://github.com/nikhilsharma-github/DrumKit",
  //   category: ["Basic"],
  //   key_techs: ["HTML, CSS, JS","July 2021"],
  // },
  // {
  //   id: 9,
  //   name: "TinDog",
  //   description:
  //     "Tinder for Dogs, Simple Website Created using HTML and CSS only.",
  //   image_path: "/images/TinDog.JPG",
  //   deployed_url: "https://nikhilsharma-github.github.io/TinDog/",
  //   github_url: "https://github.com/nikhilsharma-github/TinDog",
  //   category: ["Basic"],
  //   key_techs: ["HTML", "CSS", "Bootstrap","July 2021"],
  // },
];



//------------------------------------------------------------------------------------------------------------------------------------------------

export const certificates: ICertificates[] = [
  {
    name: "Software Developer Intern at Byteoski Developers",
    description:
      "• J.B. Defence Electrical is an e-commerce website that is built using Medusa-js, Typescript, Node.js, and Tailwind. Customers and farmers can purchase water supply pumps according to their demands, such as bore-well pipes, submersible pipes, submersible motors, domestic motors, etc.                                                                                                                                       • Proficient in utilizing advanced tools and technologies such as Medusa JS, Tailwind, Next.js, and React to create innovative and  user-friendly solutions. Extractopus.com a web application is developed using Next.Js and Typescript which is a extraction      website i.e. used to extract the data from multiple websites.                                                                                            • Demonstrated track record of successfully delivering projects in a full-stack web development capacity. Troubleshooted and debugged issues to ensure a seamless user experience",
    type: "Certificate",
    Icon: SiAlienware,
    date: "August 2023",
    url: "https://drive.google.com/file/d/1sh_n8rFxsiReIL06OwGYyMniVrTqvA8d/view?usp=drive_link",
  },
  {
    name: "Cyber Security Summer Intern at Gurugram Cyber Police Headquarters",
    description:
      "• Summer Intern in collaboration with Safe House Technologies and Mr. Rakshit Tandon Sir. • extracted emerging information, collaborated with other interns to share it, helped with security measures, researched upcoming cyber-threats, worked on actual cyber-crime situations, and came up with novel approaches to solve problems.",
    type: "Certificate",
    Icon: SiAlienware,
    date: "July 2022",
    url: "https://drive.google.com/file/d/1mK_XGPhU3n_LlljRibbRu2oz8pS1nnA-/view?usp=drive_link",
  },
  {
    name: "Complete Data Structures and Algorithms Master's Course [Supreme Batch] From Code-Help",
    description:
      "Learnt about multiple data structres and how they work like arrays, trees, graphs, Recursion and backtracking etc.",
    type: "Certificate",
    Icon: SiCoursera,
    date: "Sept 2023",
    url: "https://learn.thecodehelp.in/share-certificate?serialno=CMWUFZZP",
  },
  {
    name: "Infosys Angular Course",
    description:
      "Infosys Springboard's Angular course in which I have learnt about the Angular Technology.",
    type: "Certificate",
    Icon: SiInfosys,
    date: "Oct 2022",
    url: "https://drive.google.com/file/d/15-6PHoq46KGRJTPawYUZoQEi7hwzq9gh/view?usp=drive_link",
  },
  {
    name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    description:
      "Learnt about multiple frameworks of Bootstrap with Node.js and J Query .",
    type: "Certificate",
    Icon: SiCoursera,
    date: "Nov 2020",
    url: "https://coursera.org/share/19558871e5516b0d3c9d4e7028b8ca10",
  },
  {
    name: "Infosys Typescript Course",
    description:
      "Infosys Springboard's Typescript course in which I have learnt about the Typescript essentials.",
    type: "Certificate",
    Icon: SiInfosys,
    date: "Oct 2022",
    url: "https://drive.google.com/file/d/1QfzXVxuKQzXojBRjT3Cvguh6At17RFkv/view?usp=drive_link",
  },
  {
    name: "HTML, CSS, and Javascript for Web Developers",
    description:
      "Learnt about HTML CSS and javascript with css frameworks.",
    type: "Certificate",
    Icon: SiCoursera,
    date: "April 2022",
    url: "https://coursera.org/share/9dee92d89da786fd8be7c30f2d6c497d",
  },
  {
    name: "Appreciation Certification",
    description:
      "This certifies that Gursewak Singh has actively contributed for the Codechef Learning Program held at Chandigarh University as a Volunteer.",
    type: "Certificate",
    Icon: SiCodechef,
    date: "Nov 2021",
    url: "https://drive.google.com/file/d/1PEaZuKmdLbPbuWKnFm_W1iMDSiatVF4K/view?usp=drive_link",
  },
  {
    name: "Django for Everybody",
    description:
      "4 Course Specialization by Coursera IBM where I learnt about installation, Deployment of a Django applications build HTML web pages styled by CSS and many more.",
    type: "Certificate",
    Icon: SiCoursera,
    date: "March 2023",
    url: "https://coursera.org/share/24f40e1abd7b6046b5cf9948e085d065",
  },
  {
    name: "Certificate of Participation",
    description:
      "Participant as a Google Cloud Community Days India.",
    type: "Certificate",
    Icon: SiGooglecloud,
    date: "Jan 2021",
    url: "https://drive.google.com/file/d/1VCUOTFAfS37CCDT_JwZjMitUY5G356ee/view?usp=sharing",
  },
  {
    name: "Web Development Training",
    description:
      "An 8 week online training on Web Development. The Training considered of HTML, CSS, Bootstrap, DBMS, PHP, JS, React, and final Project modules.",
    type: "Certificate",
    Icon: SiCoursera,
    date: "July 2022",
    url: "https://trainings.internshala.com/s/v/1661420/812bde37",
  },

  



  // {
  //   name: "Architecting with Google Compute Engine",
  //   description:
  //     "5 Course Specialisation by Coursera, learned to  deploy solution elements, including infrastructure components such as networks, systems and applications services using Google Cloud Platform, with a focus on Compute Engine.",
  //   type: "Certificate",
  //   Icon: SiCoursera,
  //   date: "Mar 21",
  //   url: "https://www.coursera.org/account/accomplishments/specialization/certificate/4AXVLP4P5B78",
  // },
  // {
  //   name: "Crash Course on C++ STL",
  //   description: "Learned and Implemented useful STL of C++.",
  //   type: "cert",
  //   Icon: SiUdemy,
  //   date: "Mar 21",
  //   url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-fbcd961a-2e74-4845-bc88-630e4fea1a1f.pdf",
  // },
  // {
  //   name: "Preparing for the Google Cloud ACE Exam",
  //   description:
  //     "Covered Important Aspects required for Clearing this ACE exam.",
  //   type: "cert",
  //   Icon: SiCoursera,
  //   date: "Mar 21",
  //   url: "https://www.coursera.org/account/accomplishments/certificate/CC9EFMG2CXBU",
  // },
  // {
  //   name: "Reliable Google Cloud Infrastructure:Design and Process",
  //   description:
  //     "Learned about important Processes and Design Principles which are important for a Cloud Infrastructure",
  //   type: "cert",
  //   Icon: SiCoursera,
  //   date: "Mar 21",
  //   url: "https://www.coursera.org/account/accomplishments/certificate/P9DJ94A4BXS6",
  // },
  // {
  //   name: "Elastic Google Cloud Infrastructure: Scaling and Automation",
  //   description:
  //     "As per the Users requirements, learned about how to scale our Cloud Servers under excessive traffic using Automation",
  //   type: "cert",
  //   Icon: SiCoursera,
  //   date: "Feb 21",
  //   url: "https://www.coursera.org/account/accomplishments/certificate/H9MWTZ8HGC3W",
  // },
  // {
  //   name: "Essential Google Cloud Infrastructure:Core Services",
  //   description:
  //     "Learned about How to use the Core Services of Compute Engine.",
  //   type: "cert",
  //   Icon: SiCoursera,
  //   date: "Feb 21",
  //   url: "https://www.coursera.org/account/accomplishments/certificate/X7MYXY5YGQ37",
  // },
  // {
  //   name: "Essential Google Cloud Infrastructure:Foundation",
  //   description:
  //     "Covered about the Basic introduction of Compute Engine Services, available in our Google Cloud Console",
  //   type: "cert",

  //   Icon: SiCoursera,
  //   date: "Feb 21",
  //   url: "https://www.coursera.org/account/accomplishments/certificate/ENDZ4JK7YKGF",
  // },
  // {
  //   name: "Google Cloud Platform Fundamentals:Core Infrastructure",
  //   description: "Gives a brief Introduction about the Google Cloud Console.",
  //   type: "cert",
  //   Icon: SiCoursera,
  //   date: "Jan 21",
  //   url: "https://www.coursera.org/account/accomplishments/certificate/XVGQA5HRF6P6",
  // },
  // {
  //   name: "30 Days of Google Cloud",
  //   description:
  //     "Learned and Experienced the Fundamental Essential services related   to Google Cloud Platform. Completed Both Cloud Engineer and ML AI track. Earned All 12 Badges and completed 72 Labs of Qwiklabs.",
  //   type: "cert",
  //   Icon: SiGooglecloud,
  //   date: "Nov 20",
  //   url: "https://www.cloudskillsboost.google/public_profiles/a7a5df3d-25eb-46f4-90ac-c62238cfc9e1",
  // },
];
