import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = () => {
  return (
    <footer className="h-64 bg-dark-purple pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-poppins font-semibold text-2xl text-yellow">
            Evanza Agusta Setiawan
          </p>
          <p className="font-poppins text-md text-yellow">
            ©2023 VANZART. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer