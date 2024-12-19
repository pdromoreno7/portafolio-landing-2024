"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contacto");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contactame</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Por favor contactame direactamente a mi correo{" "}
        <a className="underline" href="mailto:example@gmail.com">
          pdromorenodev@gmail.com
        </a>{" "}
        o atraves del formulario:
      </p>

      <form
        className="flex flex-col mt-10 dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email enviado con exito");
        }}
      >
        <input
          className="px-4 transition-all rounded-lg h-14 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Tu email"
        />
        <textarea
          className="p-4 my-3 transition-all rounded-lg h-52 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
          name="message"
          placeholder="Tu mensaje"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
