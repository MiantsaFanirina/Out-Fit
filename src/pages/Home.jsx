import React from 'react'

// Assets
import Hero from "../assets/home/hero.gif"
import Product from "../assets/products/product1.jpeg"

// icons
import { IoAddCircle } from "react-icons/io5"
import { RiStarSFill, RiStarSLine } from "react-icons/ri"

// components
import ProductSection from '../components/ProductSection/ProductSection'

function 
Home() {
    return (
        <>
            <div className="py-10 md:p-10 xl:px-56 px-1">

                    {/* HERO SECTION */}
                    <div className="w-full flex md:flex-row flex-col md:justify-between items-center">
                        <div className="md:mb-0 mb-6 md:text-left text-center">
                            <h1 className="md:text-8xl text-5xl tracking-wider mx-10 md:my-10">Buy Here</h1>
                            <h2 className="md:text-7xl text-4xl tracking-wider mx-10 md:my-10 my-6 md:mt-3 text-gray-800">With The Best Selling Price</h2>
                            <a href="" className="xltext-3xl tracking-wider mx-10 my-10 mt-3 bg-pink-400 uppercase text-semibold text-white rounded-md py-3 px-10">Beggin to Buy</a>
                        </div>
                        <div className="md:w-1/2 h-auto md:px-10 md:py-20 p-3">
                            <img src={Hero} alt="hero"/>
                        </div>
                    </div>
                    
                    {/* PRODUCT SECTION */}
                    {/* mobile */}
                    <div className="w-full md:hidden flex">
                        <div className="relative  w-full flex flex-col items-center bg-pink-400 md:p-20 p-10 md:mt-10 mt-0 rounded-lg overflow-hidden">
                            
                            {/* MORPH BACKGROUND */}
                            <div className="absolute left-[60px] bottom-[50px] w-[200px] h-[200px] bg-[rgb(116,62,155)] filter blur-[80px] z-1 rounded-full"></div>
                            <div className="absolute right-[60px] top-[40px] w-[200px] h-[200px] bg-[rgb(255,143,58)] filter blur-[80px] z-1 rounded-full"></div>
                            <div className="absolute right-[-60px] bottom-[-50px] w-[200px] h-[200px] bg-[rgb(255,38,38)] filter blur-[80px] z-1 rounded-full"></div>
                            
                            <h1 className="md:text-7xl text-4xl font-medium tracking-wider text-white mb-3 z-10">Top Products</h1>

                            <div className="w-full flex flex-wrap justify-evenly z-10">
                                {/* PRODUCT CARD */}
                                <div className="flex flex-col md:w-[250px] w-full md:h-[300px] h-[400px] mt-10 bg-white rounded-[25px] shadow p-6">
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
                                <div className="flex flex-col md:w-[250px] w-full md:h-[300px] h-[400px] mt-10 bg-white rounded-[25px] shadow p-6">
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
                                <div className="flex flex-col md:w-[250px] w-full md:h-[300px] h-[400px] mt-10 bg-white rounded-[25px] shadow p-6">
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
                    </div>

                    {/* Large screen */}
                    <div className="w-full hidden md:flex">
                        <ProductSection/>
                    </div>
                    

                    <div className="w-full flex flex-col md:mt-36 mt-6 md:mb-36 mb-10">

                        <div className="md:mx-[0px] md:mb-10 md:p-10 p-6 flex md:flex-row flex-col-reverse items-center w-full">
                            <div className="md:w-1/2 md:mr-20 mr-0 w-full"> 
                                <h1 className="md:text-5xl text-4xl md:font-medium flex flex-col">
                                    <div className="flex items-center">
                                        <span className="bg-pink-400 min-w-[30px] mb-2 max-w-[30px] max-h-[30px] min-h-[30px] rounded-full text-2xl font-bold text-white flex items-center justify-center">1</span> 
                                        <h1 className='text-2xl md:ml-6 ml-3 text-gray-800'>Elevate Your Style</h1>
                                    </div>
                                    Shop Exclusive Outfits Now!
                                </h1>
                                <p className="md:text-2xl md:mt-6 text-lg text-gray-600">Explore our curated collection of trendy outfits that redefine fashion. From casual chic to elegant sophistication, find the perfect ensemble to showcase your unique style.</p>
                            </div>
                            <img src="/assets/home/clothes.svg" alt="" className="md:w-1/2 w-full px-16 md:mb-0 mb-10" />
                        </div>

                        <div className="md:mx-[0px] md:mb-10 md:p-10 p-6 flex md:flex-row-reverse flex-col-reverse items-center w-full">
                            <div className="md:w-1/2 md:ml-20 mr-0 w-full"> 
                                <h1 className="md:text-5xl text-4xl md:font-medium flex flex-col">
                                    <div className="flex items-center">
                                        <span className="bg-pink-400 min-w-[30px] mb-2 max-w-[30px] max-h-[30px] min-h-[30px] rounded-full text-2xl font-bold text-white flex items-center justify-center">2</span> 
                                        <h1 className='text-2xl md:ml-6 ml-3 text-gray-800'>Discover Your Style</h1>
                                    </div>
                                    Find the Perfect Outfit Tailored for You!
                                </h1>
                                <p className="md:text-2xl md:mt-6 text-lg text-gray-600">Let us guide you to your fashion haven. Our diverse collection ensures that you find the best outfit that complements your personality and preferences. Elevate your wardrobe and step into a world where style meets individuality.</p>
                            </div>
                            <img src="/assets/home/find.svg" alt="" className="md:w-1/2 w-full md:px-56 px-20 md:mb-0 mb-10" />
                        </div>

                        <div className="md:mx-[0px] md:mb-10 md:p-10 p-6 flex md:flex-row flex-col-reverse items-center w-full">
                            <div className="md:w-1/2 md:mr-20 mr-0 w-full"> 
                                <h1 className="md:text-5xl text-4xl md:font-medium flex flex-col">
                                    <div className="flex items-center">
                                        <span className="bg-pink-400 min-w-[30px] mb-2 max-w-[30px] max-h-[30px] min-h-[30px] rounded-full text-2xl font-bold text-white flex items-center justify-center">3</span> 
                                        <h1 className='text-2xl md:ml-6 ml-3 text-gray-800'>Delightful Surprises</h1>
                                    </div>
                                    Enjoy Free Delivery on Every Order!
                                </h1>
                                <p className="md:text-2xl md:mt-6 text-lg text-gray-600">We believe in adding joy to your shopping experience. That's why we're offering free delivery on all orders. Unbox happiness without worrying about additional costs – because your satisfaction is our priority.</p>
                            </div>
                            <img src="/assets/home/delivery.svg" alt="" className="md:w-1/2 w-full px-16 md:mb-0 mb-10" />
                        </div>

                        <div className="md:mx-[0px] md:mb-10 md:p-10 p-6 flex md:flex-row-reverse flex-col-reverse items-center w-full">
                            <div className="md:w-1/2 md:ml-20 mr-0 w-full"> 
                                <h1 className="md:text-5xl text-4xl md:font-medium flex flex-col">
                                    <div className="flex items-center">
                                        <span className="bg-pink-400 min-w-[30px] mb-2 max-w-[30px] max-h-[30px] min-h-[30px] rounded-full text-2xl font-bold text-white flex items-center justify-center">4</span> 
                                        <h1 className='text-2xl md:ml-6 ml-3 text-gray-800'>Shop with Confidence</h1>
                                    </div>
                                    Secure Payments Anytime, Anywhere!
                                </h1>
                                <p className="md:text-2xl md:mt-6 text-lg text-gray-600">Experience worry-free transactions with our state-of-the-art security. Whether you're using our user-friendly mobile app or website, your payments are safeguarded, ensuring a seamless and protected shopping journey.</p>
                            </div>
                            <img src="/assets/home/pay.svg" alt="" className="md:w-1/2 w-full md:px-36 px-20 mb-10" />
                        </div>

                        {/* <div className="mx-10 md:mb-0 mb-10">
                            <h1 className="md:text-5xl text-4xl md:font-medium">Discover Your Style: Find the Perfect Outfit Tailored for You!</h1>
                            <p className="md:text-2xl md:mt-6 text-lg text-gray-600">Let us guide you to your fashion haven. Our diverse collection ensures that you find the best outfit that complements your personality and preferences. Elevate your wardrobe and step into a world where style meets individuality.</p>
                        </div>

                        <div className="mx-10 md:mb-0 mb-10">
                            <h1 className="md:text-5xl text-4xl md:font-medium">Secure Payments Anytime, Anywhere!</h1>
                            <p className="md:text-2xl md:mt-6 text-lg text-gray-600">Experience worry-free transactions with our state-of-the-art security. Whether you're using our user-friendly mobile app or website, your payments are safeguarded, ensuring a seamless and protected shopping journey.</p>
                        </div>

                        <div className="mx-10 md:mb-0">
                            <h1 className="md:text-5xl text-4xl md:font-medium">Enjoy Free Delivery on Every Order!</h1>
                            <p className="md:text-2xl md:mt-6 text-lg text-gray-600"> We believe in adding joy to your shopping experience. That's why we're offering free delivery on all orders. Unbox happiness without worrying about additional costs – because your satisfaction is our priority.</p>
                        </div> */}
                    </div>

            </div>
        </>
    )
}

export default Home