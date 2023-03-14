import Image, { StaticImageData } from "next/image";
import React from "react";
import { skills } from "@/data/skills";
import { companies } from "@/data/companies";
import InPhoto from "@/public/images/InPhoto.jpg";

export default function Home() {
  return (
    <main className="container sm:mx-auto min-h-screen">
      <div className="flex flex-col">
        <section className="flex flex-row gap-4 items-center  justify-center ">
          <div className="flex flex-col items-center justify-center w-8/12  text-center">
            <h1 className="text-6xl font-bold text-zinc-700">
              Edwin Gutierrez
            </h1>
            <h2 className="text-2xl text-zinc-600">
              Full Stack Developer &#128187;
            </h2>
          </div>
          <div className="w-4/12 ">
            <Image
              src={InPhoto}
              width={150}
              height={150}
              alt="Profile Image"
              className="rounded-full shadow-gray-800"
            />
          </div>
        </section>
        <section className="mt-20">
          <h1 className="text-4xl text-center text-zinc-700 opacity-80 font-bold">
            My Stack
          </h1>
          <div className="flex flex-row gap-2 items-center align-middle justify-evenly text-center">
            {skills.map((skill) => (
              <div className=" rounded  shadow-gray-600 mt-10" key={skill.name}>
                <h1 className="font-bold">{skill.name}</h1>
                <Image
                  src={skill.image}
                  width={100}
                  height={100}
                  alt={skill.name}
                  className={"rounded-2xl p-2"}
                />
                <h2 className="font-medium">{`${skill.yearsOfExperience} years`}</h2>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-20">
          <h1 className="text-4xl font-bold text-center text-zinc-600">
            Companies I have worked with
          </h1>
          {/* List of Skills in a Grid with an Image and Experience */}
          <div className="flex flex-row gap-2 items-center align-middle justify-evenly text-center mt-8 ">
            {companies.map((company) => (
              <div className="flex flex-col justify-between items-center align-middle">
                <div
                  className=" rounded  shadow-gray-600  min-h-150"
                  key={company.name}
                >
                  <a href={company.url} target={"_blank"}>
                    <Image
                      src={company.image}
                      width={150}
                      height={150}
                      alt={company.name}
                      className={"rounded-2xl p-2"}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
