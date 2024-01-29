import React from 'react'

// STYLING
import "./ProductSection.sass"

//Assets
import Product from "../../assets/products/product1.jpeg"

// icons
import { IoAddCircle } from "react-icons/io5"
import { RiStarSFill, RiStarSLine } from "react-icons/ri"


function ProductSection() {
  return (
    <div className="ProductSection relative w-full flex flex-col items-center bg-pink-400 md:p-20 p-10 md:mt-10 mt-0 rounded-lg overflow-hidden">
                        
        {/* MORPH BACKGROUND */}
        <div className="absolute left-[60px] bottom-[50px] w-[200px] h-[200px] bg-[rgb(116,62,155)] filter blur-[80px] z-1 rounded-full"></div>
        <div className="absolute right-[60px] top-[40px] w-[200px] h-[200px] bg-[rgb(255,143,58)] filter blur-[80px] z-1 rounded-full"></div>
        <div className="absolute right-[-60px] bottom-[-50px] w-[200px] h-[200px] bg-[rgb(255,38,38)] filter blur-[80px] z-1 rounded-full"></div>
        
        <h1 className="md:text-7xl text-4xl font-medium tracking-wider text-white mb-3 z-10">Top Products</h1>

        <div className="z-10 product_container">
            {/* PRODUCT CARD */}
            <div className="product_card flex flex-col md:w-[250px] w-full md:h-[300px] h-[400px] mt-10 bg-white rounded-[25px] shadow-lg p-6">
                <div className="group w-full h-[175px] rounded-2xl overflow-hidden bg-black relative cursor-pointer">
                    <img src={Product} alt="product" className="w-full h-full object-cover object-center opacity-100 group-hover:opacity-40 transition-opacity duration-100"/>
                    <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-md font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-150 ease-in-out">View details +</h1>
                </div>

                <div className="flex flex-col justify-between h-[193px] py-3">
                    <div className="mt-6 flex w-full justify-between items-center">
                        <div>
                            <h1 className="text-lg font-semibold text-gray-600 mb-1">Complete Set outfit</h1>
                            <h1 className="text-md font-semibold text-gray-600">2024</h1>
                        </div>
                        <a href="" className="text-5xl ml-6">
                            <IoAddCircle />
                        </a>
                    </div>
                    <h1 className="text-md text-gray-400">NIKE</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">$120.00</h1>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-lg text-gray-600">28 reviews</h1>
                            <div className="flex text-yellow-600 text-xl">
                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSLine />
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
            {/* PRODUCT CARD */}
            <div className="product_card flex flex-col md:w-[250px] w-full md:h-[300px] h-[400px] mt-10 bg-white rounded-[25px] shadow-lg p-6">
                <div className="group w-full h-[175px] rounded-2xl overflow-hidden bg-black relative cursor-pointer">
                    <img src={Product} alt="product" className="w-full h-full object-cover object-center opacity-100 group-hover:opacity-40 transition-opacity duration-100"/>
                    <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-md font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-150 ease-in-out">View details +</h1>
                </div>

                <div className="flex flex-col justify-between h-[193px] py-3">
                    <div className="mt-6 flex w-full justify-between items-center">
                        <div>
                            <h1 className="text-lg font-semibold text-gray-600 mb-1">Complete Set outfit</h1>
                            <h1 className="text-md font-semibold text-gray-600">2024</h1>
                        </div>
                        <a href="" className="text-5xl ml-6">
                            <IoAddCircle />
                        </a>
                    </div>
                    <h1 className="text-md text-gray-400">NIKE</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">$120.00</h1>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-lg text-gray-600">28 reviews</h1>
                            <div className="flex text-yellow-600 text-xl">
                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSLine />
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
            {/* PRODUCT CARD */}
            <div className="product_card flex flex-col md:w-[250px] w-full md:h-[300px] h-[400px] mt-10 bg-white rounded-[25px] shadow-lg p-6">
                <div className="group w-full h-[175px] rounded-2xl overflow-hidden bg-black relative cursor-pointer">
                    <img src={Product} alt="product" className="w-full h-full object-cover object-center opacity-100 group-hover:opacity-40 transition-opacity duration-100"/>
                    <h1 className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white text-md font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-150 ease-in-out">View details +</h1>
                </div>

                <div className="flex flex-col justify-between h-[193px] py-3">
                    <div className="mt-6 flex w-full justify-between items-center">
                        <div>
                            <h1 className="text-lg font-semibold text-gray-600 mb-1">Complete Set outfit</h1>
                            <h1 className="text-md font-semibold text-gray-600">2024</h1>
                        </div>
                        <a href="" className="text-5xl ml-6">
                            <IoAddCircle />
                        </a>
                    </div>
                    <h1 className="text-md text-gray-400">NIKE</h1>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">$120.00</h1>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-lg text-gray-600">28 reviews</h1>
                            <div className="flex text-yellow-600 text-xl">
                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSLine />
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
            
        </div>

        <a href="" className="md:mt-20 mt-10 md:text-3xl text-md uppercase md:py-6 py-2 md:px-36 px-10 bg-white opacity-80 text-pink-600 shadow rounded-lg z-10">Go To Shop</a>

    </div>
  )
}

export default ProductSection