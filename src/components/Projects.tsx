import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaRegEye } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    images: ["/Kanban.png"],
    title: "Kanban Task Management",
    desc: "A dynamic full-stack application enabling users to manage boards and tasks with responsive design, form validations, theme toggling, drag-and-drop functionality, and persistent data storage.",
    live_site_url: "https://kanban-three-beta.vercel.app/",
    github_url: "https://github.com/RajShringi/kanban",
    note: "The API is deployed on Render.com, causing the first request to be slow after 15 minutes of inactivity.",
  },
  {
    id: 2,
    images: ["/Conduit.png"],
    title: "Conduit Blog App",
    desc: "Developed a blogging platform similar to Medium using the MERN stack, featuring article creation, reading, commenting, and social interactions. Implemented secure user authentication, profile management, article liking, following, and an intuitive interface with pagination and tag-based filtering.",
    live_site_url:
      "https://blog-app-using-hooks-1yqo61j9j-rajshringis-projects.vercel.app/",
    github_url: "https://github.com/RajShringi/blog_app_using_hooks",
    note: "The API is deployed on Render.com, causing the first request to be slow after 15 minutes of inactivity.",
  },
  {
    id: 3,
    images: ["/Dictionary.png"],
    title: "Dictionary",
    desc: "Created a project where users can search for words, view the Free Dictionary API's response, see form validation messages, play audio files, switch fonts and themes, view responsive layouts, and see hover and focus states for all interactive elements.",
    live_site_url: "https://dictionary-nine-flax.vercel.app/",
    github_url: "https://github.com/RajShringi/Dictionary",
    note: "",
  },
  {
    id: 4,
    images: ["/Shopping-cart.png"],
    title: "Simple Cart Application",
    desc: "Built a project allowing users to add and remove items from the cart using the context API, featuring a responsive design, animations with the Framer Motion Library, and local storage support.",
    live_site_url: "https://react-shopping-cart-hooks.vercel.app/",
    github_url: "https://github.com/RajShringi/react_shopping_cart_hooks",
    note: "",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-4 pb-6">
      <h2 className="font-semibold text-2xl">Projects</h2>
      <div className="flex items-center gap-x-3 gap-y-4 sm:gap-6 flex-wrap">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-4 sm:flex-row p-2 ring-2 ring-stone-500 bg-stone-100 rounded-lg appear"
          >
            <div className="relative h-[250px] w-full sm:w-1/2 overflow-hidden rounded-lg">
              <Image
                src={project.images[0]}
                alt="Raj Shringi"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 w-full sm:w-1/2">
              <h3 className="font-medium text-xl text-stone-500">
                {project.title}
              </h3>
              <p className="text-sm">{project.desc}</p>
              <div className="flex gap-6">
                <Link
                  className="text-sm p-2 bg-stone-200 hover:bg-stone-300 rounded-md flex gap-2 items-center"
                  href={project.live_site_url}
                  target="_blank"
                >
                  <span>
                    <FaRegEye />
                  </span>
                  <span>Live Site</span>
                </Link>
                <Link
                  className="text-sm p-2 bg-stone-200 hover:bg-stone-300 rounded-md flex gap-2 items-center"
                  href={project.github_url}
                  target="_blank"
                >
                  <span>
                    <FaGithub />
                  </span>
                  <span>Github</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
