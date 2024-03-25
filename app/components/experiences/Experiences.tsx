"use client";
import { useState } from "react";
import { ViewAll } from "../projects/Projects";
import ExperienceCard from "./ExperienceCard";
const experiencesArr = [
  {
    company: "Newtral.io",
    position: "Fullstack Developer Intern",
    desc: [
      "Full-Stack Development: Drive full-stack projects using Next.js, ReactJS, and Node.js for robust applications.",
      "Frontend Expertise: Utilize JavaScript, TypeScript, antd, and Figma for intuitive UI/UX.",
      "Backend Management: Manage databases (MySQL, MongoDB) and backend (Node.js, Express) for optimal performance.",
      "Cloud Deployment: Deploy solutions on AWS for scalability, reliability, and cost-efficiency.",
    ],
    institute: "",
    degree: "",
    duration: "Oct-2023 to Present",
  },
  {
    company: "Amazon",
    position: "MachineLearning Data Associate",
    desc: [
      "ML Data Analysis: Analyse and process machine learning data to extract valuable insights.",
      "Auditing through SOPs: Implement standard operating procedures (SOPs) to audit data, providing corrections and recommendations to the GO-AI team.",
    ],
    institute: "",
    degree: "",
    duration: "Oct-2020 to Oct-2023",
  },
];
const educationsArr = [
  {
    company: "",
    position: "",
    desc: [],
    institute: "Angadi Institute Of Technology and Management",
    degree: "Electrical and Electronics",
    duration: "2014-2018",
  },
  {
    company: "",
    position: "",
    desc: [],
    institute: "Guvi Geeks- IITM",
    degree: "FullStack Development",
    duration: "2022-2023",
  },
];

const Experiences = () => {
  const [show, setShow] = useState("Experience");
  const [viewAll, setViewAll] = useState(false);
  const [experiences, setExperiences] = useState([...experiencesArr]);
  const [educations, setEducations] = useState([...educationsArr]);

  return (
    <section id="experience" className="min-h-screen">
      <h2 className="text-4xl text-center">
        {show == "Experience" ? "Experience" : "Education"}
      </h2>

      <div className="w-fit mx-auto mt-6 p-2 text-red-50 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {["Experience", "Education"].map((e, i) => (
          <button
            key={i}
            onClick={() => setShow(e)}
            className={`py-2 px-4 rounded-md transition-colors ${
              show === e
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900 text-black"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {viewAll
            ? (show === "Experience" ? experiences : educations).map((e, i) => (
                // @ts-ignore
                <ExperienceCard key={i} {...e} index={i} />
              ))
            : (show === "Experience" ? experiences : educations)
                .slice(0, 2)
                .map((e, i) => (
                  // @ts-ignore
                  <ExperienceCard key={i} {...e} index={i} />
                ))}
        </div>
      </div>

      {(show === "Experience" ? experiences : educations).length > 2 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </section>
  );
};

export default Experiences;
