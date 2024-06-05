import htmlImage from '../assets/images/skills/html.png'
import cssImage from '../assets/images/skills/css.png'
import javascriptImage from '../assets/images/skills/javascript.png'
import reactImage from '../assets/images/skills/react.png'
import reduxImage from '../assets/images/skills/redux.png'
import nodeImage from '../assets/images/skills/node.png'
import expressImage from '../assets/images/skills/expressjs.png'
import mysqlImage from '../assets/images/skills/mysql.svg'
import pythonImage from '../assets/images/skills/python.png'

import project1Image from '../assets/images/projects/portfolio.jpg'
import project2Image from '../assets/images/projects/proshop.jpg'
import project3Image from '../assets/images/projects/the-wild-oasis.jpg'
import project4Image from '../assets/images/projects/nike.jpg'
import project5Image from '../assets/images/projects/sushi.jpg'

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const uniData = [
  {
    uniName: 'University of Manchester',
    uniContent: 'MSc in Statistics',
    uniTL: '09/2020‑11/2021',
  },
  {
    uniName: 'Soochow University',
    uniContent: 'Bachelor of Statistics',
    uniTL: '09/2016‑06/2020',
  },
]

export const skillsData = [
  {
    field: 'Frontend',
    skills: [
      { name: 'HTML', image: htmlImage },
      { name: 'CSS', image: cssImage },
      { name: 'JavaScript', image: javascriptImage },
      { name: 'React', image: reactImage },
      { name: 'Redux', image: reduxImage },
    ],
  },
  {
    field: 'Backend',
    skills: [
      { name: 'Nodejs', image: nodeImage },
      { name: 'Expressjs', image: expressImage },
      {
        name: 'MongoDB',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      },
      { name: 'MySQL', image: mysqlImage },
      { name: 'Python', image: pythonImage },
    ],
  },
]

export const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description:
      'Designed and developed a personalized portfolio website from scratch, using React, tailwindCSS and Vite.',
    image: project1Image,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/echoyol/portfolio',
    previewUrl: 'https://portfolio-mvol.onrender.com',
  },
  {
    id: 2,
    title: 'ProShop MERN eCommerce Platform',
    description:
      'Developed a full-stack eCommerce website that allows users to search for, add to cart and pay their items.',
    image: project2Image,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/echoyol/proshop-fullstack',
    previewUrl: 'https://proshop-8jbx.onrender.com',
  },
  {
    id: 3,
    title: 'The Wild Oasis',
    description:
      'Developed a React-based management system for The Wild Oasis hotel, featuring data visualization, property and client management.',
    image: project3Image,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/echoyol/the-wild-oasis',
    previewUrl: 'https://the-wild-oasis-2pz8.onrender.com',
  },
  {
    id: 4,
    title: 'Nike Website Clone',
    description:
      'Developed a Nike website clone using React, tailwindCSS and Vite.',
    image: project4Image,
    tag: ['All', 'Mobile'],
    gitUrl: 'https://github.com/echoyol/nike',
    previewUrl: 'https://nike-ok9s.onrender.com',
  },
  {
    id: 5,
    title: 'Sushi website',
    description: 'Developed a Sushi website using HTML, CSS and JavaScript.',
    image: project5Image,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/echoyol/sushiWebsite',
    previewUrl: 'https://sushi-f889.onrender.com',
  },
]
