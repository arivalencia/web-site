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
  name: 'Desarrollador Android - Ingeniero T.I.',
  subtitle: ' ',
  cta: 'Sobre mí'
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Soy Ari Valencia Delgado, amante de la tecnología.',
  paragraphTwo: 'Trabajo como Desarrollador Android desde hace medio año,',
  paragraphThree: '¡Never Stop Learning!', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'App de administración Android nativa',
    info: 'App nativa para dVolada (empresa delivery) donde se pueden gestionar diferentes apartados de sus clientes.',
    info2: '',
    technologies: ['Java', 'Firebase', 'GoogleMaps', 'Retrofit', 'Material Design'],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'App nativa para registrar y compartir datos clínicos',
    info: 'App nativapara para acceder a los datos clínicos de una persona de manera inmediata al sufrir un accidente a través de un código QR y socorrerla.',
    info2: '',
    technologies: ['Kotlin', 'Firebase', 'Google Login', 'QR Scanner'],
    url: '',
    repo: 'https://github.com/arivalencia/PlusVida', // if no repo, the button will not show up
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

