import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-semibold text-2xl">Hey, I am Raj Shringi 👋</h2>
      <p>
        An analytical and detail-oriented FULL STACK Developer who is able to
        come up with user-centric solutions through the use of JavaScript.
        Collaborative, team-oriented, and proficient in collaborating and
        executing goals-oriented projects. Can easily adapt to change, possess
        eagerness towards learning and contributing to the organization.
      </p>
      <p>
        Looking for an organization where I could improve my skills & knowledge
        by giving input to the organization A problem-solving mindset with a
        goal to optimize my application for better stability and speed. Always
        hard working and looking forward to learning new skills. I love to read
        about Software Architectures and best practices, and I try to translate
        that knowledge as much as possible into the work I do.
      </p>
      <div>
        <a
          href="/Raj_Shringi_Resume.pdf"
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
