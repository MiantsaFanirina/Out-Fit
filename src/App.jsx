import "./App.sass"

// Router
import { Routes, Route } from "react-router-dom"

// Pages
import Home from "./pages/Home"
import Shop from "./pages/Shop"

// components
import Navbar from "./components/Navbar/Navbar"

// icons
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

function App() {

  return (
    <>
      <Navbar />

      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </div>

      <footer className="w-full bg-pink-400 bottom-0 left-0 md:px-20 px-6 py-10 flex justify-between items-center text-white">
        <p className="md:text-lg text-sm">© 2022 Miantsa. All rights reserved.</p>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Media</h1>
          <div className="flex text-3xl">
            <a href="" className="hover:text-gray-400 transition-all mr-3"><FaFacebook/></a>
            <a href="" className="hover:text-gray-400 transition-all mr-3"><FaInstagramSquare/></a>
            <a href="" className="hover:text-gray-400 transition-all "><SiGmail/></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
