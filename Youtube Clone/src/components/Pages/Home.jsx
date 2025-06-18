import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'

function Home() {
  const [catogery, setCatogery] = useState(0);

  return (
    <>
      <Sidebar catogery={catogery} setCatogery={setCatogery}/>
      
      <Feed catogery={catogery}  />
      
      
    </>
  )
}

export default Home