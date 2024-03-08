import htmlImage from '../assets/images/skills/html.png'
import cssImage from '../assets/images/skills/css.png'
import javascriptImage from '../assets/images/skills/javascript.png'
import reactImage from '../assets/images/skills/react.png'
import reduxImage from '../assets/images/skills/redux.png'
import nodeImage from '../assets/images/skills/node.png'
import expressImage from '../assets/images/skills/expressjs.png'
import mysqlImage from '../assets/images/skills/mysql.svg'
import pythonImage from '../assets/images/skills/python.png'

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

// export const skillsData = [
//   {
//     field: 'Frontend',
//     skills: [
//       { name: 'HTML', image: '/src/assets/images/skills/html.png' },
//       { name: 'CSS', image: '/src/assets/images/skills/css.png' },
//       { name: 'JavaScript', image: '/src/assets/images/skills/javascript.png' },
//       { name: 'React', image: '/src/assets/images/skills/react.png' },
//       { name: 'Redux', image: '/src/assets/images/skills/redux.png' },
//     ],
//   },
//   {
//     field: 'Backend',
//     skills: [
//       { name: 'Nodejs', image: '/src/assets/images/skills/node.png' },
//       {
//         name: 'Expressjs',
//         image: '/src/assets/images/skills/expressjs.png',
//       },

//       {
//         name: 'MongoDB',
//         image:
//           'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
//       },
//       { name: 'MySQL', image: '/src/assets/images/skills/mysql.svg' },
//       { name: 'Python', image: '/src/assets/images/skills/python.png' },
//     ],
//   },
// ]

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
    description: 'Project 1 description',
    image: '/src/assets/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Potography Portfolio Website',
    description: 'Project 2 description',
    image: '/src/assets/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Project 3 description',
    image: '/src/assets/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Food Ordering Application',
    description: 'Project 4 description',
    image: '/src/assets/images/projects/4.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    image: '/src/assets/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
]
