import UIC from '../components/work/UIC';

export const DEV_NAME = 'Justin Wang';
export const DESIGN_STATEMENT = 'Designed and built with Next.js and Tailwind CSS'
export const COPYRIGHT = `\u00A9 ${new Date().getFullYear()}`;
export const MAIN_TITLE = 'Full Stack Developer';
export const SECONDARY_TITLE = 'Design Engineer';

/* Experience Interfaces */
export interface ExperienceSection {
  company: string, 
  logo: string,
  link: string, 
  location: string,
  positions: Position[]
};

export interface Position {
  title: string,
  duration: string,
  description: string,
  showcase?: React.ReactNode;
  skills: Skill[]
};

export interface Skill {
  skill: string,
  detail?: string
};

export const EXPERIENCES: ExperienceSection[] = [
  {
    company: 'UIC Payments',
    logo: 'UIC.jpg',
    link: 'https://uicpaymentsinc.com/',
    location: 'Fremont, CA',
    positions: [
      {
        title: 'Software Engineer',
        duration: 'Oct 2025 - Present',
        description: [
          "I engineer secure, high-performance Point-of-Sale (POS) systems for native Android.",
          "Currently integrating UIC's payment engine directly with NEXGO hardware terminals,",
          'delivering fault-tolerant transaction flows for reliable daily commerce.'
        ].join(' '),
        showcase: <UIC />,
        skills: [
          { skill: 'Android', detail: 'Kotlin & Jetpack Compose' },
          { skill: 'Network', detail: 'TCP (XMl & JSON)' },
          { skill: 'NEXGO SDK' }
        ]
      }
    ]
  },
  {
    company: 'Agrofocal Technologies',
    logo: 'Agrofocal.png',
    link: 'https://agrofocal.ai',
    location: 'San Jose, CA',
    positions: [
      {
        title: 'Software Developer',
        duration: 'Jan 2024 - Oct 2025',
        description: [
          'Transitioned to full-stack development,',
          'architecting React frontends and Flask APIs',
          'integrated with AWS and MongoDB.'
        ].join(' '),
        skills: [
          { skill: 'Web Apps', detail: 'React & Tailwind' },
          { skill: 'Cloud Server', detail: 'Flask & AWS boto3' },
          { skill: 'Database', detail: 'MongoDB' },
        ]
      },
      {
        title: 'Software Developer Intern & Co-op',
        duration: 'Jul 2022 - Dec 2023',
        description: [
          'Developed a native Android camera application with real-time RTSP',
          'video streaming, and built computer vision infrastructure by',
          'optimizing PyTorch models with TensorRT for high-performance inference.'
        ].join(' '),
        skills: [
          { skill: 'Android', detail: 'OpenGL, Camera2 API' },
          { skill: 'ML', detail: 'OpenCV & TensorRT' }
        ]
      }
    ]
  }
];

/* About Section Interface */
export interface AboutSectionLabels {
  header: string,
  title: string
};

/* About Me Section */ 
export const ABOUT_ME_SECTION: AboutSectionLabels = {
  header: 'Current Snapshot',
  title: 'Iterating toward those just-right moments'
};

export const ABOUT_ME_STATEMENT = [
  "Whether I'm shipping Android apps at work or prototyping web layouts at home,",
  "I'm always chasing that sweet spot where solid logic meets clean design."
].join(' ');

export const ABOUT_ME_LOCATION = 'BASED - Pleasanton, CA (PT)';

/* Active Section */
export const ABOUT_ACTIVE_SECTION: AboutSectionLabels = {
  header: 'Offline Discipline',
  title: 'Routine by design'
};

interface DayIntensityMapping {
  dayLabel: string,
  intensityClass: string
};

export const ACTIVE_INTENSITY_HEATMAP: DayIntensityMapping[] = [
  { dayLabel: 'S', intensityClass: 'opacity-75' },
  { dayLabel: 'M', intensityClass: 'opacity-25' },
  { dayLabel: 'T', intensityClass: 'opacity-100' },
  { dayLabel: 'W', intensityClass: 'opacity-75' },
  { dayLabel: 'T', intensityClass: 'opacity-100' }, 
  { dayLabel: 'F', intensityClass: 'opacity-25' },
  { dayLabel: 'S', intensityClass: 'opacity-75' }
];

export const ACTIVE_STATEMENT = 'Less screen time, more';

export const ACTIVE_ACTIVITIES = [
  'Badminton', 'Squash', 'Swimming', 'Running', 'Weights'
];

/* Games Section */
export const ABOUT_GAMES_SECTION: AboutSectionLabels = {
  header: 'After Hours',
  title: 'Competitive Matchmaking'
};

export const MAIN_GAME = 'Overwatch';

export const GAMES = [
  'Battlefield 6', 'Honkai: Star Rail', 'Clash Royale'
];

/* PC Parts Section */
export interface PCPart {
  partName: string,
  partValues: PCValue[]
};

interface PCValue {
  value: string,
  detail?: string
};

export const BUILD_PARTS: PCPart[] = [
  {partName: 'Case', partValues: [
    {value: 'Fractal Terra'}
  ]},
  {partName: 'CPU', partValues: [
    {value: 'AMD 7800X3D'}
  ]},
  {partName: 'GPU', partValues: [
    {value: 'NVIDIA RTX 5070 Ti'}
  ]}
];

export const PERIPHERALS: PCPart[] = [
  {partName: 'Display', partValues: [
    {value: 'MSI 27" 1440p QD-OLED'}
  ]},
  {partName: 'Input', partValues: [
    {value: 'Razer Huntsman V3 Pro'},
    {value: 'Finalmouse ULX'}
  ]}
];

export const ABOUT_PC_SECTION: AboutSectionLabels = {
  header: 'Optimizing thermals',
  title: 'Daily Workstation'
};