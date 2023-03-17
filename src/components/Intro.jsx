import React from 'react'
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import matplotlib from "../assets/matplotlib.png"

const Intro = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="intro" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-space font-semibold text-4xl mb-5">
            PYTHON <span className="text-purple">MATHPLOTLIB</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          library Python yang fokus pada visualisasi data seperti plot grafik.
          Matplotlib pertama kali diluncurkan oleh John D.Hunter dan sekarang sudah dikelola oleh tim developer yang besar.
          Pada mulanya matplotlib dirancang untuk menghasilkan plot grafik yang sesuai pada publikasi jurnal atau artikel ilmiah.
          </p>
        </motion.div>

        <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
          <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-sky before:z-[-1]"
            >
              <img
                alt="mathplotlib"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[400px]"
                src={matplotlib}
              />
            </div>
          ) : (
            <img alt="mathplotlib" className="z-10 w-full max-w-[200px] md:max-w-[400px]" src={matplotlib} />
          )}
        </div>
        </motion.div>

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-poppins font-semibold text-5xl">01</p>
              <p className="font-poppins font-semibold text-3xl mt-3">
                Fungsi
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-sky absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          Matplotlib dapat digunakan untuk melakukan visualisasi data secara 2D maupun 3D 
          dan menghasilkan suatu gambar yang berkualitas bahkan dapat disimpan dengan format gambar 
          seperti JPEG, JPG, dan PNG.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className=" font-poppins font-semibold text-5xl">02</p>
              <p className=" font-poppins font-semibold text-3xl mt-3">
                Kelebihan
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-emerald-400 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          - Library chart yang fungsinya banyak <br />
          - Meningkatkan produktivitas developer <br />
          - Mendukung IoT <br />
          - Embeddable <br />
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-poppins font-semibold text-5xl">03</p>
              <p className="font-poppins font-semibold text-3xl mt-3">
                Kekurangan
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red-400 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          - Eksekusi chartnya yang lambat <br />
          - Lemah dalam komputasi mobile <br />
          - Kesalahan Run Time <br />
          - Memiliki batasan desain chart <br />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;