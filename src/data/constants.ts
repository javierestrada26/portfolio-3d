// thoda zada ts ho gya idhar
// order = keycap layout, 6 per row
export enum SkillNames {
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  OPENCODE = "opencode",
  EXPO = "expo",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  BUN = "bun",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  LINUX = "linux",
  GIT = "git",
  VIM = "vim",
  DOCKER = "docker",
  NGINX = "nginx",
  CLAUDE = "claude",
  CLOUDFLARE = "cloudflare",
  GCP = "gcp",
  AWS = "aws",
  HOME_ASSISTANT = "homeassistant",
  PROXMOX = "proxmox",
  STEAM = "steam",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  /** Optional local artwork for the 3D key; falls back to icon. */
  keyboardIcon?: string;
  /** Plastic color of the 3D keycap; independent of the HTML brand accent. */
  keyboardColor?: string;
  /** Browser KeyboardEvent.code, e.g. KeyJ. Defaults to the displayed key order. */
  shortcut?: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Metiendo código al DOM desde el 95, sin filtro y sin miedo",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/js.svg",
    keyboardColor: "#ff9408",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "El primo de JS que siempre te corrige... y casi siempre tiene razón",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    keyboardIcon: "/assets/keyboard/logos/ts.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.REACT]: {
    id: 3,
    name: "react",
    label: "React",
    shortDescription: "Re-renderizando mi vida desde 2013 y aún no sé por qué",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    keyboardIcon: "/assets/keyboard/logos/react.svg",
    keyboardColor: "#00cce8",
  },
  [SkillNames.NEXTJS]: {
    id: 4,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "React con esteroides: rutas gratis, SEO sin llorar y deploy en un clic",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nextjs.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.OPENCODE]: {
    id: 5,
    name: "opencode",
    label: "OpenCode",
    shortDescription:
      "Mi copiloto de terminal: yo pongo la idea, él pone los commits",
    color: "#00cce8",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/opencode/default.svg",
    keyboardIcon: "/assets/keyboard/logos/opencode.svg",
    keyboardColor: "#97DF7D",
  },
  [SkillNames.EXPO]: {
    id: 6,
    name: "expo",
    label: "Expo",
    shortDescription: "one codebase, every screen, zero Xcode tears 📱✨",
    color: "#000020",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
    keyboardIcon: "/assets/keyboard/logos/expo.svg",
    keyboardColor: "#1b1f2e",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    keyboardIcon: "/assets/keyboard/logos/tailwind.svg",
    keyboardColor: "#00bfd8",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript se escapó del navegador y ahora quiere el backend también",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nodejs.svg",
    keyboardColor: "#00952c",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express",
    shortDescription: "Tres líneas y ya tienes servidor; lo demás es middleware y fe",
    color: "#fff",
    icon: "https://cdn.simpleicons.org/express/9CA3AF",
    keyboardIcon: "/assets/keyboard/logos/express.svg",
    keyboardColor: "#343638",
  },
  [SkillNames.BUN]: {
    id: 10,
    name: "bun",
    label: "Bun",
    shortDescription: "node but it chugged three energy drinks 🥟⚡",
    color: "#fbf0df",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
    keyboardIcon: "/assets/keyboard/logos/bun.svg",
    keyboardColor: "#ec6fa5",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "La base de datos seria que sí te entiende. El elefante nunca olvida",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    keyboardIcon: "/assets/keyboard/logos/postgres.svg",
    keyboardColor: "#146888",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Guarda lo que sea sin preguntar; el esquema es solo una sugerencia",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    keyboardIcon: "/assets/keyboard/logos/mongodb.svg",
    keyboardColor: "#00c51b",
  },
  [SkillNames.LINUX]: {
    id: 13,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    keyboardIcon: "/assets/keyboard/logos/linux.svg",
    keyboardColor: "#333537",
  },
  [SkillNames.GIT]: {
    id: 14,
    name: "git",
    label: "Git",
    shortDescription: "git push --force y que Dios reparta suerte",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    keyboardIcon: "/assets/keyboard/logos/git.svg",
    keyboardColor: "#ff4622",
  },
  [SkillNames.VIM]: {
    id: 15,
    name: "vim",
    label: "Vim",
    shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
    keyboardIcon: "/assets/keyboard/logos/vim.svg",
    keyboardColor: "#009f18",
  },
  [SkillNames.DOCKER]: {
    id: 16,
    name: "docker",
    label: "Docker",
    shortDescription: "En mi máquina funciona, así que te mandé mi máquina entera",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    keyboardIcon: "/assets/keyboard/logos/docker.svg",
    keyboardColor: "#009fe8",
  },
  [SkillNames.NGINX]: {
    id: 17,
    name: "nginx",
    label: "NginX",
    shortDescription: "Un archivo de configuración, tres horas de debug y un punto y coma olvidado",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    keyboardIcon: "/assets/keyboard/logos/nginx.svg",
    keyboardColor: "#00a20b",
  },
  [SkillNames.CLAUDE]: {
    id: 18,
    name: "claude",
    label: "Claude",
    shortDescription: "my pair programmer that never asks for a coffee break 🤖☕",
    color: "#d97757",
    icon: "https://cdn.simpleicons.org/claude/D97757",
    keyboardIcon: "/assets/keyboard/logos/claude.svg",
    keyboardColor: "#d97757",
  },
  [SkillNames.CLOUDFLARE]: {
    id: 19,
    name: "cloudflare",
    label: "Cloudflare",
    shortDescription: "edge go brrr, my homelab hides behind this orange cloud ☁️🛡️",
    color: "#f38020",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    keyboardIcon: "/assets/keyboard/logos/cloudflare.svg",
    keyboardColor: "#f38020",
  },
  [SkillNames.GCP]: {
    id: 20,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    keyboardIcon: "/assets/keyboard/logos/gcp.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.AWS]: {
    id: 21,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
    keyboardIcon: "/assets/keyboard/logos/aws.svg",
    keyboardColor: "#ff9208",
  },
  [SkillNames.HOME_ASSISTANT]: {
    id: 22,
    name: "homeassistant",
    label: "Home Assistant",
    shortDescription: "my house runs on YAML and vibes, lights obey me fr 🏠💡",
    color: "#18bcf2",
    icon: "https://cdn.simpleicons.org/homeassistant/18BCF2",
    keyboardIcon: "/assets/keyboard/logos/homeassistant.svg",
    keyboardColor: "#03a9f4",
  },
  [SkillNames.PROXMOX]: {
    id: 23,
    name: "proxmox",
    label: "Proxmox",
    shortDescription: "a whole datacenter in my closet, power bill said ouch 🖥️🔥",
    color: "#e57000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/proxmox/proxmox-original.svg",
    keyboardIcon: "/assets/keyboard/logos/proxmox.svg",
    keyboardColor: "#e57000",
  },
  [SkillNames.STEAM]: {
    id: 24,
    name: "steam",
    label: "Steam",
    shortDescription: "\"just one more match\" at 3am, every night 🎮🌙",
    color: "#66c0f4",
    icon: "https://cdn.simpleicons.org/steam/66C0F4",
    keyboardIcon: "/assets/keyboard/logos/steam.svg",
    keyboardColor: "#1b2838",
  },
};

export type Experience = {
  id: number;
  // multiple periods = returning stint, avoids a duplicate card
  periods: { start: string; end: string }[];
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    periods: [
      { start: "Oct 2026", end: "Present" },
      { start: "Apr 2022", end: "Dec 2024" },
    ],
    title: "Freelance Full Stack Developer",
    company: "Self-employed · Remote",
    description: [
      "Leading the build of an audit, tax and secretarial platform for a Malaysian CA firm.",
      "Shipped 12+ client projects solo, from the first scoping call to deploy and handover.",
      "Replaced spreadsheet workflows with dashboards, cutting weekly reporting from 6h to 30m.",
      "Built admin panels and CMSs so non-technical clients could stop emailing me for edits.",
      "Ran client infra on Docker, Nginx and Cloudflare at 99.9% uptime with nightly backups.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.TAILWIND,
      SkillNames.DOCKER,
      SkillNames.CLOUDFLARE,
    ],
  },
  {
    id: 2,
    periods: [{ start: "Dec 2024", end: "Oct 2026" }],
    title: "Full Stack Developer",
    company: "OmniNexus Sdn Bhd · Kuala Lumpur",
    description: [
      "Built an in-browser image editor from scratch and cancelled a $6k/year SaaS plan.",
      "Scaled the AI job pipeline to 3k+ tasks a day, with retries keeping failures under 1%.",
      "Cut image load times by 45% with resized variants, AVIF and smarter CDN caching.",
      "Rewrote slow database queries, taking key dashboards from 4s to under 600ms.",
      "Shipped 30+ features end-to-end and set up CI with preview deploys for every PR.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.DOCKER,
      SkillNames.GCP,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
