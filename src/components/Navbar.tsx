import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaHashnode,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center sm:justify-between flex-wrap">
      <h2 className="text-lg tracking-widest from-left">RS</h2>
      <ul className="flex items-center gap-10 from-right">
        <Link href={"https://x.com/RajShringi1"} target="_blank">
          <li className="bg-transparent rounded-full p-2 hover:bg-stone-200">
            <FaXTwitter className="text-2xl" />
          </li>
        </Link>
        <Link href={"https://www.linkedin.com/in/raj-shringi/"} target="_blank">
          <li className="bg-transparent rounded-full p-2 hover:bg-stone-200">
            <FaLinkedinIn className="text-2xl" />
          </li>
        </Link>
        <Link href={"https://github.com/RajShringi"} target="_blank">
          <li className="bg-transparent rounded-full p-2 hover:bg-stone-200">
            <FaGithub className="text-2xl" />
          </li>
        </Link>
        <Link href={"https://rajshringi.hashnode.dev/"} target="_blank">
          <li className="bg-transparent rounded-full p-2 hover:bg-stone-200">
            <FaHashnode className="text-2xl" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
