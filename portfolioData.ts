import { Project, SkillItem, JourneyMilestone, EducationNode, GoalItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Dushmanta Sahu',
  headline: 'Class 10 Student • Future Web Developer • Tech Enthusiast',
  rotatingTitles: [
    'Class 10 Student',
    'Future Web Developer',
    'Tech Enthusiast',
    'Creative Learner',
    'AI Explorer',
  ],
  location: 'Odisha, India',
  email: 'dushmanta9707@gmail.com',
  shortBio:
    'A dedicated Class 10 student from Odisha, India, balancing high-school board preparations with passionate self-directed exploration in web development, modern algorithms, and artificial intelligence.',
  fullBio:
    "I am currently preparing for my Class 10 board examinations while consistently sharpening my coding foundations. My journey is built on curiosity, genuine discipline, and a vision to grow into a world-class software engineer and creative designer.",
  mindset:
    'No shortcuts, no inflated claims. Every concept is learned from first principles—from semantic HTML & CSS layout mechanics to JavaScript logic, responsive UI design, and generative AI interfaces.',
};

export const EDUCATION_DATA: EducationNode[] = [
  {
    grade: 'Class 9',
    phase: 'Foundational Discovery',
    focus: 'Basic Computing & Logic',
    description:
      'Discovered passion for computer science and basic web mechanics. Explored logical thinking, basic algorithms, and the basics of HTML & CSS syntax.',
    status: 'Completed',
    keyTopics: ['Computer Fundamentals', 'Basic Mathematics', 'Intro to HTML/CSS', 'Logical Problem Solving'],
  },
  {
    grade: 'Class 10',
    phase: 'Current Academic Priority',
    focus: 'Board Exam Preparation & Core Coding',
    description:
      'Currently enrolled in Class 10 in Odisha. Balancing rigorous academic studies and board exam syllabus while building practical front-end web projects in my spare time.',
    status: 'Current Focus',
    keyTopics: ['Class 10 Board Curriculum', 'Modern JavaScript (ES6+)', 'Responsive UI Design', 'Git & Version Control'],
  },
  {
    grade: 'Class 11 - 12',
    phase: 'Higher Secondary & Sciences',
    focus: 'Computer Science & Mathematics',
    description:
      'Upcoming milestone targeting higher secondary education with a focused concentration in Mathematics, Physics, and Computer Science.',
    status: 'Upcoming',
    keyTopics: ['Advanced Mathematics', 'Data Structures & Algorithms', 'Full-stack Foundations', 'Systems Thinking'],
  },
  {
    grade: 'Undergraduate',
    phase: 'Computer Science & Engineering',
    focus: 'Software Engineering & Scalable Systems',
    description:
      'Future goal to pursue higher education in Computer Science and build transformative digital products that solve real-world problems.',
    status: 'Upcoming',
    keyTopics: ['Software Engineering', 'AI & Machine Learning', 'Cloud Infrastructure', 'Product Design'],
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'HTML5',
    category: 'frontend',
    status: 'Building',
    levelPercent: 85,
    description: 'Writing semantic, accessible, and well-structured web markup with clean SEO and form practices.',
    iconName: 'Code',
    highlights: ['Semantic tags', 'Accessible structure', 'Forms & Inputs', 'SEO foundations'],
  },
  {
    name: 'CSS3 & Tailwind',
    category: 'frontend',
    status: 'Building',
    levelPercent: 80,
    description: 'Crafting responsive layouts with Flexbox, CSS Grid, media queries, modern utility styling, and fluid typography.',
    iconName: 'Palette',
    highlights: ['Flexbox & Grid', 'Mobile-first design', 'Custom keyframes', 'Tailwind utility workflows'],
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    status: 'Learning',
    levelPercent: 65,
    description: 'Practicing core programming concepts: DOM manipulation, event loops, promises, array methods, and async operations.',
    iconName: 'FileCode2',
    highlights: ['ES6+ syntax', 'DOM interactions', 'Fetch API / Async', 'Array methods & closures'],
  },
  {
    name: 'Responsive Web Design',
    category: 'frontend',
    status: 'Building',
    levelPercent: 85,
    description: 'Ensuring seamless visual hierarchy and adaptive layouts across mobile devices, tablets, laptops, and ultra-wide screens.',
    iconName: 'Smartphone',
    highlights: ['Fluid layouts', 'Viewport units', 'Breakpoints', 'Touch target ergonomics'],
  },
  {
    name: 'UI/UX Design Principles',
    category: 'creative',
    status: 'Learning',
    levelPercent: 70,
    description: 'Understanding visual hierarchy, color theory, typography pairing, whitespace discipline, and interactive micro-states.',
    iconName: 'Layers',
    highlights: ['Visual hierarchy', 'Color psychology', 'Micro-interactions', 'Spacing systems'],
  },
  {
    name: 'Basic Programming Logic',
    category: 'core',
    status: 'Building',
    levelPercent: 75,
    description: 'Solidifying problem-solving instincts, conditional branching, loops, math problem algorithms, and pseudocode.',
    iconName: 'Cpu',
    highlights: ['Control flow', 'Mathematical logic', 'Algorithms', 'Debugging fundamentals'],
  },
  {
    name: 'AI Tools & Prompting',
    category: 'tools',
    status: 'Exploring',
    levelPercent: 70,
    description: 'Exploring LLM workflows, conversational prompting, code assistance, and experimenting with AI interface paradigms.',
    iconName: 'Sparkles',
    highlights: ['Prompt engineering', 'AI workflow enhancement', 'UI concepts for LLMs', 'Curiosity experiments'],
  },
  {
    name: 'Creative Problem Solving',
    category: 'creative',
    status: 'Building',
    levelPercent: 80,
    description: 'Approaching student challenges and coding hurdles with a patient, iterative, and analytical mindset.',
    iconName: 'Brain',
    highlights: ['First-principles thinking', 'Iterative debugging', 'Self-taught research', 'Adaptability'],
  },
  {
    name: 'Video & Media Editing',
    category: 'creative',
    status: 'Exploring',
    levelPercent: 60,
    description: 'Basic timeline cuts, audio adjustments, and motion graphic concepts to visually communicate ideas and tutorials.',
    iconName: 'Video',
    highlights: ['Timeline editing', 'Audio balancing', 'Visual storytelling', 'Pacing & transitions'],
  },
  {
    name: 'Technology Exploration',
    category: 'tools',
    status: 'Exploring',
    levelPercent: 90,
    description: 'Constantly tracking emerging tech trends, developer tooling, web standards, and high-impact computing advancements.',
    iconName: 'Compass',
    highlights: ['Tech news analysis', 'Tool benchmarking', 'Open-source curiosity', 'Forward vision'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Developer Portfolio',
    tagline: 'Modern, high-performance portfolio engineered with React, Tailwind CSS, and smooth micro-interactions.',
    description:
      'My personal portfolio website built to showcase my authentic learning journey, academic priorities, and development projects.',
    longDescription:
      'This project represents my core showcase of modern web design principles. Built with React and TypeScript, it incorporates fluid typography, responsive layout mathematics, a canvas-driven background with red & white floating particles, accessible keyboard navigation, and zero false claims.',
    category: 'web',
    status: 'Learning Project',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion', 'Canvas API'],
    features: [
      'Interactive red and white floating celestial ball background with depth blur',
      'Dual-theme support (Dark & Light) with persistent user preference',
      'Dynamic typing hero headline with tailored student narrative',
      'Fully responsive grid architecture optimized for mobile and desktop',
      'Client-side mailto contact system and instant clipboard copy utility',
    ],
    futureImprovements: [
      'Publishing my verified Class 10 academic milestones after board results',
      'Adding an interactive code playground section',
      'Implementing blog articles documenting my programming learnings',
    ],
    githubUrl: 'https://github.com/dushmanta9707',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: 'ai-chat-interface',
    title: 'AI Chat Interface Concept',
    tagline: 'An experimental chat interface exploring sleek message threads, streaming states, and modern glass UI.',
    description:
      'An experimental AI chat interface exploring modern web UI, prompt formatting, and assistive design.',
    longDescription:
      'A design and frontend prototype exploring how clean chat bubbles, prompt suggestion chips, responsive message bubbles, and typing indicators interact on mobile screens. Designed to practice component modularity and modern CSS layout structuring.',
    category: 'ai',
    status: 'Concept',
    technologies: ['React', 'CSS Modules / Tailwind', 'SVG Icons', 'Responsive UI'],
    features: [
      'Clean conversational thread layout with user and assistant message avatars',
      'Prompt inspiration badges for quick questions',
      'Simulated stream typing indicator animation',
      'Minimalist dark-mode aesthetic with blue accent glow',
    ],
    futureImprovements: [
      'Connecting to Gemini API via a secure backend proxy when backend skills are acquired',
      'Adding Markdown formatting support for code snippets',
      'Voice input interaction using the Web Speech API',
    ],
    githubUrl: 'https://github.com/dushmanta9707',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: 'school-website',
    title: 'Modern School Portal Concept',
    tagline: 'A student-centric school website concept reimagining digital notices, timetables, and academic resources.',
    description:
      'A school website concept designed to present school notices, subject syllabus, and student resources in a clean, modern way.',
    longDescription:
      'Inspired by the desire for clearer school notice boards and academic calendars, this concept simplifies navigation for high school students and parents. It presents timetable viewers, exam dates, and teacher announcements with high-contrast accessibility.',
    category: 'web',
    status: 'Concept',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Grid'],
    features: [
      'Filterable academic notice board categorized by grade and subject',
      'Daily class timetable visualizer with current class highlight',
      'High contrast mode compliant with WCAG accessibility standards',
      'Mobile-friendly quick-access buttons for emergency school updates',
    ],
    futureImprovements: [
      'Creating printable PDF timetable downloads',
      'Adding an interactive homework checklist for classmates',
      'Integrating bilingual support for English and Odia',
    ],
    githubUrl: 'https://github.com/dushmanta9707',
    demoUrl: '#',
    isFeatured: true,
  },
  {
    id: 'free-tools-website',
    title: 'Free Student Web Tools',
    tagline: 'A planned suite of browser-based utilities including percentage calculators, study timers, and unit converters.',
    description:
      'A future project concept for a collection of lightweight, privacy-friendly browser-based tools for students.',
    longDescription:
      'A planned collection of zero-ad, fast-loading tools built for students: Grade-to-Percentage converter, Pomodoro study focus timer with ambient sound, and quick unit calculators designed for Class 10 science and math problems.',
    category: 'coming-soon',
    status: 'Coming Soon',
    technologies: ['TypeScript', 'Local Storage', 'Web Audio API', 'Tailwind CSS'],
    features: [
      'Pomodoro study timer with customized intervals for Class 10 revision',
      'Class 10 board exam mark calculator and percentage predictor',
      'Physics and Chemistry formula quick reference cards',
      '100% offline-ready utility working without internet connection',
    ],
    futureImprovements: [
      'Full Progressive Web App (PWA) offline installation',
      'Custom goal tracker for weekly study targets',
    ],
    githubUrl: 'https://github.com/dushmanta9707',
    demoUrl: '#',
    isFeatured: false,
  },
  {
    id: 'code-playground-proto',
    title: 'Interactive Code Snippet Viewer',
    tagline: 'A mini sandbox experiment to inspect HTML, CSS, and JS snippets with live preview cards.',
    description:
      'A lightweight web experiment to explore real-time code rendering and syntax styling in the browser.',
    longDescription:
      'Built as a self-study laboratory to test how CSS flexbox and grid rules behave in real-time. Features interactive toggle controls that change CSS properties and visualize layout changes instantly.',
    category: 'experiments',
    status: 'Concept',
    technologies: ['HTML5', 'Vanilla JavaScript', 'CSS Variables', 'Monospace UI'],
    features: [
      'Interactive CSS property sliders (gap, justify-content, align-items)',
      'Instant visual canvas feedback',
      'Code generation output ready to copy',
    ],
    futureImprovements: [
      'Expanding to support JavaScript snippet execution in an isolated sandbox',
      'Exporting code directly to CodePen or GitHub Gists',
    ],
    githubUrl: 'https://github.com/dushmanta9707',
    demoUrl: '#',
    isFeatured: false,
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'm1',
    period: 'Early Spark',
    title: 'Curiosity & Tech Exploration',
    subtitle: 'Discovering the World Behind the Screen',
    description:
      'Fascinated by how websites and software operate. Began reading tech articles, watching programming tutorials, and exploring browser developer tools.',
    icon: 'Compass',
    badge: 'Curiosity',
  },
  {
    id: 'm2',
    period: 'First Steps',
    title: 'Learning Basic Web Building Blocks',
    subtitle: 'Mastering HTML & CSS Mechanics',
    description:
      'Wrote my first lines of HTML and CSS. Learned box model mechanics, color palettes, responsive viewports, and page structuring.',
    icon: 'Code',
    badge: 'Foundations',
  },
  {
    id: 'm3',
    period: 'Interactive Coding',
    title: 'Diving into JavaScript & Logic',
    subtitle: 'From Static Pages to Dynamic Interactions',
    description:
      'Explored core JavaScript programming, conditional statements, DOM events, and basic UI behaviors to make websites responsive and engaging.',
    icon: 'Zap',
    badge: 'Interactivity',
  },
  {
    id: 'm4',
    period: 'Present Day',
    title: 'Entered Class 10 & Focused Academics',
    subtitle: 'Balancing High School Excellence with Coding',
    description:
      'Prioritizing Class 10 board examination studies while dedicating regular weekend time to refine modern web frameworks, component thinking, and clean design.',
    icon: 'BookOpen',
    badge: 'Current Phase',
    isCurrent: true,
  },
  {
    id: 'm5',
    period: 'Ongoing Pursuit',
    title: 'Continuous Technology Learning',
    subtitle: 'Embracing Modern Tooling & AI',
    description:
      'Investigating modern web engineering tools, Git version control, generative AI integration ideas, and foundational computer science principles.',
    icon: 'Sparkles',
    badge: 'Expansion',
  },
  {
    id: 'm6',
    period: 'Vision Ahead',
    title: 'Future: Skilled Software Developer',
    subtitle: 'Building Impactful Digital Solutions',
    description:
      'Aiming to excel in upcoming higher secondary education, pursue Computer Science, and engineer valuable software products that empower people.',
    icon: 'Rocket',
    badge: 'Long-term Goal',
  },
];

export const GOALS_DATA: GoalItem[] = [
  {
    id: 'academic-goal',
    category: 'Academic Focus',
    title: 'Class 10 Board Excellence',
    description:
      'Build an unwavering conceptual foundation in Mathematics, Science, and Social Sciences, performing with high distinction in my Class 10 board examinations.',
    target: 'Class 10 Board Examinations',
    icon: 'GraduationCap',
    accent: 'blue',
  },
  {
    id: 'tech-goal',
    category: 'Technology & Coding',
    title: 'Master Frontend & Engineering Logic',
    description:
      'Become exceptionally skilled in modern JavaScript, TypeScript, responsive layout systems, and full-stack architecture principles with clean code standards.',
    target: 'Full-Stack Proficiency',
    icon: 'Terminal',
    accent: 'red',
  },
  {
    id: 'creative-goal',
    category: 'Creative Design',
    title: 'Build Useful Digital Solutions',
    description:
      'Design digital experiences and student-friendly tools that combine aesthetic sophistication, effortless usability, and real-world utility.',
    target: 'High-Impact Products',
    icon: 'Sparkles',
    accent: 'blue',
  },
  {
    id: 'future-goal',
    category: 'Future Ambition',
    title: 'Meaningful Technology Innovations',
    description:
      'Grow into a forward-thinking software developer who creates transformative technological products and opens new opportunities for the community.',
    target: 'Impactful Engineering Career',
    icon: 'Rocket',
    accent: 'red',
  },
];

export const CURRENT_FOCUS_ITEMS = [
  {
    id: 'studies',
    icon: '📚',
    title: 'Class 10 Studies',
    subtitle: 'Academic Priority',
    details: 'Daily disciplined revision in Mathematics, Science, and board syllabus to ensure top academic performance.',
    progress: 'Active Daily',
  },
  {
    id: 'webdev',
    icon: '💻',
    title: 'Web Development',
    subtitle: 'Technical Foundation',
    details: 'Mastering semantic HTML5, CSS layout mathematics, responsive UI, and modern JavaScript component design.',
    progress: 'Consistent Practice',
  },
  {
    id: 'learning',
    icon: '🧠',
    title: 'Continuous Learning',
    subtitle: 'Knowledge Expansion',
    details: 'Understanding how internet protocols, client-server models, and AI algorithms actually operate under the hood.',
    progress: 'Curiosity-Driven',
  },
  {
    id: 'discipline',
    icon: '🎯',
    title: 'Student Discipline',
    subtitle: 'Habit & Focus',
    details: 'Maintaining structured daily time management between school lectures, self-study, exercise, and coding sessions.',
    progress: 'High Commitment',
  },
  {
    id: 'future',
    icon: '🚀',
    title: 'Future Projects',
    subtitle: 'Creative Vision',
    details: 'Architecting concept blueprints for helpful educational tools, calculators, and interactive student portals.',
    progress: 'Ideation & Prototyping',
  },
];

export const SAFE_STATS = [
  {
    label: 'Academic Grade',
    value: 'Class 10',
    detail: 'Focused Student in Odisha',
    icon: 'BookMarked',
  },
  {
    label: 'Geographic Location',
    value: 'Odisha, India',
    detail: 'Proud Heritage & Roots',
    icon: 'MapPin',
  },
  {
    label: 'Learning Mindset',
    value: 'Always Learning',
    detail: 'Daily Curiosity & Practice',
    icon: 'Flame',
  },
  {
    label: 'Guiding Principle',
    value: '100% Genuine',
    detail: 'Zero False Claims or Titles',
    icon: 'ShieldCheck',
  },
];
