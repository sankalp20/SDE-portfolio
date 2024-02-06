import react from '../assets/react.png';
import redux from '../assets/redux.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import tailwind from '../assets/tailwindcss.svg';
import jwt from '../assets/jwt.svg';
import blogging from '../assets/blogging.svg';
import javascript from '../assets/javascript.png';
import git from '../assets/git.png';
import youtube from '../assets/youtube.svg';
import rapid from '../assets/rapidapi.svg';
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import mysql from '../assets/mysql.png';
import gcp from '../assets/gcp.png';
import jira from '../assets/jira.png';
import confluence from '../assets/confluence.png';
import figma from '../assets/figma.png';
import findash from '../assets/findash.png';
import funedu from '../assets/funedu.jpeg';
import fitclub from '../assets/fitclub.png';
import typescript from '../assets/typescript.png';
import aws from '../assets/aws.svg';
import postman from '../assets/postman.svg';
import docker from '../assets/docker.png';
import github from '../assets/github.png';
import nextjs from '../assets/nextjs.svg';
import vue from '../assets/vue.png';
import freightcrate from '../assets/freightcrate.png';
import lotuswireless from '../assets/lotuswireless.png';
import postgres from '../assets/postgres.png';
import vscode from '../assets/vscode.svg';

export const freightcrateInfo = [
  {
    key: 1,
    text: "Successfully delivered the client facing product.",
  },
  {
    key: 2,
    text: 'Collaborated closely with team members to ensure project delivery within expected timelines.',
  },
  {
    key: 3,
    text: 'Contributed to the development of new features and functionalities.',
  },
  {
    key: 4,

    text: 'Engaged in code reviews, providing constructive feedback and adhering to best practices to maintain code quality and consistency.',
  },
  {
    key: 5,

    text: 'Participated in user testing and feedback sessions, refining features based on user input and contributing to a user-centric development approach.',
  },
  {
    key: 6,
    text: 'Gained valuable hands-on experience with relevant technologies and received positive feedback for my work and learning ability.',
  },
];
export const lotuswirelessInfo = [
  {
    key: 1,
    text: 'Developed dynamic landing page, contributing to its functionality and optimizing user interactions.',
  },
  {
    key: 2,
    text: 'Implemented key features, optimizing user interactions and decision-making processes.',
  },
  {
    key: 3,
    text: 'Contributed to the design and implementation of a metadata extractor, streamlining data retrieval and organization.',
  },
  {
    key: 4,

    text: 'Worked closely with senior developers, gaining valuable insights and guidance in the intricacies of software development.',
  },
  // {
  //   key: 5,

  //   text: 'Utilized languages and frameworks such as TypeScript, React.js, Nest.js, PostgreSQL, Zustand and Unit Testing  for the development of software applications.',
  // },
  {
    key: 5,

    text: 'Collaborated in the design and documentation of the feature.',
  },
];

export const experiences = [
  {
    id: '1',
    company: 'Freightcrate Technologies',
    logo: freightcrate,
    location: 'Mumbai, Maharastra, India',
    role: 'Software Engineer Intern (Frontend)',
    duration: 'DECEMBER 2023 - MARCH 2024',
    description: freightcrateInfo,
  },
  {
    id: '2',
    company: 'Lotus Wireless Technologies ',
    logo: lotuswireless,
    location: 'Vishakhapatnam, Andhra Pradesh, India',
    role: 'Software Developer Intern',
    duration: 'MAY 2023 - JUNE 2023',
    description: lotuswirelessInfo,
  },
];

export const projects = [
  {
    id: '1',
    name: 'Financedash',
    coverImage: findash,
    description: [
      'Real-time market data: Stay up-to-date with the latest market trends and stock prices.',
      'Historical trends: Analyze historical data to spot patterns and make data-driven investment choices.',
      'Predictive analytics: Leverage predictive insights to plan your financial future.',
      'Dynamic charts: Visualize data using interactive and user-friendly charts.',
      'Intuitive dashboards: Get a comprehensive overview of your financial portfolio.',
      'Portfolio tracking: Keep tabs on your investments and monitor their performance.',
      'Personalized recommendations: Receive tailored financial advice based on your goals and preferences.',
      
    ],
    workedOn: ['Website'],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: node,
        name: 'Node.js',
      },
      {
        logo: express,
        name: 'Express.js',
      },
      {
        logo: mongodb,
        name: 'MongoDB',
      },
      {
        logo: jwt,
        name: 'JWT',
      },
      {
        logo: git,
        name: 'Git',
      },
      {
        logo:redux,
        name: 'Redux',
      },
    ],
    link: 'https://github.com/sankalp20/financeDash',
  },

  {
    id: '2',
    name: 'Fitness Hub',
    coverImage: fitclub,
    workedOn: ['Website'],
    description: [
      'Its a go-to fitness destination built with ReactJS!', 
      'This responsive web application provides a sleek and engaging interface to help users stay fit and healthy.',
      'Number counter is implemented for the users to see the track record of the service provider.',
      'Email.js is implemented for sending emails to the users.',
      'Framer-motion is implemented for animation experience.',
      'Users can choose the programs according to their requirement.',
      'Scroll functionality is implemented for the users to smoothly navigate to their required spots.',
      'Responsive design: the website is optimized for different screen sizes and devices.',
    ],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: redux,
        name: 'Redux',
      },
      {
        logo: css,
        name: 'Pure CSS',
      },

      {
        logo: node,
        name: 'Node.js',
      },
      {
        logo: git,
        name: 'Git',
      },
    ],
    link: 'https://github.com/sankalp20/Fitclub-webapp',
  },

  {
    id: '3',
    name: 'FunEdu',
    description: [
      'Breaking the boundaries of exposure to social life and framing it rightfully.',
      'Making the digital life useful rather than wasting wasting time on something else.',
      'Shaping all mental odds using technology, i.e., LISTENING, VISUALISING, READING.',
      'Helping out teens to deal with the dark phases wisely in the time of crisis.',
    ],
    coverImage: funedu,
    workedOn: ['Website'],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
      },
      {
        logo: redux,
        name: 'Redux',
      },
      {
        logo: git,
        name: 'Git',
      },
    ],
    link: 'https://github.com/sankalp20/FunEdu-Mental-HealthMate',
  },
];

export const frontend = [
  {
    logo: html,
    name: 'HTML',
  },
  {
    logo: css,
    name: 'CSS',
  },
  {
    logo: javascript,
    name: 'Javascript',
  },
  {
    logo: typescript,
    name: 'Typescript',
  },
  {
    logo: react,
    name: 'React.js',
  },
  {
    logo: nextjs,
    name: 'Next.js',
  },
  {
    logo: vue,
    name: 'Vue.js',
  },
  {
    logo: redux,
    name: 'Redux',
  },
  {
    logo: tailwind,
    name: 'Tailwind CSS',
  },
];
export const backend = [
  {
    logo: node,
    name: 'Node.js',
  },
  {
    logo: express,
    name: 'Express.js',
  },
  {
    logo: mysql,
    name: 'MySQL',
  },
  {
    logo: mongodb,
    name: 'MongoDB',
  },
  {
    logo: postgres,
    name: 'PostgreSQL',
  },
  {
    logo: aws,
    name: 'AWS',
  },
  {
    logo: gcp,
    name: 'GCP',
  },
  {
    logo: docker,
    name: 'Docker',
  },
];
export const other = [
  {
    logo: java,
    name: 'Java',
  },
  {
    logo: jira,
    name: 'Jira',
  },
  {
    logo: confluence,
    name: 'Confluence',
  },
  {
    logo: git,
    name: 'Git',
  },
  {
    logo: github,
    name: 'Github',
  },
  {
    logo: postman,
    name: 'Postman',
  },
  {
    logo: vscode,
    name: 'VS Code',
  },
  {
    logo: figma,
    name: 'Figma',
  },
];
