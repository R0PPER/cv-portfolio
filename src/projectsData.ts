import paymento from "./img/paymento.png";
import cookSmarter from "./img/cooksmarter.png";
import personalCv from "./img/personal-cv-pagepilling.png";
import ticTacToe from "./img/tic-tac-toe.png";
import timeIsRunning from "./img/time-is-running.png";
import forkify from "./img/forkify.png";

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
    languages: ["JavaScript", "HTML", "CSS", "MVC", "API"],
    link: "https://paymento.netlify.app/",
    image: paymento,
    fit: "cover",
  },
  {
    id: 2,
    title: "Personal CV",
    languages: ["JavaScript", "JQuery", "HTML", "CSS"],
    link: "https://personal-cv-pagepilling.netlify.app/",
    image: personalCv,
    fit: "contain",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    languages: ["React", "CSS"],
    link: "https://tic-tac-toe-projectv01.netlify.app/",
    image: ticTacToe,
    fit: "cover",
  },
  {
    id: 4,
    title: "Cook Smarter",
    languages: ["Next.js", "Tailwind", "API"],
    link: "https://cooksmarter.netlify.app/",
    image: cookSmarter,
    fit: "cover",
  },
  {
    id: 5,
    title: "Time Is Running",
    languages: ["React", "CSS"],
    link: "https://time-is-running-v01.netlify.app/",
    image: timeIsRunning,
    fit: "cover",
  },
  {
    id: 6,
    title: "Recipe App",
    languages: ["JavaScript", "HTML", "SCSS", "MVC", "API"],
    link: "https://forkify-app-panos.netlify.app/",
    image: forkify,
    fit: "cover",
  },
  {
    id: 7,
    title: "Personal CV",
    languages: ["JavaScript", "JQuery", "HTML", "CSS"],
    link: "https://personal-cv-pagepilling.netlify.app/",
    image: personalCv,
    fit: "contain",
  },
  {
    id: 8,
    title: "Tic Tac Toe",
    languages: ["React", "CSS"],
    link: "https://tic-tac-toe-projectv01.netlify.app/",
    image: ticTacToe,
    fit: "cover",
  },
  {
    id: 9,
    title: "Cook Smarter",
    languages: ["Next.js", "Tailwind", "API"],
    link: "https://cooksmarter.netlify.app/",
    image: cookSmarter,
    fit: "cover",
  },
  {
    id: 10,
    title: "Time Is Running",
    languages: ["React", "CSS"],
    link: "https://time-is-running-v01.netlify.app/",
    image: timeIsRunning,
    fit: "cover",
  },
];
