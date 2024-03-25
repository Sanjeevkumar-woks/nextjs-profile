"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="w-full dark:bg-grey-800 text-gray-500 dark:text-gray-300 border-t-2">
      <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between items-center">
        <p className="text-sm mt-2 md:mt-0  text-gray-500 ">
          Made with
          <span className="animate-pulse"> ❤️ </span>
          by
          <span className="text-violet-600"> Sanjeev</span>
        </p>

        <div className="hidden xl:flex items-center gap-2">
          <Link
            href={"https://nextjs.org"}
            target="_blank"
            className="dark:bg-grey-800 text-gray-500 dark:text-gray-300"
          >
            <Image
              alt="Next.js"
              width={45}
              height={45}
              src="/nextjs.svg"
              className={`${
                theme === "dark" ? "invert" : "invert-0"
              } opacity-80 hover:opacity-100 transition-opacity`}
            />
          </Link>
          <p className="text-sm text-violet-600">X</p>
          <Link
            href={"https://vercel.com"}
            target="_blank"
            className="dark:bg-grey-800 text-gray-500 dark:text-gray-300"
          >
            <Image
              alt="Tailwind CSS"
              width={52}
              height={52}
              src="/vercel.svg"
              className={`${
                theme === "dark" ? "invert" : "invert-0"
              } opacity-80 hover:opacity-100 transition-opacity`}
            />
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex xl:hidden items-center gap-2">
          <div className="socials">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="https://www.linkedin.com/in/sanjeevkumar-managutti-34187a207/"
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-violet-700 text-white"
                >
                  <GiThunderBlade />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Sanjeevkumar-woks"
                  target="_blank"
                  rel="noreferrer"
                  className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-violet-700 text-white"
                >
                  <LiaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
