"use client";
import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";
import { projects } from "@/app/constants/projects";

const Projects = () => {
  return (
    <section id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="text-4xl text-center">Projects</h2>
      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {projects.map((p: any, i: number) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({
  handleClick,
  title,
  scrollTo,
}: {
  handleClick: MouseEventHandler;
  title: string;
  scrollTo: string;
}) => {
  return (
    <>
      <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        {title === "View All" ? (
          <button
            onClick={handleClick}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } py-1.5 rounded-md hover:shadow-xl transition-all`}
          >
            {title}
          </button>
        ) : (
          <Link
            to={scrollTo}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
            offset={-60}
            smooth={true}
            duration={500}
            // @ts-ignore
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        )}
      </div>
    </>
  );
};
