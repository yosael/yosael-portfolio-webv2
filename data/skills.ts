import { Skill } from "@/types/Types";
import JavaScriptLogo from "@/public/languagesIcons/javascript.svg";
import ReactLogo from "@/public/languagesIcons/reactjs.svg";
import NodejsLogo from "@/public/languagesIcons/node-js.svg";
import JavaLogo from "@/public/languagesIcons/java.svg";
import SpringLogo from "@/public/languagesIcons/spring-icon.svg";

const currentYear = new Date().getFullYear();

export const skills: Skill[] = [
  {
    name: "Java",
    yearsOfExperience: currentYear - 2015,
    image: JavaLogo,
  },
  {
    name: "Javascript",
    yearsOfExperience: currentYear - 2016,
    image: JavaScriptLogo,
  },
  {
    name: "React",
    yearsOfExperience: currentYear - 2019,
    image: ReactLogo,
  },
  {
    name: "Spring",
    yearsOfExperience: currentYear - 2018,
    image: SpringLogo,
  },
  {
    name: "Node.js",
    yearsOfExperience: currentYear - 2020,
    image: NodejsLogo,
  },
];
