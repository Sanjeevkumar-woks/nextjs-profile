import React from "react";
import Link from "next/link";
import * as Fa from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <section
      id="socials"
      className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex sm:flex-row gap-4 z-20"
    >
      <div className="socials">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-violet-700 text-white"
            >
              <LiaLinkedin size={30} />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Sanjeevkumar-woks"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-violet-700 text-white"
            >
              <FaGithub size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Socials;
