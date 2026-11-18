const config = {
  title: "Javier Estrada | Backend Developer && DevOps ",
  description: {
    long: "Explore the portfolio of Naresh, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Naresh, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Javier",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Framer Motion",
  ],
  author: "Javier Estrada",
  email: "estrada.rj@outlook.com",
  site: "https://nareshkhatri.dev",

  // for github stars button
  githubUsername: "naresh-khatri",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/javi_estrada7",
    linkedin: "https://www.linkedin.com/in/rjestradaa/",
    instagram: "https://www.instagram.com/javi_estrada7/",
    facebook: "",
    github: "https://github.com/javierestrada26",
  },
};
export { config };
