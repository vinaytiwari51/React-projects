import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Feed from '../Feed/Feed'




function Layout() {
    // const [sidebar, setSidebar] = useState(true);

    
  return (
    <>
      <Navbar />
      <Outlet />
     
    </>
  )
}

export default Layout
