import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="min-h-[90vh] pt-12">
      <h2 className="text-4xl text-center">About Me</h2>

      <div className="w-full lg:w-11/12 2xl:w-4/5 mt-2 lg:mt-20 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3 text-black">
          <img
            alt="profile"
            width={1000}
            height={1000}
            loading={"lazy"}
            className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100"
            src="https://raw.githubusercontent.com/jigar-sable/Portfolio-Website/main/assets/images/hero.png"
          />
          <span className="font-medium font-sans">I Build Stuff 🚀</span>
        </div>

        <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold">SanjeevKumar</p>
            <p className="text-violet-800 w-fit rounded py-1 px-2 text-sm dark:text-violet-600 bg-violet-50 dark:bg-violet-900/10">
              FullStack Developer
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">
              I am a Full-Stack developer based in Bangalore, India. My journey
              in web development began during my first year of college. I&apos;m
              passionate about creating beautiful, functional, and user-friendly
              websites and applications, and I&apos;m constantly pushing myself
              to learn and grow as a developer. Love building full-stack clones
              and side projects.
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              <Link
                href=""
                target="_blank"
                className=" flex items-center justify-center text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
              >
                Resume
                <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
