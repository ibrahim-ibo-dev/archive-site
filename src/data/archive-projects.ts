import { visualProjects } from "./visual-projects";

export interface ArchiveProject {
  year: string;
  title: string;
  description: string;
  madeFor: string;
  tech: string[];
  image: string;
  category: "software" | "hardware";
  status: "Completed" | "Ongoing" | "Conceptualized" | "Prototype";
  link: string;
  archived?: boolean;
}

export const archiveProjects: ArchiveProject[] = [
  ...visualProjects.map((project): ArchiveProject => ({
    year: "2026", title: project.title, description: project.description,
    madeFor: project.category, tech: project.tech, image: `/images/projects/${project.slug}.jpg`,
    category: "software", status: project.status, link: `/${project.slug}`,
  })),
  { year: "2026", title: "Rashkaw Media", description: "Full multilingual news platform built end-to-end to the client's own specification — 10 editorial sections, live sports & news coverage, currency & gold market, Kurdistan weather, public polls and surveys, and trilingual Kurdish/Arabic/English editions with a dedicated admin panel.", madeFor: "Rashkaw Media (Private Codebase)", tech: ["Next.js", "Express", "MongoDB", "TypeScript", "i18n", "RTL"], image: "/images/projects/rashkaw-media.png", category: "software", status: "Completed", link: "/rashkaw-media" },
  { year: "2026", title: "Kurdish Chess AI — شەترەنجی کوردی", description: "Full Kurdish-language chess platform with a custom minimax AI engine, Google Gemini 2.5 coach, mind-reading opponent-intent predictor, post-game analysis, and daily puzzle training — all in RTL Kurdish Sorani.", madeFor: "Kurdish Speakers / Personal R&D", tech: ["Next.js", "Gemini 2.5 Flash", "chess.js", "TypeScript", "RTL"], image: "/images/projects/kurdish-chess-ai.png", category: "software", status: "Completed", link: "/kurdish-chess-ai" },
  { year: "2025", title: "CSAI — Customer Service AI", description: "Full-stack AI customer service platform with Kurdish language support, product catalog, and admin dashboard.", madeFor: "HITEX 2025", tech: ["Next.js", "Python", "AI"], image: "/images/projects/csai.jpg", category: "software", status: "Completed", link: "/csai" },
  { year: "2025", title: "Chat Mart — Omni-Channel SaaS", description: "Evolution of CSAI into a multi-company marketplace with 5 messaging channels, Kurdish TTS voice replies, RBAC, reservation system, and PWA.", madeFor: "Businesses", tech: ["PHP", "Gemini API", "WhatsApp", "PWA"], image: "/images/projects/chat-mart.png", category: "software", status: "Completed", link: "/chat-mart" },
  { year: "2025", title: "Ashti Library", description: "Kurdish bookstore website with AI chatbot, search/filtering, admin dashboard, and WhatsApp ordering. Built for a real client in Erbil.", madeFor: "Ashti Books, Erbil", tech: ["PHP", "Gemini API", "RTL"], image: "/images/projects/ashti-library.jpg", category: "software", status: "Completed", link: "/ashti-library" },
  { year: "2025", title: "Bradaran — Car Dealership", description: "Complete car dealership management: inventory, cash & installment sales, rentals, debt tracking, financial reports, RBAC, push notifications, and PWA.", madeFor: "Car Dealership Client", tech: ["PHP", "MySQL", "PWA", "Push"], image: "/images/projects/bradar.png", category: "software", status: "Completed", link: "/xara" },
  { year: "2025", title: "Dyari — Advanced Car Dealership", description: "Enhanced dealership system with dual-database architecture, batch car imports, individual & gallery deposit tracking, advance payments, and automated receipts.", madeFor: "Car Dealership Client", tech: ["PHP", "MySQL", "Dual DB", "PWA"], image: "/images/projects/dyari-car.png", category: "software", status: "Completed", link: "/diari" },
  { year: "2025", title: "ID Kurdm — AI Platform", description: "Comprehensive AI API integration project mastering agent orchestration and large-scale architecture.", madeFor: "Personal R&D", tech: ["Python", "AI Agents", "API"], image: "/images/projects/id-kurdm.jpg", category: "software", status: "Completed", link: "#" },
  { year: "2025", title: "AI Social Media Responder", description: "Self-trained AI that responds to customer inquiries with company profiles and pricing.", madeFor: "Small Business", tech: ["NLP", "Automation", "API"], image: "/images/projects/ai-social-responder.jpg", category: "software", status: "Conceptualized", link: "#", archived: true },
  { year: "2024", title: "Home System", description: "Smart home integrating five sensor-based mini-projects on Arduino into one comprehensive system.", madeFor: "TIU / LFU / NICER", tech: ["Arduino", "IoT", "Sensors"], image: "/images/projects/home-system.jpg", category: "hardware", status: "Completed", link: "#" },
  { year: "2024", title: "Water Level Monitoring", description: "Real-time water tank monitoring with alerts at 15% and 80% levels and progress bar display.", madeFor: "Personal Project", tech: ["Arduino", "Sensors"], image: "/images/projects/water-level.jpg", category: "hardware", status: "Completed", link: "#" },
  { year: "2024", title: "Hand Drones", description: "Drone with 1.2km+ range controlled via gyroscope instead of traditional joystick.", madeFor: "Personal R&D", tech: ["ESP", "Gyroscope", "Drone"], image: "/images/projects/hand-drones.jpg", category: "hardware", status: "Ongoing", link: "#", archived: true },
  { year: "2024", title: "Glove Talk", description: "Speech-enabled glove converting sign language to speech and text for ~250K people in Kurdistan.", madeFor: "Accessibility", tech: ["Robotics", "AI", "NLP"], image: "/images/projects/glove-talk.jpg", category: "hardware", status: "Conceptualized", link: "#", archived: true },
  { year: "2024", title: "Portfolio v2", description: "Personal portfolio website with 3D scenes, GSAP animations, and cinematic design system.", madeFor: "Personal", tech: ["Next.js", "Tailwind", "GSAP"], image: "/images/projects/portfolio-v2.jpg", category: "software", status: "Completed", link: "https://ibrahim-eng.dev", archived: true },
  { year: "2024", title: "Erbil Chess Academy", description: "Chess academy website with member registration, tournament tracking, and live game features.", madeFor: "Chess Club", tech: ["HTML", "CSS", "JS"], image: "/images/projects/erbil-chess.jpg", category: "software", status: "Completed", link: "/ches" },
  { year: "2025", title: "True Prence", description: "AI face recognition attendance system recognizing up to 20 faces per frame simultaneously. CNN/HOG detection, SQLite storage, Excel/PDF export, and Matplotlib analytics.", madeFor: "Universities & Companies", tech: ["Python", "OpenCV", "face_recognition", "SQLite", "CNN"], image: "/images/projects/true-prence.jpg", category: "software", status: "Completed", link: "/attendance" },
  { year: "2025", title: "Signed Language", description: "Real-time gesture recognition using MediaPipe hand/body tracking and a custom-trained KNN ML model with incremental learning, augmentation, and confidence scoring.", madeFor: "Accessibility / R&D", tech: ["Python", "MediaPipe", "KNN", "OpenCV", "scikit-learn"], image: "/images/projects/signed-language.jpg", category: "software", status: "Completed", link: "/gestures" },
  { year: "2023", title: "Kurdistan CTF Tools", description: "Custom security tools built for CTF competitions including exploit frameworks and analysis tools.", madeFor: "CTF Competition", tech: ["Python", "Security"], image: "/images/projects/ctf-tools.jpg", category: "software", status: "Completed", link: "#", archived: true },
  { year: "2023", title: "CodeX Examination Prep", description: "National exam preparation platform with algorithmic problem solving and practice modules.", madeFor: "National Exam", tech: ["C++", "Algorithms"], image: "/images/projects/codex-prep.jpg", category: "software", status: "Completed", link: "#", archived: true },
];
