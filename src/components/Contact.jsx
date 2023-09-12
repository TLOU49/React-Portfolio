import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l49pv83",
        "template_7q9u43i",
        form.current,
        "Ccf3i5LJyDOJ65Dzf"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="text-[2rem] flex font-bold text-center justify-center my-6">
        Let's <h1 className="pl-2 text-dean_blue">Connect!</h1>
      </h1>
      <p className="ml-9 text-[13px] text-gray-500">
        {" "}
        Would love to connect with fellow developers, employers looking for
        developers, or anyone looking to get web development done.
      </p>
      <div className="flex text-center justify-center ">
        <form
          ref={form}
          className="flex flex-col mx-12 my-4 border-2 border-dean_blue px-4 w-fit rounded-md"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="from_name"
            id=""
            placeholder="Please enter your name"
            className="font-semibold mt-2 rounded text-[13px] focus:outline-none pl-3"
          />
          <input
            type="email"
            name="email_address"
            id=""
            placeholder="Please enter your email..."
            className="my-3 w-96 text-[13px] focus:outline-none invalid:text-pink-600 rounded pl-3"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Please enter subject..."
            className="my-3 w-96 text-[13px] focus:outline-none rounded pl-3 font-semibold"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Enter message"
            className="text-[13px] focus:outline-none rounded h-20 w-96 pl-3"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className=" my-2 h-9 w-20 text-center text-sm mx-auto bg-violet-700 rounded font-semibold text-white hover:bg-violet-100 hover:text-violet-700"
          />
        </form>
      </div>
      <span className="text-[12px] text-gray-500">
        <h1 className="flex mx-9 font-bold">
          Name: <p className="px-2 font-normal">Dean Mabuela</p>
        </h1>
        <p className="flex mx-9 font-bold">
          Profile:
          <p className="px-2 font-normal">Fullstack developer</p>
        </p>
        <p className="flex mx-9 font-bold">
          Email: <p className="px-2 font-normal">dean.mabuela@gmail.com</p>
        </p>
        <p className="flex mx-9 font-bold">
          Phone: <p className="px-2 font-normal">+27 79 964 8259</p>
        </p>
      </span>
    </div>
  );
};

export default Contact;
