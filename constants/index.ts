import { RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 75,
    height: 75
  },
  {
    name: "CSS",
    Image: "/css.png",
    width: 75,
    height: 75
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 75,
    height: 65
  },
  {
    name: "Python",
    Image: "/python.png",
    width: 65,
    height: 75
  },
  {
    name: "Ruby",
    Image: "/ruby.png",
    width: 75,
    height: 75
  },
  {
    name: "Node JS",
    Image: "/node-js.png",
    width: 65,
    height: 75
  },
  {
    name: "Tailwind CSS",
    Image: "/tailwind.png",
    width: 75,
    height: 75
  },
  {
    name: "React",
    Image: "/react.png",
    width: 82,
    height: 75
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 75,
    height: 75
  },
  {
    name: "Next JS",
    Image: "/next.png",
    width: 75,
    height: 75
  },
  {
    name: "Ruby on Rails",
    Image: "/rails.png",
    width: 75,
    height: 75
  },
  {
    name: "PostgreSQL",
    Image: "/postgres.png",
    width: 75,
    height: 75
  }
];

export const Socials = [
  {
    name: "Github",
    src: "/github.svg",
    href: "https://www.github.com/adam-kowalczuk"
  },
  {
    name: "LinkedIn",
    src: "/linkedin.png",
    href: "https://www.linkedin.com/in/adam-kowalczuk"
  }
];
export const Projects = [
  {
    title: "Film Flash",
    text: "Browser extension that replaces the new tab page with a randomly generated background image, title, and description from a recently released movie.",
    src: "/FilmFlash.jpeg",
    href: "https://chromewebstore.google.com/detail/film-flash/elgeigpdpdmckhidkiamecaehhmgkdcd?pli=1"
  },
  {
    title: "QueueBall",
    text: "A single-page queueing app that lets users keep track of their place in line at pool tables at the bar.",
    src: "/QueueBall.jpeg",
    href: "https://cosmic-khapse-1d3ddf.netlify.app/"
  },
  {
    title: "Scheduler",
    text: "A React-based project that allows students to create and manage appointments with mentors in real time.",
    src: "/Scheduler.jpeg",
    href: "https://enchanting-pixie-b32c29.netlify.app/"
  }
];

export const NavLinks = [
  {
    name: "Skills",
    icon: RxPerson,
    link: "/skills"
  },
  {
    name: "Projects",
    icon: RxDashboard,
    link: "/projects"
  },
  {
    name: "Contact",
    icon: RxClipboard,
    link: "/contact"
  }
];
