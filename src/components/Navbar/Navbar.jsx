import React from 'react'
import './Navbar.sass'


// Icons
import { MdOutlineShoppingBag } from "react-icons/md"
import { GoHome } from "react-icons/go"


// Router
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <nav className="Navbar flex justify-between items-center bg-white text-gray-800 shadow w-screen fixed top-0 z-[9999]">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <Link className="text-2xl font-bold font-heading" to="">
            Miantsa
        </Link>
        <ul className={"hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12"}>
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="shop">Shop</NavLink></li>
        </ul>
        <div className="hidden xl:flex items-center space-x-5">
            <NavLink to="news">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </NavLink>
            <NavLink className="flex items-center " to="cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
                </span>
            </NavLink>
            <NavLink className="flex items-center " to="profile">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </NavLink>
            
        </div>
        </div>
        <NavLink to="" className="flex items-center mr-3 text-2xl xl:hidden"><GoHome /></NavLink>
        <NavLink to="shop" className="flex items-center mr-3 text-2xl xl:hidden"><MdOutlineShoppingBag /></NavLink>
        <NavLink to="cart" className="xl:hidden flex mr-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
            </span>
        </NavLink>
        <NavLink to="profile" className="flex items-center mr-6 text-2xl xl:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </NavLink>
    </nav>
  )
}

export default Navbar