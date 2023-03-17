import React, { useState } from 'react'
import { motion } from 'framer-motion';
import LineGradient from "../components/LineGradient";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcScatterPlot } from 'react-icons/fc';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CiWavePulse1 } from 'react-icons/ci';
import { BsBarChartFill, BsPieChartFill} from 'react-icons/bs';
// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper';
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Code = () => {
  const [active, setActive] = useState(null)
  const langs = [
    {
      name: 'Scatter Chart',
      child: (
        <>
        <FcScatterPlot size={30} />
        </>    
    ),
    code: (
      <p className='mt-3 font-poppins'>import matplotlib.pyplot as plt <br />
      <br />
      x = [1,2,3,-4,6,-8,9,11]<br />
      y = [-2,3,5,4,6,-7,8,10]<br />
      <br />
      plt.title('Diagram Kartesius')<br />
      plt.scatter(x,y, color="blue", marker='o', label='item1')<br />
      <br />
      plt.xlabel('Nilai X')<br />
      plt.ylabel('Nilai Y')<br />
      <br />
      plt.grid(True)<br />
      plt.legend()<br />
      <br />
      plt.show()</p>
    ),
    color: "hue-rotate-[240deg]"
  },
  {
    name: 'Line Chart',
    child: (
      <>
      <AiOutlineFundProjectionScreen size={30} />
      </>    
  ),
  code: (
    <p className='mt-3 font-poppins'>import matplotlib.pyplot as plt<br />
    <br />
    y = [70,80,60,80,83]<br />
    x = [2019,2020,2021,2022,2023]<br />
    plt.plot(x, y)<br />
    <br />
    plt.xlabel('Persentase Diterima Kerja')<br />
    plt.ylabel('Tahun')<br />
    <br />
    plt.title('Presenstasi Penerimaan Kerja SIJA')<br />
    plt.grid(True)<br />
    <br />
    plt.show()<br /></p>
  ),
  color: "hue-rotate-[20deg]"
},
{
  name: 'Wave Chart',
  child: (
    <>
    <CiWavePulse1 size={30} />
    </>    
),
code: (
  <p className='mt-3 font-poppins'>import matplotlib.pyplot as plt<br />
  import numpy as np<br />
  <br />
  x = np.linspace(0, 10, 100)<br />
  y = 4 + 2 * np.sin(2 * x)<br />
  <br />
  fig, ax = plt.subplots()<br />
  <br />
  ax.plot(x, y, linewidth=2.0)<br />
  <br />
  ax.set(xlim=(0, 8), xticks=np.arange(1, 8),<br />
         ylim=(0, 8), yticks=np.arange(1, 8))<br />
         <br />
  plt.show()</p>
),
color: "hue-rotate-[340deg]"
},
{
  name: 'Bar Chart',
  child: (
    <>
    <BsBarChartFill size={30} />
    </>    
),
code: (
  <p className='mt-3 font-poppins'>import matplotlib.pyplot as plt<br />
  from matplotlib import style<br />
  <br />
  style.use('ggplot')<br />
  <br />
  prodi = ['SIJA', 'RPL', 'TEI', 'TOI', 'MEKA', 'PFPT']<br />
  jumlah_mhs = [98, 105, 80, 100, 120, 115]<br />
  <br />
  plt.figure(figsize=(12,7))<br />
  plt.bar(prodi, jumlah_mhs, color='green')<br />
  <br />
  plt.title('Jumlah Siswa Per Program Studi', size=16)<br />
  plt.ylabel('Jumlah Siswa', size=14)<br />
  plt.xticks(size=12)<br />
  plt.yticks(size=12)<br />
  <br />
  plt.show()</p>
),
color: "hue-rotate-[168deg]"
},
{
  name: 'Pie Chart',
  child: (
    <>
    <BsPieChartFill size={30} />
    </>    
),
code: (
  <p className='mt-3 font-poppins'>import matplotlib.pyplot as plt<br />
  <br />
  labels = ['Hacker', 'Web Developer', 'UI/UX Designer', 'System Security']<br />
  quantity = [10, 7, 3, 14]<br />
  colors = ['red', 'skyblue', 'lightgreen', 'gold']<br />
  <br />
  plt.title('Daftar Bidang Keahlian Siswa XII SIJA C')<br />
  plt.pie(quantity, labels=labels, colors=colors,<br />
          autopct='%1.1f%%', shadow=True, startangle=90)<br />
          <br />
  plt.axis('equal')<br />
  plt.show()</p>
),
color: "hue-rotate-[225deg]"
}
  ]
  const card = 'w-96 relative cursor-pointer border-b-4 rounded-md bg-gradient-to-t from-white/20 h-44 text-center px-3 py-7 self-end duration-500 delay-100';
  return (
    <section id='code'>
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className=" font-space font-semibold text-4xl">
            <span className="text-yellow">CODE</span>MATPLOTLIB
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
      <div className="flex justify-center items-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          </motion.div>
          </div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="relative">
            <div className='swiper-container'>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={(cur) => setActive(cur.realIndex)}
      loop={true}
      centeredSlides={true}
      speed={800}
      autoplay={{
        delay: 3000,
      }}
      modules={[Autoplay]}
      breakpoints= {{
        480: {
          width: 480,
          slidesPerView: 1,
          spaceBetween: 20,
        },
        620: {
          width: 620,
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          width: 768,
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1060: {
          width: 1060,
          slidesPerView: 2,
          spaceBetween: 5,
        },
        1200: {
          width: 1200,
          spaceBetween: 5,
        },
        2000: {
          width: 2000,
          spaceBetween:5
        }
      }}
    >
      {
        langs.map((langs,i) =>(
          <SwiperSlide key={i}>
        <div className='h-96 flex place-items-center'>
          <div className={`${card} ${active === i && 'card-active' } scrollbar-thin scrollbar-corner-red-500 scrollbar-track-transparent scrollbar-thumb-red-600  to-red-500 ${langs.color} border-red-500`}>
            <div className={`logo`}>
              {langs.child}
            </div>
            <h2 className=' text-3xl mt-2 font-space font-semibold'>{langs.name}</h2>
            <div className=''>
            {langs.code}
            </div>
          </div>
        </div>
      </SwiperSlide>
        ))
      }
      
    </Swiper>
            </div>
          
          </motion.div>
          
          
    </section>
  )
}

export default Code