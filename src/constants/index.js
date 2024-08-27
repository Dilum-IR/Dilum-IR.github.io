import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT =
  "I am a passionate Web and Mobile Developer with a strong foundation in building dynamic and responsive applications. I thrive on challenges and am constantly eager to learn and adopt new technologies to stay at the forefront of industry trends. My commitment to continuous learning and my ability to adapt quickly make me well-equipped to tackle any development task and contribute effectively to a forward-thinking team.";

export const ABOUT_TEXT = `I am Dilum Induwara Rathnayake, an undergraduate at the University of Colombo School of Computing. I am a hardworking and ambitious person seeking for opportunities to improve and maintain my technical skills. I am excited to put my web and mobile development skills and knowledge to work as an effective and valuable team member as a quick learner who easily adapts to new technologies.`;

export const EXPERIENCES = [
  {
    year: "2024 Jan - Present",
    role: "Software Engineer - Mobile Developer",
    company: "IntendAble",
    address: "Colombo, Sri Lanka",
    description_1: `An organization engaged in developing community-driven projects, open-source research initiatives, and providing freely accessible public datasets.`,
    description_2: `Regularly responsible for mobile development on several client projects.`,
    technologies: ["Dart", "Flutter", "SpringBoot", "PostgreSQL" , "MySQL", "Firebase" ],
  },
];

export const EDUCATION = [
  {
    year: "2021 - Present",
    role_1: "Bachelor of Science in Computer Science",
    school: "University of Colombo School of Computing",
    address: "Colombo, Sri Lanka",
    academic_1: `Current GPA: 3.18/4.00`,
  },
  {
    year: "2006 - 2020",
    role_1: "G.C.E. Advanced Level",
    role_2: "G.C.E. Ordinary Level",

    school: "Suriyawewa National School, Suriyawewa",
    address: "Hambantota, Sri Lanka",
    academic_1: `Combined Maths: A, Chemistry: A, Physics: C`,
    academic_2: `A: 8 , B: 1`
  }
];


export const PROJECTS = [
  {
    title: "EchoLynk - Communication Software Solution",
    image: project1,
    description:
      "An innovative and accessible software solution that addresses the communication challenges faced by Deaf and Mute individuals. System have contextual text suggestions and visual cues for understand to the words and integrate the sign language detection model.",
    technologies: ["Android Native", "SQLite", "Generative AI", "React Js", "SpringBoot"],
    repo_rul:""
  },
  {
    title: "Amoral Clothing - Online Commerce and Workforce Management System",
    image: project2,
    description:
      "This website will revolutionize the management of online orders, deliveries, stock inventory and T-shirt design, providing an all-in-one platform that enhances operational efficiency and customer satisfaction. It will feature a streamlined order and delivery system, stock management module and a customizable T-shirt design tool. Additionally, the platform will generate insightful reports, offering valuable data to drive informed decision-making and strategic growth for businesses.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Canvas Js","Google Map API"],
   repo_url:"https://github.com/Dilum-IR/Project_Amoral.git"
  },
  {
    title: "Online School Mobile App Development",
    image: project3,
    description:
      "The app integrates detailed online course views, sortable by age, with scheduled online classes that students can join. Implemented a system to send meeting details upon class enrollment and integrated a payment gateway for class payments. Managed class capacities dynamically through the system.",
    technologies: ["Flutter", "Firebase", "EmailJs"],
    repo_rul:""
  },
  {
    title: "Public Transport Departure Alert Mobile App Development",
    image: project4,
    description:
      "The app connects with Google Maps to  mark user-specified departure locations from the bus or train. Implemented an alarm system that activates when the user approaches their selected departure point, ensuring they wake up even if asleep. The system also allows users to save frequent locations for future use and provides real-time viewing of their current location.",
    technologies: ["Flutter", "SQlite", "Google Map API"],
    repo_rul:""
  },
  {
    title: "Student Management System (SMS)",
    image: project4,
    description:
      "This project is designed to streamline the management of students, teachers, system employees, and parents within an educational institution. It will offer a centralized platform for handling academic records, staff assignments, communication with parents, and administrative tasks, ensuring smooth operations and enhanced collaboration among all stakeholders. The application will also generate reports and analytics to support data-driven decision-making, ultimately contributing to a more efficient and effective educational environment.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB"],
    repo_rul:"https://github.com/Dilum-IR/School-Management-System_Rad_Project.git"
  },
  {
    title: "Pet Care Mobile / Web App Development",
    image: project4,
    description:
      "Developed an innovative pet care mobile application, connecting users with veterinarians. The app displays the nearest vets based on user location and allows searches by name or specialization. Each vet's schedule is available for users to book appointments, with results stored in the system. Vets can confirm appointments, and users receive notifications for upcoming appointments, including reminders one week and one or two days in advance. Users can manage multiple pets within a single account. Additionally, developed a web admin dashboard and an e-commerce pet shop.",
    technologies: ["Flutter","React.js", "Node.js", "Express", "Mongo DB"],
    repo_rul:"https://github.com/Dilum-IR/School-Management-System_Rad_Project.git"
  },
];

export const CONTACT = {
  address:
    "School road, Suriyawewa, Hambantota, Sri Lanka. ",
  phoneNo: "+94 71 528 5054",
  email: "rdinduwara19158@gmail.com",
};
