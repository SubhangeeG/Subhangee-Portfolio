// Skills Section Logos
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import jsLogo from "./assets/tech_logo/javascript.png";
import reactLogo from "./assets/tech_logo/react.png";
import pythonLogo from "./assets/tech_logo/python.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";

// Core CS Logos
import dsaLogo from "./assets/core_logo/dsa.png";
import oopsLogo from "./assets/core_logo/oops.png";
import osLogo from "./assets/core_logo/os.png";
import dbmsLogo from "./assets/core_logo/dbms.png";
import cnLogo from "./assets/core_logo/cn.png";
import cloudLogo from "./assets/core_logo/cloud.png";

// Technologies Logos
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import ciscoLogo from "./assets/tech_logo/cisco.png";
import figmaLogo from "./assets/tech_logo/figma.png";

// Interpersonal Skills Logos
import problemLogo from "./assets/softskills/problem.png";
import teamworkLogo from "./assets/softskills/teamwork.png";
import activeLogo from "./assets/softskills/active.png";

// company logo
import haeglLogo from "./assets/company_logo/haegl.png";

// university & school logo
import kVLogo from "./assets/company_logo/kV.png";
import KLELogo from "./assets/company_logo/KLE.png";

// projects logo
import objectDetectorLogo from "./assets/tech_logo/detection.png";
import irisLogo from "./assets/tech_logo/classification.png";

export const SkillsInfo = [
  {
    title: "Programming Languages",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
    ],
  },
  {
    title: "Core CS Subjects",
    skills: [
      { name: "DSA", logo: dsaLogo },
      { name: "OOPs", logo: oopsLogo },
      { name: "Operating System", logo: osLogo },
      { name: "DBMS", logo: dbmsLogo },
      { name: "Computer Networks", logo: cnLogo },
      { name: "Cloud Computing", logo: cloudLogo },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Cisco Packet Tracer", logo: ciscoLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
  {
    title: "Interpersonal Skills",
    skills: [
      { name: "Problem Solving", logo: problemLogo },
      { name: "Team Work", logo: teamworkLogo },
      { name: "Active Listening", logo: activeLogo },
    ],
  },
];

// experience
export const experiences = [
  {
    id: 0,
    img: haeglLogo,
    role: "Intern",
    company: "Haegl Technologies",
    date: "June 2025",
    desc: "Worked as an Intern focusing on Machine Learning and Web Development. Built a Django web application to classify iris flowers using a trained scikit-learn ML model. Developed a user-friendly UI to input flower dimensions or upload iris images and display real-time classification results.",
    skills: [
      "Python",
      "Django",
      "scikit-learn",
      "HTML",
      "CSS",
      "JavaScript",
      "Machine Learning",
      "Web Development",
      "Data Processing",
    ],
  },
];

// education
// constants.js

export const education = [
  {
    id: 1,
    school: "KLE Technological University",
    degree: "Bachelor of Engineering - Computer Science",
    date: "2021 - 2025",
    grade: "9.12 / 10.0",
    desc: "Hubballi, Karnataka, India",
    img: KLELogo,
  },
  {
    id: 2,
    school: "Kendriya Vidyalaya",
    degree: "12th Standard (CBSE)",
    date: "2020",
    grade: "88.6%",
    desc: "Varanasi, Uttar Pradesh, India",
    img: kVLogo,
  },
  {
    id: 3,
    school: "Kendriya Vidyalaya",
    degree: "10th Standard (CBSE)",
    date: "2018",
    grade: "87.8%",
    desc: "Varanasi, Uttar Pradesh, India",
    img: kVLogo,
  },
];

// projects
export const projects = [
  {
    id: 0,
    title: "Object Detector Audio Chatbot",
    description:
      "A real-time object detection and audio description app built with Python and Streamlit. Integrated Facebook DETR for detection and Kakao VITS for text-to-speech, enabling automatic annotation and spoken descriptions of detected objects.",
    image: objectDetectorLogo,
    tags: ["Python", "Streamlit", "Hugging Face", "VS Code", "DETR", "VITS"],
    github: "https://github.com/SubhangeeG/Image_2_Audio_Chatbot",
  },
  {
    id: 1,
    title: "Iris Flower Classification",
    description:
      "A machine learning project to classify Iris flowers into different species based on sepal and petal measurements. Built using Python and ML libraries for model training and evaluation.",
    image: irisLogo,
    tags: ["Python", "Machine Learning", "Classification"],
    github: "https://github.com/SubhangeeG/Iris-Flower-Classification-Project",
  },
];
