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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
  Cpp,
  python,
  linux,
  business,
  chat3,
  food_delivery,
  gym_page,
  restaurant_1,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Cpp",
    icon: Cpp,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "linux",
    icon: linux,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Backend Developer",
    company_name: "PICT College",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2022 - March 2023",
    points: [
      "Developing and maintaining Backend for website of INC(Impetus and Concept) Flagship Event using React.js, tailwindcss as frontend and Node.js, Express as Backend",
      "Collaborating with cross-functional teams including designers, frontend developers to create 3D website for INC event in the college",
      "Implementing responsive design and ensuring cross-browser compatibility, with backend Database",
      "Creating Proper validation for Registration, Login and for Payment Gateway to get registration price",
    ],
  },
  {
    title: "Embedded Engineer Intern",
    company_name: "Jyosh AI Solutions Pvt.Ltd",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July-2023",
    points: [
      "In Internship I work on project call Door Lock Using Face Recognition",
      "In this project, our work is to prepare code for face-recognition also, connecting code to raspberry Pi Hardware",
      "The correctness for this project is nearly 80 percent",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I is impossible to identify same person with good knowledge of Embedded as well as Software Knowledge, but Utkarsh is exceptional",
    name: "Dr.Rupesh Jaiswal",
    designation: "Associate Professor ",
    company: "Pune Institute Computer Technology",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "It is motivating for everone that Utkarsh has created 3D portfolio website in just 2nd year of Engineering",
    name: "Mr.Nitin Patil",
    designation: "Assistant Professor ",
    company: "Pune Institute of Computer Technology",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Dr.Girish Mundada",
    designation: "Professor ",
    company: "Pune Institute of Computer Technology",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Restaurant Landing Page",
    description:
      "This project is exact clone of Youtube, where frontend is react,and in backend I used Rapid API v2",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant_1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Food Delivery Website (Full Stack)",
    description:
      "This is full stack website where customer can order food, add into cart and make payment with required Validations, here frontend framework is Reack and Database is Mongodb, Backend is Nodejs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: food_delivery,
    source_code_link: "https://github.com/",
  },
  {
    name: "Modern UI/UX business website",
    description:
      "This is frontend project to for business where I have used 3D graphics",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphics",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: business,
    source_code_link: "https://github.com/",
  },
  {
    name: "Youtube clone Website",
    description:
      "This is youtube website where I have used React at frontend and use Restapi at backend",
    tags: [
      {
        name: "React-vite",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chatgpt-tools Website",
    description:
      "I have build a chatgpt-tools website where we can ask any question to chatgpt, converting text to image, paragraph summary. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: chat3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fitness Center Website",
    description:
      "This is frontend project for fitness website where all information about Fitness Center is given.",
    tags: [
      {
        name: "react-vite",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gym_page,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
