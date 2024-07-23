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
      <h2 className="text-2xl tracking-widest">Raj Shringi</h2>
      <ul className="flex items-center gap-10">
        <Link href={"/"}>
          <li className="bg-transparent rounded-full p-2 hover:bg-stone-200">
            <FaXTwitter className="text-2xl" />
          </li>
        </Link>
        <Link href={"/"}>
          <li className="bg-transparent rounded-full p-2 hover:bg-stone-200">
            <FaLinkedinIn className="text-2xl" />
          </li>
        </Link>
        <Link href={"/"}>
          <li className="bg-transparent rounded-full p-2 hover:bg-stone-200">
            <FaGithub className="text-2xl" />
          </li>
        </Link>
        <Link href={"/"}>
          <li className="bg-transparent rounded-full p-2 hover:bg-stone-200">
            <FaHashnode className="text-2xl" />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
