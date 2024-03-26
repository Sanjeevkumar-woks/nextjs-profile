import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="mt-10 md:mt-16">
      <h2 className="text-center text-4xl">Contact Me</h2>

      <div className="w-full lg:w-5/6 2xl:w-3/4 mx-auto flex justify-between rounded-xl">
        <Image
          unoptimized={true}
          quality={100}
          alt="contact"
          src="/contact.png"
          className="hidden md:block w-1/2 h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="flex-1 p-4 ">
          <h3 className="text-2xl">Get in touch</h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            My inbox is always open. Whether you have a question or just want to
            say hello, I will try my best to get back to you!
          </p>
          <form
            action="https://submit-form.com/eBRgZ9U3G"
            className="flex flex-col gap-4  p-2"
          >
            <input
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 text-black"
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              required
            />
            <input
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 text-black"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <textarea
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 text-black"
              id="message"
              name="message"
              placeholder="Enter Message"
              required
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
