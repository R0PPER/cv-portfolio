export type Project = {
  id: number;
  title: string;
  languages: string[];
  link: string;
  image: string;
  fit?: "cover" | "contain";
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Payment System",
    languages: ["JS", "HTML", "CSS", "MVC", "API", "Responsive"],
    link: "https://paymento.netlify.app/",
    image: "/img/paymento.webp",
    fit: "cover",
  },
  {
    id: 2,
    title: "Personal CV",
    languages: ["JS", "JQuery", "HTML", "CSS"],
    link: "https://personal-cv-pagepilling.netlify.app/",
    image: "/img/personal-cv-pagepilling.webp",
    fit: "contain",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    languages: ["React", "CSS"],
    link: "https://tic-tac-toe-projectv01.netlify.app/",
    image: "/img/tic-tac-toe.webp",
    fit: "cover",
  },
  {
    id: 4,
    title: "Cook Smarter",
    languages: ["JS", "HTML", "CSS", "MVC", "API"],
    link: "https://cooksmarter.netlify.app/",
    image: "/img/cooksmarter.webp",
    fit: "cover",
  },
  {
    id: 5,
    title: "Time Is Running",
    languages: ["React", "CSS", "Responsive"],
    link: "https://time-is-running-v01.netlify.app/",
    image: "/img/time-is-running.webp",
    fit: "cover",
  },
  {
    id: 6,
    title: "Recipe App",
    languages: ["JS", "HTML", "SCSS", "MVC", "API"],
    link: "https://forkify-app-panos.netlify.app/",
    image: "/img/forkify.webp",
    fit: "cover",
  },
  {
    id: 7,
    title: "Portfolio Website",
    languages: ["Wordpress", "Responsive"],
    link: "https://sarakiniotis.com/",
    image: "/img/vsite.webp",
    fit: "cover",
  },
  {
    id: 8,
    title: "Task Manager",
    languages: ["React", "Tailwind", "Responsive"],
    link: "https://workdeck.netlify.app/",
    image: "/img/taskmanager.webp",
    fit: "contain",
  },
];
