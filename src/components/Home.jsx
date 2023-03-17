import React from 'react'
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';
import python from '../assets/python.png';
import SocialMediaIcons from "../components/SocialMediaIcons";

const Home = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      >
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[300px]
            before:w-full before:max-w-[300px] md:before:max-w-[500px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]"
              src={python}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[300px] md:max-w-[500px]"
            src={python}
          />
        )}
      </div>
      </motion.div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-space z-10 text-center md:text-start">
            Python {""}
            <span
              className="xs:relative xs:text-violet xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Math
              plotlib
            </span>
          </p>

          <p className="mt-10 mb-7 font-poppins text-sm text-center md:text-start">
          Python adalah bahasa pemrograman tujuan umum yang ditafsirkan, tingkat tinggi.
          Dibuat oleh Guido van Rossum dan pertama kali dirilis pada tahun 1991,
          filosofi desain Python menekankan keterbacaan kode dengan penggunaan spasi putih yang signifikan. 
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;