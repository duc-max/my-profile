// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'duc-max', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ifirestone/gitprofile', 'ifirestone/Faker'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Smart home',
          description:
            'The website is dedicated to Bkav SmartHome, a premium smart home solution for luxury villas and mansions in Vietnam',
          imageUrl:
            'https://res.cloudinary.com/dkfoitaat/image/upload/v1740764687/Screenshot_2025-03-01_004409_kjlpsq.png',
          link: 'https://smarthome.com.vn/',
        },
        {
          title: 'Slearn ',
          description:
            'English learning and testing website with detailed lessons and full skills tests',
          imageUrl:
            'https://res.cloudinary.com/dkfoitaat/image/upload/v1756292834/Screenshot_2025-08-27_180637_weqae5.png',
          link: 'https://slearn.vn/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Minh Duc',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'minh-duc-tran-898987220/',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: 'minhduc003/',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '0869631814',
    email: 'tranminhducpchy@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'MySQL',
    'MongoDB',
    'REST API',
    'Git',
    'HTML',
    'CSS',
    'Next.js',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'H2Q solutions',
      position: 'Front-end developer',
      from: 'September 2024',
      to: 'November 2024',
      companyLink: 'https://h2qsolution.com/',
    },
    {
      company: 'Công ty cp giáo dục Slearn',
      position: 'Front-end developer',
      from: 'February 2025',
      to: 'August 2025',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Web Design for Everybody: Basics of Web Development & Coding',
      body: '',
      year: '2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/G2PN8V76V6ZX',
    },
    {
      name: 'Software Development Lifecycle',
      body: '',
      year: '2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/6968DYGLAX5Q',
    },
    {
      name: 'User Experience Research and Design',
      body: '',
      year: '2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/JD4J93GUFZ8V',
    },
    {
      name: ' UI / UX Design',
      year: '2023',
      link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/9EJ7U4W7MLNB',
    },
  ],
  educations: [
    {
      institution: 'FPT UNIVERSITY',
      degree: 'SOFTWARE ENGINEERING',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    {
      title: 'El impacto del portal de becas en RD',
      conferenceName: '',
      journalName: 'El Caribe',
      authors: 'Milena Herazo',
      link: 'https://www.elcaribe.com.do/gente/estilo/el-impacto-del-portal-de-becas-en-rd/',
      description:
        'Tras los clics que damos día a día en la búsqueda de informaciones en la web, se encuentran personas que trabajan para hacer “digerible” la gran cantidad de contenido que están buscando los usuarios. Es el caso de lo sucedido con “Beca Tu Futuro”, una plataforma integral diseñada para concentrar todas las oportunidades de becas disponibles en un solo lugar y funcionar como una herramienta de información, selección y administración dentro del Sistema Nacional de Becas y Crédito de Apoyo Educativo, facilitando el proceso desde la publicación hasta la adjudicación de la oportunidad.',
    },
    {
      title: 'Egresados de la UNIREMHOS se destacan en el mercado laboral',
      conferenceName: '',
      journalName: 'Portal UNIREMHOS',
      authors: 'UNIREMHOS',
      link: 'https://uniremhos.edu.do/egresados/',
      description:
        'La Asociación de Egresados de la UNIREMHOS, ASEUNIREMHOS, es la asociación no lucrativa y de duración indefinida, integrada por los profesionales de grado y posgrado egresados de la Universidad Eugenio María de Hostos (UNIREMHOS), quienes se mantienen fieles a los principios de la Institución que los formó, esta busca mantener el vínculo con la institución y los compañeros que les permita compartir experiencias académicas, profesionales, sociales y culturales.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/duc-max/my-profile.git"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
