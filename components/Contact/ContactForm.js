import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useDarkMode } from "../../context/darkModeContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FadeContainer,
  mobileNavItemSideways,
} from "../../content/FramerMotionVariants";
import Ripples from "react-ripples";
import { useRef } from "react";

const initialFormState = {
  to_name: "Jesús Medina",
  first_name: "",
  last_name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Form() {
  const [emailInfo, setEmailInfo] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useDarkMode();

  /* Here we send an Email using emailjs you can get service_id, template_id, and user_id after sign up on their site  */
  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_t37zq83",
        "template_d85xss8",
        emailInfo,
        "BNSh2rdJs2u2nVr4C"
      )
      .then((res) => {
        setLoading(false);
        setEmailInfo(initialFormState);
        toast.success("Message Sent ✌");
      })
      .catch((err) => {
        console.log(err.text);
        setLoading(false);
        toast.error("😢 " + err.text);
      });
  }

  /* For Form Validation I simply check each field should not be empty */
  function validateForm() {
    for (const key in emailInfo) {
      if (emailInfo[key] === "") return false;
    }
    return true;
  }

  /* When user is typing and  Press Ctrl+Enter then it will try to send the mail after validating */
  function submitFormOnEnter(event) {
    if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
      if (validateForm()) {
        return sendEmail(event);
      }
      toast.error("Looks like you have not filled the form");
    }
  }

  return (
    <>
      <motion.form
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center max-w-xl mx-auto my-10 dark:text-gray-300"
        onSubmit={sendEmail}
        onKeyDown={submitFormOnEnter}
      >
        {/* First Name And Last Name */}
        <div className="w-full grid grid-cols-2 gap-6">
          <motion.div
            variants={mobileNavItemSideways}
            className="relative z-0 w-full mb-6 group"
          >
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              className="block py-2 mt-2 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              value={emailInfo.first_name}
              onChange={(e) =>
                setEmailInfo({
                  ...emailInfo,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </motion.div>
          <motion.div
            variants={mobileNavItemSideways}
            className="relative z-0 w-full mb-6 group"
          >
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              value={emailInfo.last_name}
              onChange={(e) =>
                setEmailInfo({
                  ...emailInfo,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </motion.div>
        </div>
        <motion.div
          variants={mobileNavItemSideways}
          className="relative z-0 w-full mb-6 group"
        >
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-black dark:border-gray-400 focus:outline-none focus:ring-0 focus:dark:border-black focus:border-black peer"
            placeholder=" "
            required
            value={emailInfo.email}
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </motion.div>
        <motion.div
          variants={mobileNavItemSideways}
          className="relative z-0 w-full mb-6 group"
        >
          <input
            type="subject"
            name="subject"
            id="floating_subject"
            className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
            value={emailInfo.subject}
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="floating_subject"
            className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Subject
          </label>
        </motion.div>
        <motion.div
          variants={mobileNavItemSideways}
          className="relative z-0 w-full mb-6 group"
        >
          <textarea
            name="message"
            id="floating_message"
            className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-slate-500 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-black focus:outline-none focus:ring-0  peer min-h-[100px] resize-y focus:border-black"
            placeholder=" "
            required
            value={emailInfo.message}
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="floating_message"
            className="peer-focus:font-medium absolute text-sm text-slate-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </motion.div>

        <motion.div
          variants={mobileNavItemSideways}
          className="w-full sm:max-w-sm rounded-lg overflow-hidden shadow-lg"
        >
          <Ripples
            className="flex w-full justify-center"
            color="rgba(225, 225,225,0.2)"
          >
            <button
              type="submit"
              className="text-white bg-neutral-800  dark:bg-darkSecondary font-medium rounded-lg text-sm w-full px-4 py-3 text-center relative overflow-hidden transition duration-300 outline-none active:scale-95 disabled:opacity-50 disabled:active:scale-100"
            >
              <div className="relative w-full flex items-center justify-center">
                <p
                  className={
                    loading ? "inline-flex animate-spin mr-3" : "hidden"
                  }
                >
                  <AiOutlineLoading className="font-bold text-xl" />
                </p>
                <p>{loading ? "Sending..." : "Send"}</p>
              </div>
            </button>
          </Ripples>
        </motion.div>
      </motion.form>
      <ToastContainer
        theme={isDarkMode ? "dark" : "light"}
        style={{ zIndex: 1000 }}
      />
    </>
  );
}
