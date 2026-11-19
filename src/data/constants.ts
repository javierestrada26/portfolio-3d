// thoda zada ts ho gya idhar
// order = keycap layout, 6 per row
export enum SkillNames {
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  OPENCODE = "opencode",
  EXPO = "expo",
  NODEJS = "nodejs",
  EXPRESS = "express",
  LINUX = "linux",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  NEST = "nest",
  DOCKER = "docker",
  NGINX = "nginx",
  PRISMA = "prisma",
  GCP = "gcp",
  KUBERNETES = "kubernetes",

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
    shortDescription: "npx expo start y a rezar para que el QR conecte a la primera",
    color: "#000020",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
    keyboardIcon: "/assets/keyboard/logos/expo.svg",
    keyboardColor: "#1b1f2e",
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
    shortDescription: "Si algo se rompe, fue mi culpa por hacer sudo sin leer",
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
  [SkillNames.NEST]: {
    id: 15,
    name: "nest",
    label: "Nest",
    shortDescription: "Angular se fue al backend y se trajo todos sus decoradores",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nestjs/default.svg",
    keyboardIcon: "/assets/keyboard/logos/nestjs.svg",
    keyboardColor: "#FF2424",
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

  [SkillNames.PRISMA]: {
    id: 19,
    name: "prisma",
    label: "Prisma",
    shortDescription: "El ORM que te escribe las queries mientras tú te tomas el café",
    color: "#f38020",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/prisma/default.svg",
    keyboardIcon: "/assets/keyboard/logos/prisma.svg",
    keyboardColor: "#18333E",
  },
  [SkillNames.GCP]: {
    id: 20,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "Entré a probar la capa gratuita y salí con una factura sorpresa",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    keyboardIcon: "/assets/keyboard/logos/gcp.svg",
    keyboardColor: "#008fd5",
  },
  [SkillNames.KUBERNETES]: {
    id: 21,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription:
      "Para desplegar un hola mundo solo necesitas 47 archivos YAML",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/kubernetes/default.svg",
    keyboardIcon: "/assets/keyboard/logos/kubernetes.svg",
    keyboardColor: "#0080FF",
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
      SkillNames.DOCKER,
   
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
