// ─────────────────────────────────────────────────────────────────────────────
// All portfolio data — verified against repository READMEs where applicable
// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Divya Anand',
  role: 'Graduate Engineer Trainee',
  roleCompany: 'Forward Deployed Engineering · KSquare',
  tagline: "I'm a software engineer focused on building full-stack applications and AI-powered products, with a strong foundation in Data Structures & Algorithms and competitive programming.",
  email: 'anand6780hyd@gmail.com',
  github: 'https://github.com/anand2257',
  linkedin: 'https://linkedin.com/in/anand2257',
  resumePath: null, // Set to '/resume.pdf' once you add the file to /public
}

export const projects = [
  {
    id: 'notebook-app',
    title: 'AI Notebook LLM',
    subtitle: 'AI-Powered Document Intelligence',
    description:
      'An AI-powered document intelligence application that transforms static PDF documents into interactive conversations using Retrieval-Augmented Generation. Users can upload PDFs, ask natural language questions, and receive context-aware answers grounded in their documents.',
    longDescription:
      'Combines PDF text extraction with Google Gemini embeddings stored in Pinecone. LangChain orchestrates the RAG pipeline — from chunking and embedding to vector similarity search and answer generation. Frontend is deployed on Vercel; the Dockerised FastAPI backend runs on Hugging Face infrastructure.',
    tech: ['Next.js 14', 'React', 'FastAPI', 'Python', 'LangChain', 'Google Gemini', 'Pinecone', 'PyPDF', 'Docker', 'Tailwind CSS'],
    github: 'https://github.com/anand2257/notebook-app',
    live: 'https://notebook-app-ruddy.vercel.app',
    color: '#6366f1',
    icon: '📓',
    category: 'AI / RAG',
  },
  {
    id: 'auction-app',
    title: 'Real-Time Auction Platform',
    subtitle: 'Full-Stack Bidding System',
    description:
      'A full-stack auction application with live bidding, real-time event communication, and distributed messaging. Uses WebSocket-based communication to deliver auction activity to connected participants without requiring page refreshes.',
    longDescription:
      'Combines a React frontend with a Node.js/Express backend. JWT handles authentication; MongoDB provides persistent storage; Socket.IO delivers bidirectional real-time communication; Redis Pub/Sub coordinates event distribution across backend components.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Redis Pub/Sub', 'JavaScript'],
    github: 'https://github.com/anand21314/auction-app',
    live: 'https://auction-app-six-plum.vercel.app',
    color: '#2dd4bf',
    icon: '⚡',
    category: 'Full-Stack',
  },
  {
    id: 'scholar-sync',
    title: 'Scholar Sync',
    subtitle: 'AI PDF Research Assistant',
    description:
      'An AI-powered academic research assistant that transforms static PDF documents into interactive, searchable knowledge bases. Students and researchers can upload PDFs and ask questions based on the document content.',
    longDescription:
      'Uses PyPDF for text extraction, recursive text splitters for chunking, and Google text-embedding-004 for vector embeddings stored locally in ChromaDB. Gemini 2.5 Flash generates answers from retrieved context. A Bento-grid-inspired Flask UI features a typewriter answer effect.',
    tech: ['Flask', 'Python', 'LangChain', 'Google Gemini 2.5 Flash', 'ChromaDB', 'PyPDF', 'HTML/CSS/JS'],
    github: 'https://github.com/anand2257/scholar-sync',
    live: null,
    color: '#a78bfa',
    icon: '📚',
    category: 'AI / RAG',
  },
  {
    id: 'govt-exam-ai',
    title: 'Government Exam Current Affairs AI',
    subtitle: 'AI-Powered Exam Preparation',
    description:
      'An end-to-end system that collects official Indian government and news content via RSS, stores it in PostgreSQL, and uses Google Gemini to generate source-grounded, exam-oriented multiple-choice questions for competitive exams such as SSC, RRB NTPC, Banking, UPSC, APPSC, and TSPSC.',
    longDescription:
      'FastAPI backend with APScheduler for daily ingestion at 06:00 IST. Rule-based keyword classifier assigns categories and regions. Gemini generates MCQs with explanations and evidence passages. React + Vite frontend features a Dashboard, an Articles & MCQs browser, and an Ingestion Monitor. Human review API workflow before questions are approved.',
    tech: ['FastAPI', 'Python', 'React 19', 'TypeScript', 'Vite', 'Google Gemini', 'SQLModel', 'PostgreSQL', 'LangChain (feedparser)', 'APScheduler'],
    github: 'https://github.com/anand2257/government-exam-current-affairs-ai',
    live: null,
    color: '#f59e0b',
    icon: '🏛️',
    category: 'AI / Full-Stack',
  },
]

export const skills = [
  {
    category: 'Problem Solving',
    icon: '</>',
    items: ['Data Structures & Algorithms', 'Problem Solving', 'Competitive Programming'],
  },
  {
    category: 'Languages',
    icon: '{ }',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '◻',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    category: 'AI / ML',
    icon: '🧠',
    items: ['LangChain', 'LangGraph', 'Google Gemini', 'RAG', 'AI Integrations'],
  },
  {
    category: 'Databases',
    icon: '◉',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'ChromaDB', 'Pinecone'],
  },
  {
    category: 'Tools & Platforms',
    icon: '⬡',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Postman', 'VS Code'],
  },
]

export const experience = [
  {
    company: 'KSquare',
    role: 'Graduate Engineer Trainee',
    department: 'Forward Deployed Engineering',
    location: 'Hyderabad, India',
    period: 'September 2026 – Present',
    type: 'Full-time',
    description:
      'Working as a Graduate Engineer Trainee in the Forward Deployed Engineering team at KSquare, contributing to engineering initiatives and building software solutions.',
    current: true,
  },
]

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    specialization: 'AI & Data Science',
    institution: 'Vishnu Institute of Technology',
    location: 'Bhimavaram, Andhra Pradesh',
    period: 'August 2023 – May 2027',
    current: true,
  },
]
