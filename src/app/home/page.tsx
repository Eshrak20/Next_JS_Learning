
"use client"
import React from 'react';
import Image from 'next/image'; // Import Image
import logo from '@/assets/logo.svg'; // Import logo
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useTheme } from 'next-themes';


const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // Use setTheme to change the theme
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (

    <>

      <div className={`flex justify-center  ${theme === 'light' ? 'text-black' : 'text-white'} `}>
        <div className="navbar fixed z-10 bg-opacity-25 bg-white text-black max-w-screen-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow w-52 bg-white bg-opacity-5 rounded-sm"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/menu">About</Link>
                </li>
                <li>
                  <Link href="/dashboard/mycart">
                    <button className="flex gap-3 items-center">
                      <FaShoppingCart />
                      {/* <div className="badge badge-error">+{cart?.length || 0}</div> */}
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/order/Salads">Services</Link>
                </li>
                <li>
                  <Link href="/order/Salads">Blog</Link>
                </li>
                <li>
                  <Link href="/order/Salads">Contact</Link>
                </li>
              </ul>
            </div>
            <Image src={logo} width = "70" height = "70"alt="" />

            {/* <a className="btn btn-ghost normal-case text-xl">Car-Doctor</a> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 bg-white bg-opacity-5 rounded-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">About</Link>
              </li>
              <li>
                <Link href="/order/Salads">Services</Link>
              </li>
              <li>
                <Link href="/order/Salads">Blog</Link>
              </li>
              <li>
                <Link href="/order/Salads">Contact</Link>
              </li>
              <li>
                <Link href="/dashboard/mycart">
                  <button className="flex gap-3 items-center">
                    <FaShoppingCart />
                    {/* <div className="badge badge-error">+{cart?.length || 0}</div> */}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
          <button  style={{color:'#FF3811'}} className={` btn btn-ghost normal-case text-xl     ${theme === 'light' ? '' : 'text-white'} `} onClick={toggleTheme}>Appointment</button>

          </div>
        </div>
      </div>



    </>
  );
};

export default NavBar;
