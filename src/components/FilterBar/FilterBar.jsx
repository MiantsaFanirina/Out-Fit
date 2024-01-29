import React, { useState } from 'react'

// FAKE API
import { FilterLinks as links } from '../../fakeapi/links.js'

// Icons
import { BiCategory } from "react-icons/bi"
import { IoCloseSharp } from "react-icons/io5"
import { Link } from 'react-router-dom';

function FilterBar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="relative h-[60px] bg-white flex justify-center">
            
            <ul className="w-full h-full uppercase md:flex hidden items-center justify-center gap-8 font-[Poppins]">
                <NavItem/>
            </ul>
            <ul className={
                `md:hidden bg-[rgba(255,244,244,0.9)] backdrop-filter backdrop-blur-sm w-full h-screen bottom-0 py-24 pl-4 duration-500 ${open ? "translate-x-0 opacity-100  text-opacity-100" : "translate-x-[full] opacity-0 text-opacity-0"}`
            }>
                <NavItem/>
            </ul>
            <div className="curosor-pointer md:hidden flex items-center justify-center absolute right-6 top-[50%] translate-y-[-50%] md:p-3 p-1 rounded-full bg-pink-400 text-white" onClick={() => setOpen(!open)}>
                {!open ? <><span className="text-sm font-bold tracking-widest mx-2">Categories</span> <BiCategory className="md:text-2xl text-lg mr-2"/></> : <IoCloseSharp className="md:text-2xl text-lg"/>}
            </div>
        </nav>
    )
}

function NavItem({children})
{
    return(
        <>

            {links.map((item) => (
                <div key={item.name}>
                    <div className="px-3 text-left md:cursor-pointer group">
                        <h1 className='py-7'>{item.name}</h1>
                        {item.submenu && (
                            <div key={item.name} className="absolute">
                                <div className="absolute top-0 w-[500px]">
                                    <div className="bg-[rgba(255,255,255,0.62)] backdrop-filter backdrop-blur-sm p-3.5 hidden grid-cols-3 gap-10 group-hover:grid hover:grid shadow-lg">
                                        {item.sublinks.map((sublink) => (
                                            <div key={sublink.Head}>
                                                <h1 className="text-lg text-pink-400 font-semibold">{sublink.Head}</h1>
                                                {sublink.sublink.map((link) => (
                                                    <li className="text-sm text-gray-600 my-2.5" key={link.name}>
                                                        <Link className="hover:text-pink-400" to={link.link}>
                                                            {link.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            ))}
            
        </>
    )
}



export default FilterBar

