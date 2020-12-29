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

// EXPERIENCE DATA
export const experienceData = [
  {
    company: 'dVolada',
    lapse: '2020-2021',
    job: 'Desarrollador Android',
    desc: 'Creación de app nativa administrativa para la empresa, soprte a sitio web y apps ya existentes.'
  },
]

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'dVolada Admin',
    info: 'App nativa para dVolada (empresa delivery) donde se pueden gestionar diferentes apartados de sus clientes.',
    info2: '',
    technologies: ['Java', 'Firebase', 'GoogleMaps', 'Google Places', 'Retrofit', 'Material Design'],
    images: ['project.jpg', 'profile.jpg', 'me.jpg'],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'PlusVida',
    info: 'App nativa para para acceder a los datos clínicos de una persona de manera inmediata al sufrir un accidente a través de un código QR y socorrerla.',
    info2: 'Cuando una persona sufre un accidente se nesecitan sus datos clínicos para poder tratarla lo antes posible, PlusVida provee la herramienta para poder almacenar tus datos clinicos en la nube y poder acceder a ellos desde cualquier lugar solo escanendo tu codigo QR.',
    technologies: ['Kotlin', 'Firebase', 'Google Login', 'QR Scanner'],
    images: ['project.jpg'],
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

