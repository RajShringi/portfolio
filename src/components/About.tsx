import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">Hey, I am Raj Shringi 👋</h2>
      <p>
        Hi, I'm Raj Shringi, a passionate MERN stack developer specializing in
        creating dynamic, responsive, and user-friendly web applications. I have
        experience building robust full-stack applications. I enjoy solving
        complex problems and continuously learning new technologies to enhance
        my skill set. My projects showcase my proficiency in modern web
        development practices and my dedication to delivering high-quality work.
      </p>
      <p>
        Feel free to explore my projects and get in touch if you want to
        collaborate or learn more about my work!
      </p>
      <div>
        <a
          href="/Raj-Shringi-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="px-6 py-2 rounded-xl ring-2 ring-stone-500 bg-stone-200 hover:bg-stone-300 inline-block"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
