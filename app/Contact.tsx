"use client";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
const formSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const HandleSubmit = () => {
    console.log(form.values);
  };

  const form = useFormik({
    initialValues,
    onSubmit: HandleSubmit,
    validationSchema: formSchema,
  });
  //console.log(form.values);
  return (
    <section id="contact">
      <h2 className="text-center text-4xl">Contact Me</h2>

      <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
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
          <div className="flex flex-col gap-4  p-2">
            <input
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 text-black"
              type="text"
              name="name"
              placeholder="Enter Name"
              value={form.values?.name}
              onChange={form.handleChange}
            />
            <input
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 text-black"
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.values?.email}
              onChange={form.handleChange}
            />
            <input
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4 text-black"
              type="text"
              name="message"
              placeholder="Enter Message"
              value={form.values?.message}
              onChange={form.handleChange}
            />
            <button
              onClick={form.submitForm}
              className=" flex items-center justify-center text-sm md:text-base bg-violet-600 dark:bg-violet-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
