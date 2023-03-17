import React from 'react';
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from '../assets/logo.png';
import { FaTimes,FaBars } from 'react-icons/fa';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-sky" : ""
      } hover:text-sky transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-purple";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img src={logo} alt="" className='h-10 w-auto' />

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 text-xl font-poppins font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Intro"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Type"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Code"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Profile"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : ( 
            <button
            className="rounded-full bg-dark-purple p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <FaBars size={30}/>
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-violet w-[300px] transition-opacity">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FaTimes size={30}/>
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-blue-500 transition-opacity">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Intro"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Type"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Code"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Profile"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default NavBar;