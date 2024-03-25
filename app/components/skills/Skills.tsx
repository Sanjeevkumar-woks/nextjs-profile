"use client";
import { useState } from "react";
import SkillCard from "./SkillCard";

const skillData = [
  { name: "JavaScript", image: "/skills/js.png", category: "Frontend" },
  { name: "TypeScript", image: "/skills/ts.png", category: "Frontend" },
  { name: "NextJS", image: "/skills/nextjs.png", category: "Frontend" },
  { name: "ReactJS", image: "/skills/React.png", category: "Frontend" },

  { name: "Redux", image: "/skills/redux.png", category: "Frontend" },
  {
    name: "React-Query",
    image: "/skills/react-query.png",
    category: "Frontend",
  },
  { name: "Tailwind", image: "/skills/tailwind.png", category: "Frontend" },
  {
    name: "Material UI",
    image: "/skills/material_ui.png",
    category: "Frontend",
  },
  { name: "HTML5", image: "/skills/HTML.png", category: "Frontend" },
  { name: "CSS3", image: "/skills/css3.png", category: "Frontend" },
  { name: "Bootstrap", image: "/skills/bootstrap.png", category: "Frontend" },
  { name: "Sass", image: "/skills/sass.png", category: "Frontend" },
  { name: "jQuery", image: "/skills/jquery.png", category: "Frontend" },
  { name: "NodeJS", image: "/skills/nodejs.png", category: "Backend" },
  { name: "ExpressJS", image: "/skills/express.png", category: "Backend" },
  { name: "MongoDB", image: "/skills/mongodb.png", category: "Backend" },
  { name: "AWS", image: "/skills/aws.png", category: "Backend" },
  { name: "MySQL", image: "/skills/mysql.png", category: "Backend" },
  { name: "Redis", image: "/skills/redis.png", category: "Backend" },
  { name: "Googling", image: "/skills/google.png", category: "Others" },
  { name: "Git", image: "/skills/git.png", category: "Others" },
  { name: "GitHub", image: "/skills/github.png", category: "Others" },
  { name: "Jira", image: "/skills/jira.png", category: "Others" },
  { name: "Vercel", image: "/skills/vercel.png", category: "Others" },
  { name: "Netlify", image: "/skills/netlify.png", category: "Others" },
];

const Skills = () => {
  const categories = Array.from(
    new Set(skillData.map((s: { category: any }) => s.category))
  );
  const [category, setCategory] = useState(categories[0]);

  return (
    <section
      id="skills"
      className="min-h-screen mt-12 md:mt-0 mx-4 md:mx-0 xl:my-20 2xl:my-0"
    >
      <h2 className="text-4xl text-center">Tech Stack</h2>

      <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-grey-800 p-2 flex justify-between items-center gap-3 rounded-md">
        {categories.map((c: string, i: number) => (
          <span
            key={i}
            onClick={() => setCategory(c)}
            className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-violet-600 dark:bg-violet-600 text-white"
                : "bg-white dark:bg-grey-800 hover:bg-gray-100 hover:dark:bg-grey-900  text-black"
            } transition-all capitalize`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {skillData
          .filter((s) => s.category.toLowerCase() === category.toLowerCase())
          .map((s: any, i: number) => (
            <SkillCard key={i} {...s} />
          ))}
      </div>
    </section>
  );
};

export default Skills;
