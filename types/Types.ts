import { StaticImageData } from "next/image";

export type Skill = {
  name: string;
  yearsOfExperience: number;
  image: StaticImageData;
};

export type Company = {
  name: string;
  image: StaticImageData;
  url: string;
};
