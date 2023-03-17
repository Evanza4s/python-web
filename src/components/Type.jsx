import React from 'react'
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import scatter from "../assets/scatter.png";
import line from "../assets/line.png";
import wave from "../assets/wave.png";
import bar from "../assets/bar.png";
import pie from "../assets/pie.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const typeVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Type = () => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-yellow z-30 flex flex-col justify-center items-center text-center p-16 text-dark-purple`;
    const typeTitle = [
      {
        id: 1,
        src: scatter,
        title: "Scatter Chart",
        des: "Scatter plot adalah salah satu jenis visualisasi data yang digunakan untuk melihat hubungan antara dua variabel numerik yang diproyeksikan pada sumbu x dan y.",
      },
      {
        id: 2,
        src: line,
        title: "Line Chart",
        des: "Line plot adalah salah satu jenis visualisasi data yang digunakan dan merupakan jenis plot dasar dalam visualisasi data. Jenis plot ini menampilkan rangkaian titik data yang terhubung dengan segmen garis lurus.",
      },
      {
        id: 3,
        src: wave,
        title: "Wave Chart",
        des: "Line plot adalah salah satu jenis visualisasi data yang digunakan dan merupakan jenis plot dasar dalam visualisasi data. Jenis plot ini menampilkan rangkaian titik data yang terhubung dengan segmen gelombang.",
      },
      {
        id: 4,
        src: bar,
        title: "Bar Chart",
        des: "Bar plot atau bar chart adalah visualisasi data bar dari ukuran sebuah fitur/variabel. Bar plot biasanya merepresentasikan jumlah data dari suatu kategori tertentu.",
      },
      {
        id: 5,
        src: pie,
        title: "Pie Chart",
        des: "Pie chart adalah jenis viusalisasi data yang direpresentasikan  berbentuk lingkaran yang dibagi menjadi irisan-irisan untuk menggambarkan proporsi numerik.",
      },
    ]
  return (
    <section id="type" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-space font-semibold text-4xl">
            <span className="text-yellow">CHART</span>MATPLOTLIB
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Berikut beberapa contoh Diagram dengan menggunakan library Matplotlib.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-sky
              max-w-[400px] max-h-[400px] text-2xl font-poppins font-semibold"
          >

            MATPLOTLIB CHARTS
          </div>

          {
          typeTitle.map(({id, src, title, des}) => (
            <motion.div variants={typeVariant} className="relative">
            <div key={id} className={overlayStyles}>
        
              <p className="text-2xl font-space">{title}</p>
              <p className="mt-7 font-poppins">
                {des}
              </p>
            </div>
              <img src={src} alt={title} />
          </motion.div>
          ))
        }

        </motion.div>
      </div>
    </section>
  )
}

export default Type