import React from 'react'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import microphone from '../../assets/microphone.png'
import bell from '../../assets/bell.png'
import avtar from '../../assets/avtar.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="main w-full shadow-2xl bg-white py-1">
        <div className='navbar flex justify-between items-center'>
            <div className="start flex gap-3 mr-2">
                {/* <div className='bar text-center p-2 rounded-full bg-fuchsia-600 m-1' > */}
                    <button className='bar text-center p-2 rounded-full m-1' >
                        <img src={menu} alt="bar" className='w-6 ' />
                    </button>
                {/* </div> */}
                <Link to="/">
                <div className="logo flex gap-1 items-center ">
                    <img src={logo} alt="YT-LOGO" className='w-8 object-contain' />
                    <span className='font-bold font-sans text-center text-2xl'>YouTube <sup className='font-medium text-[12px] text-gray-700'>IN</sup></span>
                </div>
                </Link>
            </div>

            <div className="middle flex gap-4 items-center ">
                <div className=' flex '>
                    <div className="search flex">
                        <div className="input w-full border-[1px] border-gray-300  rounded-bl-4xl rounded-l-4xl mt-1 mb-1 ">
                            <input type="text" placeholder='Search' aria-expanded='true' aria-autocomplete='list'  autoCorrect='off' autoComplete='off' role='combobox' className='border-0 outline-0  pl-5 pr-5 text-2xl mt-1 mb-1'/>
                        </div>
                        <div className="search-logo border-[1px] border-gray-300 rounded-br-4xl rounded-r-4xl text-center pr-3 pl-3 bg-gray-100 border-l-0 mt-1 mb-1 flex items-center">
                            <button>
                                <img src={search} alt="search" className='w-8 text-center' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='micro'>
                    <button className=' bg-gray-200 p-1.5 rounded-full'>
                        <img src={microphone} alt="MicroPhone" className='w-7' />
                    </button>
                </div>
            </div>
            <div className="end flex gap-4 mr-4 items-center">
                <div className="create  bg-gray-200 rounded-4xl pl-5 pr-5 p-2">
                    <button><span className='font-sans text-xl font-medium '> + Create</span></button>
                </div>
                <div>
                    <button className='rounded-full p-2 bg-gray-200'> 
                        <img src={bell} alt="Notification" className='w-6'/>
                    </button>
                </div>
                <div className='rounded-full p-3 bg-gray-300'>
                        <img src={avtar} alt="Avtar" className='w-7' />
                    
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
