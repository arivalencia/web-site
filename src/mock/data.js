import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ari Valencia DEV', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Mi sitio web', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, soy Ari Valencia Delgado',
  name: 'Desarrollador Android',
  subtitle: ' ',
  cta: 'Sobre mí'
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Mi nombre es Ari Valencia Delgado ',
  paragraphTwo: 'Second',
  paragraphThree: 'Thirt', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Envíame un mensaje',
  btn: 'ing.arivalencia@gmail.com',
  email: 'ing.arivalencia@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/arivalencia',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/arivalencia',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/arilaska/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/arilaskaValencia/',
    },
  ],
};

