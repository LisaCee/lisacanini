export interface Project {
  id: number;
  recNo: number;
  dewey: string;
  title: string;
  description: string;
  tags: string[];
  viewUrl?: string;
  sourceUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    recNo: 1,
    dewey: "751.73",
    title: "Jakobi Art Works",
    description: "Portfolio site for a contemporary street artist, built and deployed from scratch.",
    tags: ["Vite", "React", "shadcn/ui"],
    viewUrl: "https://jakobiartworks.com",
    sourceUrl: "https://github.com/LisaCee/jakobiartworks",
    featured: true,
  },
  {
    id: 2,
    recNo: 2,
    dewey: "791.43",
    title: "Movie Time Machine",
    description: "Browse films by their original release year, with an interface that shifts personality to match the era.",
    tags: ["React", "API"],
    viewUrl: "https://movie-time-machine.netlify.app",
    sourceUrl: "https://github.com/LisaCee/moviedb",
    featured: true,
  },
  {
    id: 3,
    recNo: 3,
    dewey: "302.231",
    title: "Social Media Dashboard",
    description: "Responsive analytics dashboard with mock follower and engagement stats, plus a dark/light theme switcher. Frontend Mentor challenge.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    viewUrl: "https://dashboard.lisacanini.com",
    sourceUrl: "https://github.com/LisaCee/media-dashboard",
    featured: true,
  },
];