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
  name: 'Desarrollador Android - Ingeniero TI',
  subtitle: ' ',
  cta: 'Sobre mí'
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Soy Ari Valencia Delgado, amante de la tecnología.',
  paragraphTwo: 'Trabajo como Desarrollador Android desde hace medio año en dVolada (empresa delivery), trato de aportar valor a mi empresa generando soluciones para facilitar los procesos.',
  paragraphThree: '¡Never Stop Learning!', // if no resume, the button will not show up
};

// EXPERIENCE DATA
export const experienceData = [
  {
    company: 'dVolada',
    lapse: '2020-2021',
    job: 'Desarrollador Android',
    desc: 'Creación de app nativa administrativa para la empresa, soporte a sitio web y apps ya existentes.'
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
    images: ['1-1.png', '1-2.png'],
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: '+Vida',
    info: 'App nativa para acceder a los datos clínicos de una persona de manera inmediata al sufrir un accidente a través de un código QR y socorrerla.',
    info2: 'Cuando una persona sufre un accidente se nesecitan sus datos clínicos para poder tratarla lo antes posible, +Vida provee la herramienta para poder almacenar tus datos clínicos en la nube y poder acceder a ellos desde cualquier lugar escanendo tu codigo QR.',
    technologies: ['Kotlin', 'Firebase', 'Google Login', 'QR Scanner'],
    images: ['2-1.png', '2-2.png', '2-3.png'],
    url: 'https://drive.google.com/file/d/1A6BUL-qArgl5iX56Efk8-Jrnh6jz5NT3/view?usp=sharing',
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

