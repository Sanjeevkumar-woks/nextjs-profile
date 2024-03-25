"use client";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    name: "Fileshare",
    desc: "Under Construction.....",
    image:
      "https://raw.githubusercontent.com/Sanjeevkumar-woks/Portfolio/master/src/components/Projects/Project11.png",
    category: "Fullstack-MERN",
    links: {
      visit: "https://fileshare-rosy.vercel.app",
      code: "https://github.com/Sanjeevkumar-woks/fileshare",
    },
  },
  {
    name: "BookmyShow",
    desc: "Full-Stack Bookmyshow App with Admin Dashboard. MERN Stack WebApp.",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Project06.png?raw=true",
    category: "Fullstack-MERN",
    links: {
      visit: "https://guvi-hackathon-2-sanjeev.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/bookmyshow",
    },
  },
  {
    name: "React Projects",
    desc: "Fullstack Projects Dashboard Which is the collection of React projects with Admin Controle",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Project02.png?raw=true",
    category: "Fullstack-MERN",
    links: {
      visit: "https://sanjeev-react-projects.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/reactprojectss",
    },
  },
  {
    name: "Flipkart",
    desc: "Fullstack Flipkart with  Paytm payment gateway",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Project01.png?raw=true",
    category: "Fullstack-MERN",
    links: {
      visit: "https://flipkartwebs.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/flipkart-mern",
    },
  },
  {
    name: "YouTube MERN",
    desc: "Full-Stack Youtube with Admin Dashboard. MERN Stack WebApp.",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Project04.png?raw=true",
    category: "Fullstack-MERN",
    links: {
      visit: "https://sanjeev-youtube.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/youtube",
    },
  },
  {
    name: "Piza Delivary",
    desc: "Full-Stack Piza Delivary App with Admin Dashboard. MERN Stack WebApp.",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Projects09.png?raw=true",
    category: "Fullstack-MERN",
    links: {
      visit: "https://sanjeevs-pizza-app.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/piza-delivary",
    },
  },
  {
    name: "Bubloo Chat",
    desc: "Chatting App built using React and Firebase. Its a Live Chat APP  with google Auth",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Projects03.png?raw=true",
    category: "Firebase",
    links: {
      visit: "https://bubloo2716.web.app/",
      code: "https://github.com/Sanjeevkumar-woks/Webchat",
    },
  },
  {
    name: "JavaScript Projects Website",
    desc: "This Website is specially Built To showcase All Major JavaScript Projects",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Project03.png?raw=true",
    category: "Javascript",
    links: {
      visit: "https://sanjeev-javascript-projects.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/JavaScript-Projects",
    },
  },
  {
    name: "Resume Generator",
    desc: "A Basic FrontEnd React app.",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Project05.png?raw=true",
    category: "Reactjs",
    links: {
      visit: "https://resumes-generator.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/resumegenerator",
    },
  },

  {
    name: "Tic-Tac-Toe",
    desc: "A Basic React Application, demonstrating React Hooks",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Project07.png?raw=true",
    category: "React",
    links: {
      visit: "https://spiffy-starlight-54d8ff.netlify.app//",
      code: "https://github.com/Sanjeevkumar-woks/tic-tac-toe",
    },
  },
  {
    name: "Weather App",
    desc: "A Basic Javascript App using Weather Api",
    image:
      "https://github.com/Sanjeevkumar-woks/Portfolio/blob/master/src/components/Projects/Project08.png?raw=true",
    category: "Javascript",
    links: {
      visit: "https://sanjeev-weather-forecast.netlify.app/",
      code: "https://github.com/Sanjeevkumar-woks/Weather-Forecast",
    },
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  // const categories = ['All', ...Array.from(new Set(projects.map((s) => s.category)))]
  const categories = [...Array.from(new Set(projects.map((s) => s.category)))];

  // const [category, setCategory] = useState(categories[0] || "All")
  const [category, setCategory] = useState(categories[0]);

  const [filteredProjects, setFilteredProjects] = useState(projects as any[]);
  const [viewAll, setViewAll] = useState(false);

  const filterProjects = (cat: string) => {
    setViewAll(false);
    setCategory(cat);
    // cat === "All" ? setFilteredProjects(projects) :
    setFilteredProjects(
      projects.filter(
        (p: any) => p.category.toLowerCase() === cat.toLowerCase()
      )
    );
  };

  useEffect(() => {
    filterProjects(
      categories.includes("MERN Stack") ? "MERN Stack" : categories[0]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="text-4xl text-center">Projects</h2>

      <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
        {categories.map((c: string = "", i: number) => (
          <span
            key={i}
            onClick={() => filterProjects(c)}
            className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900"
            } cursor-pointer transition-all`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {filteredProjects
          .slice(0, viewAll ? filteredProjects.length : 6)
          .map((p: any, i: number) => (
            <ProjectCard key={i} {...p} />
          ))}
      </div>

      {filteredProjects.length > 6 && (
        <ViewAll
          scrollTo="projects"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
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
