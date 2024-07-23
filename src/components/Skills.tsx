import Image from "next/image";
import React from "react";

const skills = [
  {
    id: 1,
    img: "/html.svg",
    name: "HTML",
  },
  {
    id: 2,
    img: "/css.svg",
    name: "CSS",
  },
  {
    id: 3,
    img: "/tailwind-css.svg",
    name: "Tailwind",
  },
  {
    id: 4,
    img: "/js.svg",
    name: "JavaScript",
  },
  {
    id: 5,
    img: "/typescript.svg",
    name: "TypeScript",
  },
  {
    id: 6,
    img: "/react.svg",
    name: "React",
  },
  {
    id: 7,
    img: "/express-original.svg",
    name: "Express Js",
  },
  {
    id: 8,
    img: "/node-js.svg",
    name: "Node",
  },
  {
    id: 9,
    img: "/mongodb-original.svg",
    name: "Mongo DB",
  },
  {
    id: 10,
    img: "/nextjs.svg",
    name: "Next JS",
  },
  {
    id: 11,
    img: "/redux-original.svg",
    name: "Redux",
  },
];

export default function Skills() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">Skills</h2>

      <div className="flex items-center gap-x-3 gap-y-4 sm:gap-6 flex-wrap">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="self-stretch flex flex-col gap-1 justify-between sm:justify-center items-center p-2 ring-2 ring-stone-500 bg-stone-100 hover:bg-stone-200 rounded-lg w-[30%] sm:w-[20%] appear"
          >
            <Image
              src={skill.img}
              alt="raj shringi"
              width={30}
              height={30}
              className="object-cover"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
