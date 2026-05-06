export const DEV_NAME = 'Justin Wang';
export const COPYRIGHT = `\u00A9 ${new Date().getFullYear()} ${DEV_NAME} - All rights reserved`;
export const MAIN_TITLE = 'Full Stack Developer';
export const SECONDARY_TITLE = 'Design Enthusiast';
export const CURRENT_POSITION = 'Software Engineer at UIC Payments';

/* Experience Interfaces */
export interface ExperienceSection {
  company: string, 
  logo: string,
  link: string, 
  location: string,
  positions: Position[],
  showcase?: React.ReactNode;
};

export interface Position {
  title: string,
  duration: string,
  description: string,
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
          "Currently, I am integrating UIC's payment engine directly with NEXGO hardware terminals,",
          'delivering fault-tolerant transaction flows for reliable daily commerce.'
        ].join(' '),
        skills: [
          { skill: 'Android', detail: 'Kotlin & Jetpack Compose' },
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
        title: 'Software Developer Intern',
        duration: 'Jan 2023 - Dec 2023',
        description: [
          'Focused on computer vision infrastructure,',
          'optimizing PyTorch models with TensorRT for high-performance inference.'
        ].join(' '),
        skills: [
          { skill: 'ML', detail: 'OpenCV (Python) & TensorRT' }
        ]
      },
      {
        title: 'Software Developer Co-op',
        duration: 'Jul 2022 - Dec 2022',
        description: [
          'Developed native Android camera application,',
          'leveraging OpenGL, Camera2 API, and OpenCV',
          'for real-time RTSP video streaming and inference.'
        ].join(' '),
        skills: [
          { skill: 'Android', detail: 'OpenGL, Camera2 API' },
          { skill: 'ML', detail: 'OpenCV (Java)' }
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

export const ABOUT_ME_LOCATION = 'BASED // Pleasanton, CA [PT]';

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

export const ACTIVE_ACTIVITIES = [
  'Badminton', 'Squash', 'Swimming', 'Weights'
];

/* Games Section */
export const ABOUT_GAMES_SECTION: AboutSectionLabels = {
  header: 'Matchmaking...',
  title: 'Competitive: In Queue'
};

export const MAIN_GAME = 'Overwatch';

export const MAIN_GAME_TAG = 'SirRacha#11210';

export const GAMES = [
  'Honkai: Star Rail', 'Battlefield 6', 'Clash Royale'
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
    {value: 'Fractal Terra', detail: 'Jade'}
  ]},
  {partName: 'CPU', partValues: [
    {value: 'AMD Ryzen 7 7800X3D'}
  ]},
  {partName: 'GPU', partValues: [
    {value: 'NVIDIA RTX 5070 Ti'}
  ]}
];

export const PERIPHERALS: PCPart[] = [
  {partName: 'Display', partValues: [
    {value: 'MSI 27" QD-OLED', detail: '1440p 360Hz'}
  ]},
  {partName: 'Input', partValues: [
    {value: 'Razer Huntsman V3 Pro', detail: 'Mini 60%'},
    {value: 'Finalmouse ULX', detail: 'Aceu'},
    {value: 'GLSSWRKS Polarity'}
  ]}
];

export const ABOUT_PC_SECTION: AboutSectionLabels = {
  header: 'Optimizing thermals',
  title: 'Surviving RAMageddon'
};