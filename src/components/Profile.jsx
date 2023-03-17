import React from 'react'
import LineGradient from './LineGradient'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import profile from '../assets/avatar.jpg'

const Profile = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id='profile' className='contact py-48'>
            {/* HEADINGS */}
            <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-space font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> IF YOU LIKE
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: [null, 1.2, 1.1] }}
          className="basis-1/2 flex justify-center"
        >
          <div className='bg-black rounded-md p-4 flex flex-col items-center'>
            <div className='avatar'>
              <img src={profile} alt='profile' className='h-32 rounded-full' />
            </div>
              <div className=' font-semibold font-poppins text-2xl mt-2'>PROFILE</div>
              <div className=' text-xl text-gray-500 '>Evanza Agusta Setiawan</div>
              <div className='flex justify-between items-center my-4'>
                <div className='flex flex-col font-semibold whitespace-normal'>
                  <div className='text-indigo-500 whitespace-normal'>Kelas : XII SIJA C</div>
                  <div className='text-indigo-500 whitespace-normal'>Mata Pelajaran : SaaS</div>
                  <div className='text-indigo-500 whitespace-normal'>Pembimbing : Maya Yashbir S.pd.</div>
                  <div className='text-indigo-500 whitespace-normal'>Goal : Full-Stack Developer</div>
                </div>
              </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
            method="POST"
          >
            <input
              className="w-full border-b-4 rounded-md bg-violet font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red-600 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full border-b-4 rounded-md bg-violet font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full border-b-4 rounded-md bg-violet font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red-600 mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="p-5 border-b-4 rounded-md bg-dark-purple font-semibold text-black mt-5 hover:bg-sky hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Profile